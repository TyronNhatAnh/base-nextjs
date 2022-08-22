import {getSession} from "next-auth/react";

const Home = ({user}) => {
  return (
    <>
      <h1 className="dark:text-white">Next.js and Auth0 111Example</h1>

      {!user && (
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

      {user && (
        <>
          <p>email: {user.email}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </>
  );
};

Home.getInitialProps = async ctx => {
  const session = await getSession(ctx);
  console.log(session);
  return {
    user: session?.user,
  };
};
export default Home;
