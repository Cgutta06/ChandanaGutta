import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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



