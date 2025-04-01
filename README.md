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
- [Recent Updates](#recent-updates)
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

- **Next.js 14** - React framework for production with static export
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Hero Icons** - SVG icon set
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD for automated deployment

## 📂 Project Structure

```
chandanagutta/
├── .github/            # GitHub configuration
│   └── workflows/      # GitHub Actions workflows
├── public/             # Static assets
│   ├── images/         # Image assets
│   ├── .nojekyll       # Disables Jekyll processing
│   ├── fix-paths.js    # Client-side path fixing
│   └── error-handler.js # Client-side error handling
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
│   ├── utils/          # Utility functions
│   │   └── path-utils.js # Path handling utilities
│   └── styles/         # CSS styles
│       └── globals.css
├── .nojekyll           # Disables Jekyll processing
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── copy-pdf.js         # PDF copying script
├── postcss.config.js   # PostCSS configuration
└── tailwind.config.js  # Tailwind configuration
```

## ⚙️ Setup and Installation

### Prerequisites

- Node.js (v16 or later)
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

The following images are used in the project and should be available in the `public/images/` directory:

### Profile/Personal Images
- `profile.jpg` - Professional headshot
- `og-image.jpg` - Social media preview image

### Background Images
- `hero-bg.jpg` - Homepage hero background
- `portfolio-bg.jpg` - Portfolio page header background
- `experience-bg.jpg` - Experience page header background
- `contact-bg.jpg` - Contact page header background

### Project Images
- `stonebridge.jpg` - Stonebridge Condominium project
- `cashelmara.jpg` - Cashelmara Condominium project
- `parkbuilding.jpg` - Park Building project

### Logo Images
- `ecs-logo.png` - ECS Midwest LLC logo
- `bgsu-logo.png` - Bowling Green State University logo
- `reva-logo.png` - Reva University logo
- `an-logo.png` - AN Architecture logo

### Resume File
- `ChandanaGutta_Resume.pdf` - Resume in PDF format (place in the public directory)

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

### Manual Build for Testing

If you want to test the build locally before pushing:

```bash
# Build the project
npm run build

# The static export will be in the 'out' directory
# You can serve it locally with a static server
npx serve out
```

## ⚙️ GitHub Pages Configuration

After deployment, ensure GitHub Pages is configured correctly:

1. Go to your GitHub repository
2. Click on "Settings"
3. Navigate to "Pages" in the sidebar
4. Under "Build and deployment":
   - Source: "GitHub Actions"
5. The site will be available at `https://cgutta06.github.io/ChandanaGutta/`

## 🔍 Troubleshooting

### Common Issues and Solutions

#### Images or Assets Not Loading

If images or assets (like the resume PDF) don't load correctly:

1. **Check Path Configuration**
   - Ensure paths in components use the `getImagePath` utility for static assets
   - For links that Next.js handles (like navigation), use regular paths without the utility

2. **Resume PDF Issues**
   - Make sure the PDF path includes the repository name in production:
   - Use `/ChandanaGutta/ChandanaGutta_Resume.pdf` for direct links
   - Ensure the PDF is copied to both the root and the repository subdirectory

3. **404 Console Errors**
   - Check that image paths reference files that actually exist in the public directory
   - The fix-paths.js script should intercept and handle most 404 errors for JSON data files

#### Navigation Issues

If clicking navigation links causes 404 errors or double path issues:

1. **Check Path Configuration**
   - Navigation links should use direct paths like `/portfolio` (not `/ChandanaGutta/portfolio`)
   - Next.js will automatically add the base path in production

2. **Browser Console Errors**
   - Check the browser console for any path-related errors
   - The fix-paths.js script should handle and correct most path issues automatically

## 🆕 Recent Updates

### April 2025 Updates
- Added path utility functions to handle GitHub Pages deployment paths
- Fixed issues with PDF accessibility through proper path handling
- Implemented client-side scripts to intercept and fix 404 errors
- Updated build process to ensure PDF availability in all required locations
- Improved overall GitHub Pages compatibility
- Fixed missing image references in portfolio projects

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