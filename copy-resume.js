const fs = require('fs');
const path = require('path');

// This script ensures the resume PDF is copied to the correct locations in the output directory
console.log('Copying resume PDF to output directories...');

// Define paths
const publicDir = path.join(__dirname, 'public');
const outDir = path.join(__dirname, 'out');
const sourceFile = path.join(publicDir, 'ChandanaGutta_Resume.pdf');
const targetFile1 = path.join(outDir, 'ChandanaGutta_Resume.pdf');
const targetDir = path.join(outDir, 'ChandanaGutta');
const targetFile2 = path.join(targetDir, 'ChandanaGutta_Resume.pdf');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  console.error(`Source file not found: ${sourceFile}`);
  console.log('Creating a placeholder PDF file...');
  
  // Create a minimal valid PDF file as a placeholder
  const placeholderPDF = '%PDF-1.4\n1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n3 0 obj\n<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>\nendobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer\n<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n';
  
  // Write placeholder to public directory
  fs.writeFileSync(sourceFile, placeholderPDF);
  console.log(`Created placeholder file: ${sourceFile}`);
}

// Create the output directory if it doesn't exist
if (!fs.existsSync(outDir)) {
  console.log(`Creating directory: ${outDir}`);
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy to root of output directory
fs.copyFileSync(sourceFile, targetFile1);
console.log(`Copied ${sourceFile} to ${targetFile1}`);

// Create the ChandanaGutta subdirectory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy to ChandanaGutta subdirectory
fs.copyFileSync(sourceFile, targetFile2);
console.log(`Copied ${sourceFile} to ${targetFile2}`);

console.log('Resume PDF copying complete');
