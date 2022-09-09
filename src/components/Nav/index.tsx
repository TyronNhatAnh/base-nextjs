import {menuB2B, menuB2C} from "@constants/menu";
import {logout} from "@ducks/auth/slice";
import {useAppDispatch} from "@ducks/hooks";
import {ProfileResponse} from "@type/auth";
import {Button, MenuProps} from "antd";
import {Menu, Row} from "antd";
import Router from "next/router";
import {useRouter} from "next/router";
import React, {useState} from "react";

type NavProps = {
  user: ProfileResponse;
};

const Nav = (props: NavProps) => {
  const route = useRouter();
  const isB2BSite = route.pathname === "/b2b";
  const user = props.user;
  const menuItems = isB2BSite ? menuB2B("public") : menuB2C("public");
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState("0");
  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
  };

  const handleLogin = () => {
    Router.push(isB2BSite ? "/b2b/login" : "login");
  };
  const handleHome = () => {
    Router.push("/");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleRedirect = (type: string) => {
    Router.push("/" + type);
  };
  return (
    <>
      <Row className="flex w-full">
        <div className="flex-none">
          <img
            onClick={handleHome}
            width={150}
            src={
              "https://business-staging.gogovan.co.kr/resources/img/gogox_logo_x.svg"
            }
            alt="example"
          />
        </div>
        <Menu
          className="flex-1 bg-white text-black dark:bg-gray-900 dark:text-white"
          defaultSelectedKeys={[current]}
          mode="horizontal"
          onClick={onClick}
          items={menuItems}
        ></Menu>
        <div className="flex justify-center md:justify-end p-2">
          {isB2BSite ? (
            <Button onClick={() => handleRedirect("")}>B2C Site</Button>
          ) : (
            <Button onClick={() => handleRedirect("b2b")}>B2B Site</Button>
          )}
          {user.user_code ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </div>
      </Row>
    </>
  );
};
export default Nav;
