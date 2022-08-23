import {useTranslation} from "next-i18next";
import Head from "next/head";

import Footer from "../../core/sections/Footer";
import Header from "../../core/sections/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  const {t} = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      <Header />
      <main className="container mx-auto">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
