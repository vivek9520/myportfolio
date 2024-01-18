// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your meta tags or other head elements here */}
          <meta name="google-site-verification" content="sanq0hvF03vMkjZZXMwwklzWL9eFbve710hgt5HUkGw" />
          {/* Other meta tags or elements go here */}
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
