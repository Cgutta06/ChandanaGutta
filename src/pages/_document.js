import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Base path for GitHub Pages
    const isProduction = process.env.NODE_ENV === 'production';
    
    return (
      <Html lang="en">
        <Head>
          {isProduction && <base href="/ChandanaGutta/" />}
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