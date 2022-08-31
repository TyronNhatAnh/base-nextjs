import {signIn, signOut, useSession} from "next-auth/react";
import Head from "next/head";

export default function Login() {
  const {data: session, status} = useSession();
  return (
    <div>
      <Head>
        <title>Gogox Consumer Web</title>
        <meta name="description" content="Gogox Consumer Web" />
        <link ref="icon" href="/favicon.ico" />
      </Head>
      {status !== "authenticated" && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
      {status === "authenticated" && (
        <>
          <h4>
            You are logged as {session?.user?.name}. Email:{" "}
            {session?.user?.email}
          </h4>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
