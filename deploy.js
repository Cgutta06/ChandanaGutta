const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const ghPagesUrl = 'https://cgutta06.github.io/ChandanaGutta/';
const branchName = 'gh-pages';
const buildCommand = 'npm run build';

console.log('🚀 Starting manual deployment process');

// Ensure we're on the main branch
try {
  console.log('Checking current branch...');
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  
  if (currentBranch !== 'main') {
    console.error('❌ Please run this script from the main branch.');
    process.exit(1);
  }
  
  console.log('✅ Currently on main branch');
} catch (error) {
  console.error('❌ Error checking git branch:', error.message);
  process.exit(1);
}

// Build the project
try {
  console.log('Building project...');
  execSync(buildCommand, { stdio: 'inherit' });
  console.log('✅ Build completed');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Create .nojekyll
const outDir = path.join(__dirname, 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

if (!fs.existsSync(nojekyllPath)) {
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
  console.log('✅ Created .nojekyll file');
}

// Deploy to GitHub Pages
try {
  console.log(`Deploying to ${branchName} branch...`);
  
  // Add all files from the out directory
  execSync(`git add -f out`, { stdio: 'inherit' });
  
  // Create a commit
  execSync(`git commit -m "Deploy to GitHub pages"`, { stdio: 'inherit' });
  
  // Push to subtree
  execSync(`git subtree push --prefix out origin ${branchName}`, { stdio: 'inherit' });
  
  console.log('✅ Deployment successful!');
  console.log(`🌐 Visit your site at: ${ghPagesUrl}`);
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}