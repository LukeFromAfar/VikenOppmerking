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

// Category patterns - adjust based on your actual file naming patterns
const categoryPatterns = {
  'parking': ['parking', 'garage', 'p-', 'lot'],
  'school': ['school', 'yard', 'playground'],
  'cleaning': ['cleaning', 'wash', 'vask'],
  'fixing': ['repair', 'fix', 'asphalt', 'road'],
  'featured': ['featured']
};

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
    const lowercaseFilename = file.toLowerCase();
    const categories = [];
    
    // Determine categories based on filename
    Object.entries(categoryPatterns).forEach(([category, patterns]) => {
      if (patterns.some(pattern => lowercaseFilename.includes(pattern))) {
        categories.push(category);
      }
    });
    
    // If no categories were matched, put in "other"
    if (categories.length === 0) {
      categories.push('other');
    }
    
    // Generate a human-readable description from the filename
    let description = file
      .replace(/\.[^/.]+$/, '')  // Remove extension
      .replace(/-/g, ' ')        // Replace hyphens with spaces
      .replace(/_/g, ' ')        // Replace underscores with spaces
      .replace(/\d+/g, '')       // Remove numbers
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    if (description.length < 3) {
      description = `Project image ${file}`;
    }
    
    // Process the image
    const inputPath = path.join(projectsPath, file);
    const thumbnailPath = path.join(thumbnailsPath, file);
    const fullsizeOutputPath = path.join(fullsizePath, file);
    
    // Create optimized thumbnail (640px width)
    const thumbnailPromise = sharp(inputPath)
      .resize(640, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 })
      .toFile(thumbnailPath)
      .then(() => {
        console.log(`✓ Created thumbnail for ${file}`);
      })
      .catch(err => {
        console.error(`Error creating thumbnail for ${file}:`, err);
      });
    
    imageProcessingPromises.push(thumbnailPromise);
    
    // Create optimized fullsize version (1920px width)
    const fullsizePromise = sharp(inputPath)
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
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
      categories,
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