import Nav from "@components/Nav";
import {user} from "@ducks/auth/slice";
import {getProfile} from "@ducks/auth/thunks";
import {useAppDispatch, useAppSelector} from "@ducks/hooks";
import storage from "@helpers/localStorage";
import React, {useCallback, useEffect} from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(user);
  const loadProfile = useCallback(async () => {
    await dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (storage.getAccessToken()) {
      loadProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="bg-red">
      {/* <AnnouncementBar/> */}
      <Nav user={userProfile} />
    </header>
  );
};

export default Header;
