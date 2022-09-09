import FrontPage from "@containers/B2B/FrontPage";
import Header from "@containers/Header";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Home = () => {
  return (
    <>
      <Header />
      <FrontPage />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async ({locale = "kr"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "common"])),
  },
});
