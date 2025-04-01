# Chandana Gutta Portfolio - Developer Documentation

This document provides in-depth technical information about the portfolio project implementation, configuration, and deployment. It serves as a comprehensive guide for developers working on maintaining or extending the project.

## 📋 Table of Contents

- [Technical Architecture](#technical-architecture)
- [Environment Configuration](#environment-configuration)
- [Next.js Static Export](#nextjs-static-export)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Path Handling Details](#path-handling-details)
- [Client-Side Scripts](#client-side-scripts)
- [Performance Optimizations](#performance-optimizations)
- [Common Gotchas and Solutions](#common-gotchas-and-solutions)
- [Extension Points](#extension-points)

## 🏗️ Technical Architecture

### Core Framework: Next.js 14

The project uses Next.js 14 with the following configuration:

- **Static Export Mode**: The site is built as a completely static site using `output: 'export'` in next.config.js
- **React 18**: Utilizing the latest React features
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For animations and transitions

### Component Structure

The project follows a component-based architecture:

1. **Page Components** (`src/pages/`):
   - Main entry points for each route
   - Handle page-level state and logic
   - Import and compose smaller components

2. **UI Components** (`src/components/`):
   - Reusable UI elements
   - Receive props from page components
   - Handle component-specific animations and interactions

3. **Utility Functions** (`src/utils/`):
   - Helper functions for common tasks
   - Path handling for GitHub Pages deployment

### Data Flow

The site primarily uses static data defined within the components. The data flow is:

1. Static data defined in page components (like `projects` array in portfolio.js)
2. Passed down to child components as props
3. State managed with React hooks (useState, useEffect) for interactive elements

## ⚙️ Environment Configuration

### Environment Variables

The project uses environment variables to handle different deployment environments:

- `.env.local`: For local development (empty base path)
- `.env.production`: For production/GitHub Pages (includes base path)

### Next.js Configuration

The `next.config.js` file contains critical configuration for:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static HTML export - replaces the need for 'next export' command
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Required for GitHub Pages
  trailingSlash: true,
  
  // Base path required for GitHub Pages with repository name
  basePath: process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ChandanaGutta/' : '',  // Note the trailing slash
  
  // Disable static optimization to prevent JSON data fetching attempts
  staticPageGenerationTimeout: 1000,
}
```

Key settings:
- `output: 'export'`: Generates static HTML files
- `images.unoptimized: true`: Disables Next.js image optimization (not compatible with static export)
- `trailingSlash: true`: Adds trailing slashes to URLs for better compatibility with GitHub Pages
- `basePath`: Sets the base URL path in production to include the repository name
- `assetPrefix`: Ensures static assets are loaded from the correct path with the repository name

## 🚀 Next.js Static Export

### How Static Export Works

Next.js static export (`output: 'export'`) generates a complete static version of the site:

1. Pre-renders all pages to HTML at build time
2. Generates the necessary JavaScript for client-side interactions
3. Places all static assets in the `out` directory
4. Eliminates the need for a Node.js server in production

### Static Export Limitations

Important limitations to be aware of:

1. **No Server-Side Features**: API routes, server-side rendering, and data fetching methods like `getServerSideProps` do not work
2. **No Image Optimization**: Next.js image optimization is disabled
3. **No Middleware**: Next.js middleware does not function in static exports
4. **Limited Dynamic Routes**: All dynamic routes must be pre-defined with `getStaticPaths`
5. **No Incremental Static Regeneration**: All content is generated at build time

### Build Process

The build process is defined in `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build && node copy-pdf.js",
  "start": "next start",
  "lint": "next lint"
}
```

The `copy-pdf.js` script ensures the resume PDF is copied to the necessary location in the output directory.

## 🌐 GitHub Pages Deployment

### GitHub Actions Workflow

The deployment is automated via GitHub Actions in `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci || (rm -rf node_modules package-lock.json && npm install)

      - name: Build
        run: |
          npm run build
          touch out/.nojekyll
          # Also copy PDF to both locations
          mkdir -p out/ChandanaGutta
          cp out/ChandanaGutta_Resume.pdf out/ChandanaGutta/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This workflow:
1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Adds the `.nojekyll` file to disable Jekyll processing
6. Copies the resume PDF to both required locations
7. Uploads the built files as an artifact
8. Deploys to GitHub Pages

### GitHub Pages Configuration

The GitHub repository must be configured for GitHub Pages:
- In repository Settings > Pages
- Source should be set to "GitHub Actions"

### Jekyll Disabling

GitHub Pages uses Jekyll by default, which ignores files and directories that start with underscores. Since Next.js generates files with names starting with underscores (like `_next`), Jekyll processing must be disabled:

1. `.nojekyll` file in the root directory
2. `.nojekyll` file in the `out` directory (added during build)
3. `.nojekyll` file in the `public` directory (copied to `out` during build)

## 🛤️ Path Handling Details

### Path Utility Function

The `src/utils/path-utils.js` file contains the critical utility for handling paths:

```javascript
// Helper utility for handling paths with repository name
const basePath = process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '';

export function getImagePath(path) {
  if (!path) return '';
  // If the path already starts with the base path, don't add it again
  if (path.startsWith(basePath)) return path;
  // If the path starts with a slash, add the base path
  if (path.startsWith('/')) return `${basePath}${path}`;
  // Otherwise, add the base path and a slash
  return `${basePath}/${path}`;
}

export default {
  getImagePath
};
```

This function:
- Determines the base path based on the environment
- Ensures paths include the repository name in production
- Avoids double-adding the base path
- Handles different path formats

### Path Usage Guidelines

For proper path handling:

1. **Static Assets** (images, PDFs, etc.):
   - Use the `getImagePath` utility function:
   - Example: `src={getImagePath('/images/profile.jpg')}`

2. **Navigation Links with Next.js `<Link>`**:
   - Use direct paths without the utility:
   - Example: `<Link href="/portfolio">Portfolio</Link>`
   - Next.js automatically handles the base path for these

3. **Direct URL Navigation** (like PDF downloads):
   - Use the full path including the repository name:
   - Example: `href="/ChandanaGutta/ChandanaGutta_Resume.pdf"`

### Base Path Detection

In production, the site detects if it's running on GitHub Pages and adjusts paths accordingly:

- Uses `process.env.NODE_ENV === 'production'` for server-side rendering
- Uses client-side scripts for runtime path correction

## 📜 Client-Side Scripts

### Error Handler Script

The `public/error-handler.js` script handles common client-side errors:

```javascript
// Simple error handler for GitHub Pages deployment issues
window.addEventListener('error', function(event) {
  console.log('Caught error:', event.error);
  // Prevent the error from breaking the application
  event.preventDefault();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  console.log('Unhandled promise rejection:', event.reason);
  // Prevent the error from breaking the application
  event.preventDefault();
});
```

This script catches and logs errors without breaking the application.

### Path Fixing Script

The `public/fix-paths.js` script handles path-related issues at runtime:

```javascript
// Client-side script to fix path issues on GitHub Pages
(function() {
  // Only run on GitHub Pages
  if (!window.location.hostname.includes('github.io')) return;
  
  // Intercept fetch requests to prevent 404 errors for JSON data files
  const originalFetch = window.fetch;
  window.fetch = function(resource, init) {
    // If trying to fetch Next.js data files, return empty data instead
    if (resource && typeof resource === 'string' && 
        resource.includes('/_next/data/') && 
        resource.endsWith('.json')) {
      console.log('Intercepted fetch for', resource);
      return Promise.resolve(new Response(JSON.stringify({ pageProps: {} }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    
    // Otherwise, use original fetch
    return originalFetch.apply(this, arguments);
  };
  
  // Fix PDF links - check if user is trying to access a PDF
  const path = window.location.pathname;
  if (path === '/ChandanaGutta_Resume.pdf' || path === '/ChandanaGutta/ChandanaGutta_Resume.pdf') {
    // Redirect to the correct PDF path
    console.log('Fixing PDF path');
    window.location.href = '/ChandanaGutta/ChandanaGutta_Resume.pdf';
  }
  
  // Fix double path issue (e.g., /ChandanaGutta/ChandanaGutta/portfolio)
  if (path.includes('/ChandanaGutta/ChandanaGutta/')) {
    console.log('Fixing double path issue');
    window.location.href = path.replace('/ChandanaGutta/ChandanaGutta/', '/ChandanaGutta/');
  }
})();
```

This script:
- Intercepts fetch requests for JSON data files to prevent 404 errors
- Fixes PDF path issues by redirecting to the correct path
- Corrects double path issues (when base path is added twice)

### Script Integration

Both scripts are included in the document head in `src/pages/_document.js`:

```jsx
<Head>
  {/* Simple base tag without conditional logic */}
  <base href="/ChandanaGutta/" />
  
  {/* Error handling script */}
  <script src="/ChandanaGutta/error-handler.js" type="text/javascript"></script>
  
  {/* Path fixing script */}
  <script src="/ChandanaGutta/fix-paths.js" type="text/javascript"></script>
</Head>
```

## ⚡ Performance Optimizations

### Image Optimization

Since Next.js image optimization doesn't work with static export, manual image optimization is important:

1. **Pre-optimize Images**:
   - Compress images before adding them to the project
   - Use appropriate image formats (JPEG for photos, PNG for graphics with transparency)
   - Resize images to appropriate dimensions for their display size

2. **Lazy Loading**:
   - Images below the fold use lazy loading via the `loading="lazy"` attribute

### Animation Performance

Framer Motion animations are optimized for performance:

1. **Initial Page Load**:
   - Key elements animate in sequence to reduce initial rendering load
   - Heavy animations are delayed until after critical content is displayed

2. **Scroll-Based Animations**:
   - Use `whileInView` with `viewport={{ once: true }}` to trigger animations only once when scrolled into view
   - Implement staggered children animations to spread out animation work

### JavaScript Bundle Size

To keep JavaScript bundle size minimal:

1. **Component Code Splitting**:
   - Each page is a separate chunk loaded only when needed
   - Heavy components use dynamic imports when appropriate

2. **Tree Shaking**:
   - Import only needed components from libraries
   - For example, import specific icons from Hero Icons rather than the entire library

## 🧩 Common Gotchas and Solutions

### 1. Double Base Path in URLs

**Problem**: URLs sometimes include the repository name twice: `/ChandanaGutta/ChandanaGutta/portfolio`

**Solution**:
- For navigation, use direct paths without the base path
- Let Next.js handle adding the base path through its configuration
- The fix-paths.js script corrects double paths at runtime

### 2. PDF Not Loading Correctly

**Problem**: The resume PDF doesn't load or returns a 404 error

**Solution**:
- Ensure the PDF exists in both the root and the repository subdirectory
- Use the full path including the repository name for direct links
- The copy-pdf.js script handles copying the PDF to both locations during build

### 3. JSON 404 Errors in Console

**Problem**: Console shows 404 errors for `.json` files in the `/_next/data/` directory

**Solution**:
- These are Next.js data files that aren't actually generated during static export
- The fix-paths.js script intercepts these fetch requests and returns empty data
- This prevents the errors from affecting functionality

### 4. Missing Images in Portfolio

**Problem**: Some portfolio projects reference images that don't exist

**Solution**:
- Either add the missing images to the public/images directory
- Or update the portfolio.js file to reference existing images
- Always verify that referenced images exist before deployment

## 🔌 Extension Points

### Adding New Pages

To add a new page to the portfolio:

1. Create a new file in `src/pages/` (e.g., `awards.js`)
2. Import necessary components and utilities
3. Create and export a page component
4. Update the Navigation component to include a link to the new page

Example:

```jsx
// src/pages/awards.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/path-utils';

export default function Awards() {
  return (
    <>
      <Head>
        <title>Awards | Chandana Gutta</title>
        <meta name="description" content="Chandana Gutta's professional awards and recognition." />
      </Head>
      
      {/* Page content here */}
    </>
  );
}
```

### Adding New Components

To create a new reusable component:

1. Create a new file in `src/components/` (e.g., `AwardCard.js`)
2. Import necessary dependencies
3. Create and export the component

Example:

```jsx
// src/components/AwardCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/path-utils';

const AwardCard = ({ title, date, organization, description, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Component content here */}
    </motion.div>
  );
};

export default AwardCard;
```

### Styling Extensions

To add or modify styles:

1. **Global Styles**: Edit `src/styles/globals.css`
2. **Component-specific styles**: Use Tailwind CSS classes directly in components
3. **Custom Tailwind classes**: Add to `tailwind.config.js` if needed

### Data Management Extensions

For larger projects, consider adding:

1. **Data Files**: Move static data to JSON or JavaScript files in a `src/data/` directory
2. **Content Management**: Integrate with a headless CMS for easier content updates
3. **API Integration**: Add serverless functions for dynamic features (would require changing from static export to a hosted platform that supports API routes)

## 🧪 Testing

The project can be extended with testing:

1. **Jest**: For unit testing components and utilities
2. **React Testing Library**: For component integration tests
3. **Cypress**: For end-to-end testing

To add Jest and React Testing Library:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Then create test files alongside components with `.test.js` extension.

## 📦 Deployment Alternatives

While the project is set up for GitHub Pages, it can be deployed to other platforms:

1. **Vercel**: Best option for Next.js projects with full feature support
   - Supports all Next.js features including API routes
   - Zero configuration deployment
   - Free tier available

2. **Netlify**: Good option with similar benefits to Vercel
   - Supports static exports and edge functions
   - Good build caching and preview deployments
   - Free tier available

3. **AWS Amplify**: Enterprise-grade option
   - Seamless CI/CD pipeline
   - Integrated with other AWS services
   - Monitoring and analytics

To deploy to these platforms, you may need to adjust the `next.config.js` settings, particularly removing the `basePath` and `assetPrefix` configurations if deploying to a custom domain.

---

This development guide should provide all the technical details needed to understand, maintain, and extend the portfolio website project. For further assistance or contributions, please create an issue or pull request on the GitHub repository.