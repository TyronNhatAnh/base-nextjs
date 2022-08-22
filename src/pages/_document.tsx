import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

import i18nextConfig from "../../next-i18next.config";

class SpecialDocument extends Document {
  render() {
    return (
      <Html
        lang={
          this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale
        }
      >
        <Head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
            rel="stylesheet"
          />
          {/* <link href='/app.css' rel='stylesheet' /> */}

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600"
            rel="stylesheet"
          />
          <link
            data-react-helmet="true"
            rel="icon"
            href="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media"
          />
        </Head>
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white duration-200 transition">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;