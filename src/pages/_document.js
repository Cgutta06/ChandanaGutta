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
                      
                      // If at root or incorrect path, redirect
                      if (path === '/' || (path === '/' + repoName && !path.endsWith('/'))) {
                        window.location.replace('/' + repoName + '/');
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