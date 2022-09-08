import {user} from "@ducks/auth/slice";
import {useAppSelector} from "@ducks/hooks";
export default function FrontPage() {
  const userInfo = useAppSelector(user);
  return (
    <div>
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
