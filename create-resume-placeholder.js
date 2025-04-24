const fs = require('fs');
const path = require('path');

// This script creates a placeholder PDF file in the public directory
console.log('Creating placeholder PDF file in public directory...');

const publicDir = path.join(__dirname, 'public');
const pdfFile = path.join(publicDir, 'ChandanaGutta_Resume.pdf');

// Create empty PDF file in public directory
console.log(`Creating file: ${pdfFile}`);
fs.writeFileSync(pdfFile, '%PDF-1.4\n1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n3 0 obj\n<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>\nendobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer\n<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF\n');

console.log('PDF placeholder creation complete');
