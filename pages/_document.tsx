import React from 'react';
import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}


          <Script id='microsoft-analytics' strategy='lazyOnload'>
            {`(function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "ld0dzr6et8");`}
          </Script>

            {/* <!-- Google tag (gtag.js) --> */}
          <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-M415BJR1CZ" />
          <Script id='gtag-init'
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M415BJR1CZ');`}} />
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
