import "../styles/globals.css";
import "antd/dist/antd.css";

import {appWithTranslation} from "next-i18next";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";

import reportWebVitals from "../../reportWebVitals";
import {store} from "../ducks/store";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
