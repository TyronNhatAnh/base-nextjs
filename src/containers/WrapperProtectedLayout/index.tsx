import {Button, Layout} from "antd";
import React from "react";
const {Header, Content} = Layout;
import Sidebar from "@containers/Sidebar";
const WrapperProtectedLayout: React.FunctionComponent<any> = (
  props: any,
): JSX.Element => {
  const {children} = props;

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sidebar />
      <Layout>
        <Header className="bg-white">
          <Button></Button>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default WrapperProtectedLayout;
