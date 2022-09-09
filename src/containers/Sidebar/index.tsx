import {menuB2B, menuB2C} from "@constants/menu";
import {getB2BProfile, getProfile} from "@ducks/auth/thunks";
import {useAppDispatch} from "@ducks/hooks";
import storage from "@helpers/localStorage";
import {Layout, Menu} from "antd";
import {useRouter} from "next/router";
import React, {useCallback, useEffect} from "react";
const {Sider} = Layout;

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const loadProfile = useCallback(async () => {
    await dispatch(router.pathname == "/b2b" ? getB2BProfile() : getProfile());
  }, [dispatch, router.pathname]);

  useEffect(() => {
    if (storage.getAccessToken()) {
      loadProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const route = useRouter();
  const isB2BSite = route.pathname === "/b2b";
  const menuItems = isB2BSite ? menuB2B("protected") : menuB2C("protected");
  return (
    <>
      <Sider className="flex-1">
        <Menu
          className="flex-1 bg-gray-900 text-black dark:bg-black dark:text-white"
          defaultSelectedKeys={["0"]}
          mode="inline"
          items={menuItems}
        ></Menu>
      </Sider>
    </>
  );
};
export default Sidebar;
