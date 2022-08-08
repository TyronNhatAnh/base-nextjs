import "../styles/globals.css";
import "antd/dist/antd.css";
import "../../i18n";

import type {AppProps} from "next/app";
import {Suspense} from "react";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Suspense fallback="loading">
      <Component {...pageProps} />
    </Suspense>
  );
}

export default MyApp;
