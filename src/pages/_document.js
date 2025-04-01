import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Get the base path from environment variable
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    
    return (
      <Html lang="en">
        <Head>
          {basePath && <base href={`${basePath}/`} />}
          
          {/* GitHub Pages specific script */}
          {basePath && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    const isGitHubPages = window.location.hostname.includes('github.io');
                    if (isGitHubPages) {
                      // Check if URL path needs correction
                      const path = window.location.pathname;
                      const repoName = 'ChandanaGutta';
                      
                      // Correct path handling for GitHub Pages
                      // If at root, redirect to repo base path
                      if (path === '/') {
                        window.location.replace('/' + repoName + '/');
                        return;
                      }
                      
                      // If at repo root without trailing slash, add it
                      if (path === '/' + repoName) {
                        window.location.replace('/' + repoName + '/');
                        return;
                      }
                      
                      // Handle direct navigation to inner pages without base path
                      const innerRoutes = ['/portfolio', '/experience', '/contact', '/resume'];
                      for (const route of innerRoutes) {
                        if (path === route || path === route + '/') {
                          window.location.replace('/' + repoName + route + '/');
                          return;
                        }
                      }
                    }
                  })();
                `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;