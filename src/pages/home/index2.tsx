import {GetStaticProps} from "next";
import {useSession} from "next-auth/react";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Home = () => {
  const {data: session} = useSession();
  const {t} = useTranslation("common");
  return (
    <>
      <h1 className="dark:text-orange-300">Next.js</h1>
      <p>Test Multi-language: {t("common:title")}</p>

      {!session && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {session && (
        <>
          <div>
            <img
              src={
                session?.user?.image
                  ? session.user.image
                  : session?.user?.avatar
              }
              width="50"
            />
          </div>
          <p>email: {session?.user?.email}</p>
          <p>name: {session?.user?.name}</p>
        </>
      )}
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async ({locale = "kr"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "common"])),
  },
});
