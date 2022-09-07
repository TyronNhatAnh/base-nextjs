import {Col, Row} from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";

const WrapperAuth: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const {children} = props;

  return (
    <Row justify="center" align="middle">
      <Col xs={22} sm={18} md={16} lg={14} xl={8}>
        <Layout>
          <div className="md:w-auto bg-white">
            <div className="flex flex-col w-full h-80 bg-primary-300 dark:bg-gray-400">
              {children}
            </div>
          </div>
        </Layout>
      </Col>
    </Row>
  );
};

export default WrapperAuth;
