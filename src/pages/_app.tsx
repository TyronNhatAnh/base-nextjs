import "antd/dist/antd.less";
import "../styles/globals.less";

import {SessionProvider} from "next-auth/react";
import {appWithTranslation} from "next-i18next";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";

import reportWebVitals from "../../reportWebVitals";
import Layout from "../components/Layout";
import {store} from "../ducks/store";

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default appWithTranslation(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
