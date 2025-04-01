import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Determine if we're in a production environment
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/ChandanaGutta' : '';
    
    return (
      <Html lang="en">
        <Head>
          {isProduction && <base href="/ChandanaGutta/" />}
          
          {/* GitHub Pages specific script */}
          {isProduction && (
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