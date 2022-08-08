import {Layout} from "antd";
import {useTranslation} from "next-i18next";
import React from "react";

import DrawerComp from "../drawer-comp";
import SiderComponent from "./sider-component";

const {Content, Footer, Header} = Layout;

const HeaderComponent = () => {
  const {t} = useTranslation("translation");

  return (
    <>
      <Layout>
        <div className="hidden sm:block">
          <SiderComponent value={"1"} />
        </div>
        <div className="block sm:hidden">
          <DrawerComp />
        </div>

        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: "42px",
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 660,
              }}
            >
              {t("description.part1")}
              {"content"}
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default HeaderComponent;
