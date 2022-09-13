const withLess = require("next-with-less");
const {i18n} = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: false,
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
