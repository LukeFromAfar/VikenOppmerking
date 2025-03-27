import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname to ES module equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/images/projects');
const outputDir = path.join(__dirname, 'public/images/projects/thumbnails');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
    sharp(path.join(inputDir, file))
      .resize(200) // Adjust the size as needed
      .toFile(path.join(outputDir, file), (err, info) => {
        if (err) {
          console.error('Error generating thumbnail for', file, err);
        } else {
          console.log('Generated thumbnail for', file);
        }
      });
  }
});