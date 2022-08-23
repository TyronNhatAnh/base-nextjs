import {getProviders, signIn} from "next-auth/react";
import {useEffect, useState} from "react";

function SignInModal() {
  const [providers, setProviders] = useState([]);

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
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
}

export default SignInModal;
