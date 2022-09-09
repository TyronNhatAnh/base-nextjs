import Nav from "@components/Nav";
import AnnouncementBar from "@containers/B2C/FrontPage/AnnouncementBar";
import {user} from "@ducks/auth/slice";
import {getB2BProfile, getProfile} from "@ducks/auth/thunks";
import {useAppDispatch, useAppSelector} from "@ducks/hooks";
import storage from "@helpers/localStorage";
import {useRouter} from "next/router";
import React, {useCallback, useEffect} from "react";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(user);
  const loadProfile = useCallback(async () => {
    await dispatch(router.pathname == "/b2b" ? getB2BProfile() : getProfile());
  }, [dispatch, router.pathname]);

  useEffect(() => {
    if (storage.getAccessToken()) {
      loadProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="bg-red">
      {router.pathname !== "/b2b" && <AnnouncementBar />}
      <Nav user={userProfile} />
    </header>
  );
};

export default Header;
