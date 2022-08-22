import "../styles/globals.css";
import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";

import {SessionProvider} from "next-auth/react";
import {appWithTranslation} from "next-i18next";
import type {AppProps} from "next/app";

import reportWebVitals from "../../reportWebVitals";
import Layout from "../components/Layout";

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default appWithTranslation(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
