import {Modal} from "antd";
import {signOut} from "next-auth/react";
import {getSession} from "next-auth/react";
import Link from "next/link";
import React, {useState} from "react";

import SignInModal from "../../../pages/auth/signin";

type HeaderProps = {
  user?: any;
};

const Header = ({user}: HeaderProps) => {
  console.log(user);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
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
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Client-rendered profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/advanced/ssr-profile">
                    <a>Server rendered profile (advanced)</a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
                <li>
                  <button onClick={showModal}>Login</button>
                </li>
              </>
            ))}
        </ul>
      </nav>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <SignInModal />
        </div>
      </Modal>
    </header>
  );
};

Header.getInitialProps = async ctx => {
  const session = await getSession(ctx);
  console.log("dsad");
  return {
    user: session?.user,
  };
};

export default Header;
