/**
 * This script helps test GitHub Pages builds locally by setting the
 * NODE_ENV to 'production' during build, which activates the basePath
 * and other production-specific settings in next.config.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting production build preview...');

// Set environment to production for the build
process.env.NODE_ENV = 'production';

try {
  // Run the Next.js build with production env
  console.log('🏗️ Building project with production settings...');
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
  
  // Ensure .nojekyll exists in the out directory
  const outDir = path.join(__dirname, 'out');
  const nojekyllPath = path.join(outDir, '.nojekyll');
  
  if (!fs.existsSync(nojekyllPath)) {
    console.log('Creating .nojekyll file in output directory...');
    fs.writeFileSync(nojekyllPath, '');
    console.log('✅ Created .nojekyll file');
  }
  
  // Copy root index.html to the out directory if it doesn't exist
  const rootIndexPath = path.join(__dirname, 'index.html');
  const outIndexPath = path.join(outDir, 'index.html');
  
  if (fs.existsSync(rootIndexPath) && !fs.existsSync(outIndexPath)) {
    console.log('Copying root index.html to output directory...');
    fs.copyFileSync(rootIndexPath, outIndexPath);
    console.log('✅ Copied index.html');
  }
  
  console.log('\n🎉 Production build preview is ready in the "out" directory');
  console.log('\nTo test locally:');
  console.log('1. Install a simple HTTP server if not already installed:');
  console.log('   npm install -g serve');
  console.log('2. Navigate to the project directory and run:');
  console.log('   serve out');
  console.log('3. Open your browser to the URL shown in the terminal');
  
} catch (error) {
  console.error('❌ Build preview failed:', error.message);
  process.exit(1);
}