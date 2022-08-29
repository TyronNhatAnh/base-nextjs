import {KeyOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input, Modal} from "antd";
import {useState} from "react";

import RegisterForm from "../components/form";

export default function Test() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="md:container md:w-auto py-12 bg-white">
      <div className="flex flex-col w-full h-80 bg-blue-300">
        <div className="flex justify-center md:justify-end p-2">
          <Button
            type="primary"
            shape="round"
            className="btn-secondary border-0"
            onClick={() => setVisible(true)}
          >
            기업서비스 바로가기
          </Button>
          <Button shape="round" className="ml-2">
            로그인
          </Button>
        </div>
        <div className="w-auto mx-auto mt-5 -mb-10">
          <div className="flex text-center flex-col mb-5 text-white">
            <span className="text-2xl">언제까지 보낼까요?</span>
            <p className="text-sm">이삿짐 선택해서 정확한 가격 책정!</p>
          </div>
          <Card className="border-none px-3 py-5 shadow-2xl rounded-3xl w-96 -mb-10">
            <Form
              name="basic"
              initialValues={{remember: true}}
              autoComplete="off"
            >
              <Form.Item
                className="border-b-4 border-blue-500"
                name="username"
                rules={[
                  {required: true, message: "Please input your username!"},
                ]}
              >
                <Input
                  size="large"
                  placeholder="User name"
                  prefix={<UserOutlined className="text-blue-400" />}
                  className="w-full"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {required: true, message: "Please input your password!"},
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Password"
                  prefix={<KeyOutlined className="text-blue-400" />}
                />
              </Form.Item>
              <div>
                <Button
                  className="py-3 h-auto"
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                >
                  <span className="text-xl">퀵 접수 가기</span>
                </Button>
              </div>
            </Form>
          </Card>
        </div>
        <Modal
          className="mobile-only:fullscreen"
          title="Modal Title"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <RegisterForm />
        </Modal>
      </div>
    </div>
  );
}
