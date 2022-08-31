import {GetStaticProps} from "next";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Header from "../../containers/Header";
import {user} from "../../ducks/auth/slice";
import {useAppSelector} from "../../ducks/hooks";

const Home = () => {
  const userInfo = useAppSelector(user);
  const {t} = useTranslation("common");
  return (
    <>
      <Header />
      {!userInfo && (
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

      {userInfo && (
        <>
          <div>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
          </div>
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
