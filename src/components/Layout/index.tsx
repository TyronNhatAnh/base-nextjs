import Footer from "@containers/Footer";
import {useTranslation} from "next-i18next";
import Head from "next/head";

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
      <main className="container fullscreen mx-auto">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
