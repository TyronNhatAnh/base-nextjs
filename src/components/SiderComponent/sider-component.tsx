import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import React from "react";

const {Sider} = Layout;

type SiderComponent = {
  value: string;
};
const SiderComponent: React.FC<SiderComponent> = ({value}) => {
  return (
    <Sider
      breakpoint={undefined}
      collapsedWidth={value}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="h-full w-full p-0"
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          background: "rgba(255, 255, 255, 0.2)",
        }}
        className="logo"
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          UserOutlined,
          VideoCameraOutlined,
          UploadOutlined,
          UserOutlined,
        ].map((icon, index) => ({
          key: String(index + 1),
          icon: React.createElement(icon),
          label: `nav ${index + 1}`,
          children: [
            {key: String(`${index}1 + 1`), label: `Sub Nav ${index + 1}`},
          ],
        }))}
      />
    </Sider>
  );
};

export default SiderComponent;
