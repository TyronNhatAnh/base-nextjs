import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";

import HeaderComp from "../../components/header";

const Home: React.FC = () => {
  return <HeaderComp />;
};

export default Home;

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "common"])),
  },
});
