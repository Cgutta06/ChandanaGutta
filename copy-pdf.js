const fs = require('fs');
const path = require('path');

// This script creates empty placeholder PDF files in both root and /ChandanaGutta/ directory in the output folder
// to ensure the paths exist for the resume links

console.log('Creating placeholder PDF files in output directories...');

const outDir = path.join(__dirname, 'out');
const targetFile1 = path.join(outDir, 'ChandanaGutta_Resume.pdf');
const targetDir = path.join(outDir, 'ChandanaGutta');
const targetFile2 = path.join(targetDir, 'ChandanaGutta_Resume.pdf');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outDir)) {
  console.log(`Creating directory: ${outDir}`);
  fs.mkdirSync(outDir, { recursive: true });
}

// Create empty PDF file in root of output directory if it doesn't exist
if (!fs.existsSync(targetFile1)) {
  console.log(`Creating empty file: ${targetFile1}`);
  fs.writeFileSync(targetFile1, '%PDF-1.4\n1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n3 0 obj\n<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>\nendobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer\n<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n');
}

// Create the ChandanaGutta subdirectory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Create empty PDF file in ChandanaGutta subdirectory if it doesn't exist
if (!fs.existsSync(targetFile2)) {
  console.log(`Creating empty file: ${targetFile2}`);
  fs.writeFileSync(targetFile2, '%PDF-1.4\n1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n3 0 obj\n<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>\nendobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer\n<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n');
}

console.log('PDF placeholder creation complete');
