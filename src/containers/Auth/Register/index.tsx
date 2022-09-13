import {KeyOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {isAuthenticated, user} from "@ducks/auth/slice";
import {login} from "@ducks/auth/thunks";
import {useAppDispatch, useAppSelector} from "@ducks/hooks";
import storage from "@helpers/localStorage";
import {Button, Card, Form, Input} from "antd";
import Link from "next/link";
import Router from "next/router";
import {useEffect} from "react";

export default function Register() {
  const isAuth = useAppSelector(isAuthenticated);
  const userInfo = useAppSelector(user);
  const token = userInfo?.token;
  const dispatch = useAppDispatch();
  const loginHandle = (values: any) => {
    dispatch(login(values));
  };
  useEffect(() => {
    if (isAuth && token) {
      storage.setAccessToken(token);
      Router.push("/");
    }
  }, [isAuth, token, userInfo]);

  return (
    <>
      <div className="w-auto mx-auto mt-5">
        <div className="text-center mb-5">
          <Link href="/">
            <img
              width={200}
              src={
                "https://business-staging.gogovan.co.kr/resources/img/gogox_logo_x.svg"
              }
              alt="example"
            />
          </Link>
        </div>
        <Card className="mx-auto border-none px-3 py-5 shadow-2xl rounded-3xl w-96 -mb-10">
          <Form
            name="basic"
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={loginHandle}
          >
            <Form.Item
              className="border-b-4 border-blue-500"
              name="email"
              rules={[{required: true, message: "Please input your Email!"}]}
            >
              <Input
                size="large"
                placeholder="Email"
                prefix={<MailOutlined className="text-blue-400" />}
                className="w-full"
              />
            </Form.Item>
            <Form.Item
              className="border-b-4 border-blue-500"
              name="phone_number"
              rules={[
                {required: true, message: "Please input your Phone Number!"},
              ]}
            >
              <Input
                size="large"
                placeholder="Phone Number"
                prefix={<UserOutlined className="text-blue-400" />}
                className="w-full"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={<KeyOutlined className="text-blue-400" />}
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                {required: true, message: "Password repeat doesn't match!"},
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Repeat Password"
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
                <span className="text-xl">Register</span>
              </Button>
            </div>
            <div className="py-3 text-center">
              <p>
                <Link href="/login" className="text-xl">
                  Already have an account?
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
