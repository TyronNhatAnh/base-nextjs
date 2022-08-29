/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");
const {i18n} = require("./next-i18next.config");

const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#0088BF",
        "border-radius-base": "4px",
        "form-vertical-label-padding": "0 0 2px",
        "form-item-margin-bottom": "10px",
      },
    },
  },
});

module.exports = nextConfig;
