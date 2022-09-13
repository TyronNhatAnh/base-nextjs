import {user} from "@ducks/auth/slice";
import {useAppSelector} from "@ducks/hooks";
export default function Profile() {
  const userInfo = useAppSelector(user);
  return (
    <div>
      <p>This is Profile</p>
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
