import type {MenuProps} from "antd";
import {Menu} from "antd";
import React, {useState} from "react";

import menu from "../../common/constants/menu";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "name",
  },
  {
    label: "Profile",
    key: "profile",
  },
  {
    label: "Menu 3- Submenu",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="/login" rel="noopener noreferrer">
        Login
      </a>
    ),
    key: "alipay",
  },
];

const MenuComp = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};
export default MenuComp;
