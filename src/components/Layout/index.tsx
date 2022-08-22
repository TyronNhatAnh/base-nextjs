import Head from "next/head";

import Footer from "../../core/sections/Footer";
import Header from "../../core/sections/Header";

type LayoutProps = {
  user?: any;
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Consumer Web 2.0</title>
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
