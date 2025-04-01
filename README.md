# Chandana Gutta - Portfolio Website

A professional portfolio website for Chandana Gutta, Facilities Project Manager, Building Envelope Commissioner, and Architect.

![Portfolio Preview](public/images/og-image.jpg)

## 🌟 Live Site

Visit the live portfolio site at: [https://cgutta06.github.io/ChandanaGutta/](https://cgutta06.github.io/ChandanaGutta/)

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Required Images](#required-images)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [GitHub Pages Configuration](#github-pages-configuration)
- [Troubleshooting](#troubleshooting)
- [Key Features](#key-features)

## 📝 Project Overview

This portfolio website showcases Chandana Gutta's professional experience, projects, and skills in facilities management, building envelope commissioning, and architecture. The site features:

- Modern, responsive design with animations
- Detailed project showcases
- Interactive experience timeline
- Skills visualization
- Contact form
- Resume display and download

## 🔧 Technologies Used

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Hero Icons** - SVG icon set
- **GitHub Pages** - Hosting platform

## 📂 Project Structure

```
chandanagutta/
├── .github/            # GitHub configuration
│   └── workflows/      # GitHub Actions workflows
├── public/             # Static assets
│   ├── images/         # Image assets
│   └── .nojekyll       # Disables Jekyll processing
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── 3d/         # 3D elements
│   │   ├── Footer.js
│   │   ├── Navigation.js
│   │   └── ...
│   ├── pages/          # Next.js pages
│   │   ├── index.js    # Home page
│   │   ├── portfolio.js
│   │   ├── experience.js
│   │   ├── contact.js
│   │   ├── resume.js
│   │   ├── 404.js
│   │   ├── _app.js
│   │   └── _document.js
│   └── styles/         # CSS styles
│       └── globals.css
├── .nojekyll           # Disables Jekyll processing
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
└── tailwind.config.js  # Tailwind configuration
```

## ⚙️ Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/Cgutta06/ChandanaGutta.git
cd ChandanaGutta
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **View the site locally**

Open [http://localhost:3000](http://localhost:3000) in your browser

## 🖼️ Required Images

Before deploying, make sure to add the following images to your project:

### Profile/Personal Images
- `public/images/profile.jpg` - Your professional headshot (600×600px)
- `public/images/og-image.jpg` - Social media preview image (1200×630px)

### Background Images
- `public/images/hero-bg.jpg` - Homepage hero background (1920×1080px)
- `public/images/portfolio-bg.jpg` - Portfolio page header background (1920×1080px)
- `public/images/experience-bg.jpg` - Experience page header background (1920×1080px)
- `public/images/contact-bg.jpg` - Contact page header background (1920×1080px)
- `public/images/contact-image.jpg` - Image for contact information panel (800×400px)

### Project Images
- `public/images/stonebridge.jpg` - Stonebridge Condominium project (800×600px)
- `public/images/cashelmara.jpg` - Cashelmara Condominium project (800×600px)
- `public/images/parkbuilding.jpg` - Park Building project (800×600px)
- `public/images/residential-projects.jpg` - Two-story residential projects (800×600px)
- `public/images/high-rise.jpg` - 20-story residential tower (800×600px)

### Logo Images
- `public/images/ecs-logo.png` - ECS Midwest LLC logo (200×200px)
- `public/images/bgsu-logo.png` - Bowling Green State University logo (200×200px)
- `public/images/reva-logo.png` - Reva University logo (200×200px)
- `public/images/an-logo.png` - AN Architecture logo (200×200px)

### Resume File
- `public/ChandanaGutta_Resume.pdf` - Your resume in PDF format

## 🔄 Development Workflow

1. **Edit Content**
   - Update content in the corresponding page files (`src/pages/`)
   - Add or modify components in the components directory

2. **Style Changes**
   - Global styles are in `src/styles/globals.css`
   - Component-specific styles use Tailwind CSS classes

3. **Adding New Pages**
   - Create a new file in the `src/pages/` directory
   - Update the Navigation component to include links to the new page

4. **Testing**
   - Test the site locally using `npm run dev`
   - Check responsiveness across different screen sizes
   - Verify all links and navigation works correctly

## 🚀 Deployment

### Automatic Deployment with GitHub Actions

The project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Commit and push your changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. GitHub Actions will automatically:
   - Build the Next.js project
   - Export static files
   - Deploy to the `gh-pages` branch
   - Make the site available at your GitHub Pages URL

### Manual Deployment

If needed, you can deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
# Option 1: If you have the gh-pages npm package installed
npx gh-pages -d out

# Option 2: Using git commands
git add -f out/
git commit -m "Deploy to GitHub pages"
git subtree push --prefix out origin gh-pages
```

## ⚙️ GitHub Pages Configuration

After deployment, configure GitHub Pages in your repository:

1. Go to your GitHub repository
2. Click on "Settings"
3. Navigate to "Pages" in the sidebar
4. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"
5. Click "Save"
6. Check the URL shown at the top of the page

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 404 Error on GitHub Pages

If you get a 404 error when visiting your GitHub Pages site:

1. **Check Path Settings**
   - Ensure `next.config.js` has correct `basePath` and `assetPrefix` settings
   - Make sure the GitHub Pages branch (gh-pages) has a `.nojekyll` file

2. **Verify GitHub Pages Settings**
   - Confirm Settings > Pages is using the gh-pages branch
   - Wait a few minutes for changes to propagate

3. **Check for Build Errors**
   - Review GitHub Actions logs for build errors
   - Fix any errors and redeploy

#### Images Not Loading

If images don't appear on the deployed site:

1. **Check Image Paths**
   - Ensure all image paths start with a forward slash (`/images/...`)
   - When using dynamic paths, include the base path

2. **Image Formats**
   - Use web-friendly formats (JPG, PNG, WebP)
   - Optimize images for web to reduce file size

#### JavaScript Errors

If interactive elements don't work:

1. **Check Browser Console**
   - Open browser developer tools to check for JavaScript errors
   - Fix any path-related errors in components

2. **Base Path Issues**
   - Make sure all internal links include the base path for GitHub Pages

## ✨ Key Features

### Modern UI Components
- Animated page transitions with Framer Motion
- Responsive design for all devices
- Interactive elements with hover and click effects

### Portfolio Showcase
- Filterable project gallery
- Detailed project descriptions
- Visual project highlights

### Interactive Experience Timeline
- Professional experience timeline
- Education history
- Skill visualization

### Contact System
- Contact form with validation
- Professional contact information display
- Social media links

### Resume Integration
- Online resume display
- PDF download option
- Skill categorization

## 🙏 Acknowledgements

- Design inspiration from modern portfolio websites
- Icons from [Heroicons](https://heroicons.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📄 License

This project is licensed under the MIT License.
