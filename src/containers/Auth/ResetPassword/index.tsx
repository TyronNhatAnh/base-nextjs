import {MailOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input} from "antd";
import Link from "next/link";

export default function ResetPassword() {
  const resetPasswordHandle = (values: any) => {
    console.log(values);
  };

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
            onFinish={resetPasswordHandle}
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
            <div>
              <Button
                className="py-3 h-auto"
                type="primary"
                htmlType="submit"
                size="large"
                block
              >
                <span className="text-xl">Submit</span>
              </Button>
            </div>
            <div className="py-3 text-center">
              <p>
                <Link href="/login" className="text-xl">
                  Try login again?
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
