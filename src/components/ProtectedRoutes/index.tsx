import {pathB2B, pathB2C} from "@constants/path";
import storage from "@helpers/localStorage";
import type {AppProps} from "next/app";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

interface ProtectedRouteProps {
  router: AppProps["router"];
  children: React.ReactElement;
}
const ProtectedRoute = ({router, children}: ProtectedRouteProps) => {
  //Identify authenticated user

  const unprotectedRoutes = [
    pathB2B.LOGIN,
    pathB2B.HOME,
    pathB2C.LOGIN,
    pathB2C.HOME,
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  const pathIsProtected =
    unprotectedRoutes.indexOf(router.pathname as any) === -1;
  if (isBrowser() && !storage.getAccessToken() && pathIsProtected) {
    router.push(pathB2C.LOGIN);
  }

  return children;
};

export default ProtectedRoute;
