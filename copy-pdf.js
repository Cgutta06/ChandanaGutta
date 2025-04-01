const fs = require('fs');
const path = require('path');

// This script copies the PDF to both root and /ChandanaGutta/ directory in the output folder
// to ensure it's accessible from both paths

console.log('Copying PDF file to repository subdirectory...');

const outDir = path.join(__dirname, 'out');
const sourceFile = path.join(outDir, 'ChandanaGutta_Resume.pdf');
const targetDir = path.join(outDir, 'ChandanaGutta');
const targetFile = path.join(targetDir, 'ChandanaGutta_Resume.pdf');

// Create the directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy the file
if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied ${sourceFile} to ${targetFile}`);
} else {
  console.error(`Source file not found: ${sourceFile}`);
}

console.log('PDF copying complete');
