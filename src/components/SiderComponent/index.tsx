import {Button, Layout} from "antd";
import {useTranslation} from "next-i18next";
import React from "react";

import DrawerComp from "../Drawer";
import SiderComponent from "./sider-component";

const {Content, Footer, Header} = Layout;

const HeaderComponent = () => {
  const {t} = useTranslation("common");

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
              <p>{t("description.part1")}</p>
              <Button
                onClick={() => {
                  console.log("test");
                }}
                type="primary"
              >
                Increment
              </Button>
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
