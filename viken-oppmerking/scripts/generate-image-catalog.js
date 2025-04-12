import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const projectsPath = path.join(__dirname, '../public/images/projects');
const thumbnailsPath = path.join(__dirname, '../public/images/projects/thumbnails');
const fullsizePath = path.join(__dirname, '../public/images/projects/fullsize');
const dataPath = path.join(__dirname, '../src/data');

// Ensure directories exist
[thumbnailsPath, fullsizePath, dataPath].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Process images
try {
  // Read all files in the projects directory
  const files = fs.readdirSync(projectsPath);
  
  // Filter only image files
  const imageFiles = files.filter(file => {
    try {
      const stats = fs.statSync(path.join(projectsPath, file));
      if (!stats.isFile()) return false;
      
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    } catch (err) {
      return false;
    }
  });
  
  console.log(`Found ${imageFiles.length} images to process`);
  
  // Use Promise.all to wait for all image processing to complete
  const imageProcessingPromises = [];
  
  // Process each image and build the JSON data
  const imageData = imageFiles.map(file => {
    // Generate a human-readable description from the filename
    let description = file
      .replace(/\.[^/.]+$/, '')  // Remove extension
      .replace(/-/g, ' ')        // Replace hyphens with spaces
      .replace(/_/g, ' ')        // Replace underscores with spaces
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    if (description.length < 3 || !/[a-zA-Z]/.test(description)) {
      description = `Project image ${file}`;
    }
    
    // Process the image
    const inputPath = path.join(projectsPath, file);
    const thumbnailPath = path.join(thumbnailsPath, file);
    const fullsizeOutputPath = path.join(fullsizePath, file);
    
    // Create optimized thumbnail (640px width) with orientation preserved
    const thumbnailPromise = sharp(inputPath)
      .rotate() // This will auto-rotate based on EXIF orientation
      .resize(640, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .withMetadata() // Preserve metadata including orientation
      .jpeg({ quality: 80 })
      .toFile(thumbnailPath)
      .then(() => {
        console.log(`✓ Created thumbnail for ${file}`);
      })
      .catch(err => {
        console.error(`Error creating thumbnail for ${file}:`, err);
      });
    
    imageProcessingPromises.push(thumbnailPromise);
    
    // Create optimized fullsize version (1920px width) with orientation preserved
    const fullsizePromise = sharp(inputPath)
      .rotate() // This will auto-rotate based on EXIF orientation
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .withMetadata() // Preserve metadata including orientation
      .jpeg({ quality: 90 })
      .toFile(fullsizeOutputPath)
      .then(() => {
        console.log(`✓ Created fullsize version for ${file}`);
      })
      .catch(err => {
        console.error(`Error creating fullsize version for ${file}:`, err);
      });
    
    imageProcessingPromises.push(fullsizePromise);
    
    // Return image data for JSON
    return {
      filename: file,
      description
    };
  });
  
  // Wait for all image processing to complete before writing the JSON file
  Promise.all(imageProcessingPromises)
    .then(() => {
      // Write the JSON file
      const jsonPath = path.join(dataPath, 'project-images.json');
      fs.writeFileSync(jsonPath, JSON.stringify(imageData, null, 2));
      console.log(`✓ Created project-images.json with ${imageData.length} entries`);
    })
    .catch(error => {
      console.error('Error processing images:', error);
    });
  
} catch (error) {
  console.error('Error processing images:', error);
}