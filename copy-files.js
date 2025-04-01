const fs = require('fs');
const path = require('path');

// Function to copy a file
const copyFile = (source, destination) => {
  try {
    fs.copyFileSync(source, destination);
    console.log(`✅ Copied ${source} to ${destination}`);
  } catch (error) {
    console.error(`❌ Error copying ${source}:`, error.message);
  }
};

// Ensure the .nojekyll file exists in the out directory
const outDir = path.join(__dirname, 'out');
const nojekyllSource = path.join(__dirname, '.nojekyll');
const nojekyllDest = path.join(outDir, '.nojekyll');

if (!fs.existsSync(outDir)) {
  console.error('❌ The "out" directory does not exist. Please run the build first.');
  process.exit(1);
}

// Create .nojekyll if it doesn't exist
if (!fs.existsSync(nojekyllSource)) {
  fs.writeFileSync(nojekyllSource, '');
  console.log('✅ Created .nojekyll file in the root directory');
}

// Copy .nojekyll
copyFile(nojekyllSource, nojekyllDest);

// Copy index.html
const indexSource = path.join(__dirname, 'index.html');
const indexDest = path.join(outDir, 'index.html');

if (fs.existsSync(indexSource)) {
  copyFile(indexSource, indexDest);
} else {
  console.error('❌ index.html does not exist in the root directory');
}

console.log('✅ Files copied successfully');
