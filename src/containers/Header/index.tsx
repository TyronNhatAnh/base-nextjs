import type {MenuProps} from "antd";
import {Modal} from "antd";
import {Menu} from "antd";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import React, {useState} from "react";

import MenuComp from "../../components/MenuComp";
// import Drawer from "../../../components/Drawer";
import SignIn from "../../components/SignIn";
// import style from "./Header.module.css";

const Header = () => {
  const {data: session} = useSession();

  console.log("user", session?.user);
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <header className="bg-red">
      <MenuComp />
      {/* <Drawer /> */}
      {!session && (
        <Modal
          visible={visible}
          title="Social Login Popup"
          onCancel={handleCancel}
          footer={null}
        >
          <SignIn />
        </Modal>
      )}
    </header>
  );
};

export default Header;
