import Header from "@containers/Header";
import {user} from "@ducks/auth/slice";
import {useAppSelector} from "@ducks/hooks";
export default function Profile() {
  const userInfo = useAppSelector(user);
  return (
    <div>
      <Header />
      <p>This is Profile Page</p>
      {userInfo && (
        <>
          <div>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
          </div>
        </>
      )}
    </div>
  );
}
