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

export function getDocumentPath(path) {
  if (!path) return '';

  // If the path is for a resume PDF, make sure we include the basePath
  // This is important for GitHub Pages deployment
  if (path.includes('ChandanaGutta_Resume.pdf')) {
    // If we're in production, always include the basePath
    if (process.env.NODE_ENV === 'production') {
      // If the path already has the basePath, don't add it again
      if (path.startsWith(basePath)) return path;
      // If the path starts with a slash, add the basePath
      if (path.startsWith('/')) return `${basePath}${path}`;
      // Otherwise, add the basePath and a slash
      return `${basePath}/${path}`;
    }
  }

  // For other paths, use the standard logic
  // If the path already starts with the base path, don't add it again
  if (path.startsWith(basePath)) return path;
  // If the path starts with a slash, add the base path
  if (path.startsWith('/')) return `${basePath}${path}`;
  // Otherwise, add the base path and a slash
  return `${basePath}/${path}`;
}

export default {
  getImagePath,
  getDocumentPath
};