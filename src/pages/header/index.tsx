import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";

import HeaderComp from "../../components/SiderComponent";

const Home: React.FC = () => {
  return <HeaderComp />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({locale = "kr"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "common"])),
  },
});
