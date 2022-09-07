import {menuB2B, menuB2C} from "@constants/menu";
import {logout} from "@ducks/auth/slice";
import {useAppDispatch} from "@ducks/hooks";
import {ProfileResponse} from "@type/auth";
import type {MenuProps} from "antd";
import {Menu} from "antd";
import Link from "next/link";
import React, {useState} from "react";

type NavProps = {
  user: ProfileResponse;
};

const Nav = (props: NavProps) => {
  const user = props.user;
  const menuItems = user.type_cd === 2 ? menuB2B("public") : menuB2C("public");
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState("b2c_home");
  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
    if (e.key === "b2c_logout") {
      dispatch(logout());
    }
  };

  return (
    <>
      <Menu defaultSelectedKeys={[current]} mode="horizontal" onClick={onClick}>
        {menuItems.map((item, i) => (
          <>
            <Menu.Item key={item.key}>
              <Link href={item.path ? item.path : "/"}>
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          </>
        ))}
      </Menu>
    </>
  );
};
export default Nav;
