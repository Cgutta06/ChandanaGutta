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

  // Special case for resume PDF - should be at root level in production
  if (path.includes('ChandanaGutta_Resume.pdf')) {
    return path.startsWith('/') ? path : `/${path}`;
  }

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