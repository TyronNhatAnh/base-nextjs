import {KeyOutlined, MailOutlined} from "@ant-design/icons";
import {isAuthenticated} from "@ducks/auth/slice";
import {loginB2BAsync} from "@ducks/auth/thunks";
import {useAppDispatch, useAppSelector} from "@ducks/hooks";
import {Button, Card, Divider, Form, Input} from "antd";
import Link from "next/link";
import Router from "next/router";
import {useEffect} from "react";

export default function LoginB2B() {
  const isAuth = useAppSelector(isAuthenticated);
  const dispatch = useAppDispatch();
  const loginHandle = (values: any) => {
    dispatch(loginB2BAsync(values));
  };
  useEffect(() => {
    if (isAuth) {
      Router.push("/b2b");
    }
  }, [isAuth]);

  return (
    <>
      <div className="w-auto mx-auto mt-5">
        <div className="text-center mb-5">
          <Link href={"/"}>
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
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
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
                <span className="text-xl">Login</span>
              </Button>
            </div>
            <Divider />
            <div className="text-center">
              <p>
                <Link
                  href={"/forgotpasword"}
                  className="btn py-3 h-auto bg-secondary"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <Divider dashed />
            <div>
              <p>
                If you don't have any account,{" "}
                <Link
                  href={"/register"}
                  className="btn py-3 h-auto bg-secondary"
                >
                  please register
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
