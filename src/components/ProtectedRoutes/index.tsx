import {pathB2B, pathB2C} from "@constants/path";
import {isAuthenticated} from "@ducks/auth/slice";
import {useAppSelector} from "@ducks/hooks";
//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({router, children}) => {
  //Identify authenticated user
  const isAuth = useAppSelector(isAuthenticated);
  console.log(isAuth);
  const unprotectedRoutes = [
    pathB2B.LOGIN,
    pathB2B.HOME,
    pathB2C.LOGIN,
    pathB2C.HOME,
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuth && pathIsProtected) {
    router.push(pathB2C.LOGIN);
  }

  return children;
};

export default ProtectedRoute;
