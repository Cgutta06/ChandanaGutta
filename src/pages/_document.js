import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z2NG2HSTJE"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z2NG2HSTJE');
              `,
            }}
          />
          
          {/* Only include base tag and scripts in production */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <base href="/ChandanaGutta/" />
              <script src="/ChandanaGutta/error-handler.js" type="text/javascript"></script>
              <script src="/ChandanaGutta/fix-paths.js" type="text/javascript"></script>
            </>
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




