import {user} from "@ducks/auth/slice";
import {useAppSelector} from "@ducks/hooks";
export default function FrontPage() {
  const userInfo = useAppSelector(user);
  return (
    <div className="mx-auto mx-auto mt-5 bg-blue-300">
      <h1>This is B2B Page</h1>
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
