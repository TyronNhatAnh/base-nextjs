import {MenuFoldOutlined} from "@ant-design/icons";
import {Drawer} from "antd";
import React, {useState} from "react";

import SiderComponent from "../header/sider-component";

const DrawerComp = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <MenuFoldOutlined
        onClick={showDrawer}
        style={{fontSize: "42px", color: "#001529", background: "#fff"}}
      />
      <Drawer
        // title="Basic Drawer"
        placement="left"
        onClose={onClose}
        visible={visible}
        width={"200px"}
        bodyStyle={{padding: 0}}
        headerStyle={{display: "none"}}
      >
        <SiderComponent value="1" />
      </Drawer>
    </>
  );
};

export default DrawerComp;
