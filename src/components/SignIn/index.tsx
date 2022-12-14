import {Button} from "antd";
import {getProviders, signIn} from "next-auth/react";
import {useEffect, useState} from "react";

type Provider = Awaited<ReturnType<typeof getProviders>>;

function SignIn() {
  const [providers, setProviders] = useState<Provider>();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <>
      {providers &&
        Object.values(providers).map(provider => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
    </>
  );
}

export default SignIn;
