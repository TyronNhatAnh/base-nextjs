module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "kr",
    locales: ["en", "kr"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
