import {Modal} from "antd";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import React, {useState} from "react";

// import Drawer from "../../../components/Drawer";
import SignIn from "../../../components/SignIn";
import style from "./Header.module.css";

const Header = () => {
  const {data: session} = useSession();
  console.log("user", session?.user);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sample/redux">
              <a>Redux</a>
            </Link>
          </li>
          {!loading &&
            (session ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/advanced/ssr-profile">
                    <a>Server rendered profile (advanced)</a>
                  </Link>
                </li> */}
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={showModal}>Login</button>
              </li>
            ))}
        </ul>
      </nav>
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
