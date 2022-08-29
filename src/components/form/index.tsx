import {Button, Checkbox, DatePicker, Form, Input} from "antd";
import {Rule} from "antd/lib/form";
import React from "react";

const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  type RuleFieldsType = {
    [key: string]: Rule[] | undefined;
  };

  const ruleFields: RuleFieldsType = {
    username: [
      {
        required: true,
        message: "Please input your username!",
      },
    ],
    email: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please input your E-mail!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your password!",
      },
    ],
    datetime: [
      {
        required: true,
        message: "Please input your datetime!",
      },
    ],
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
      className=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <Form.Item
            label="Username"
            name="username"
            rules={ruleFields.username}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={ruleFields.email}>
            <Input />
          </Form.Item>

          <Form.Item
            label="DateTime"
            name="datetime"
            rules={ruleFields.datetime}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={ruleFields.password}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset: 8, span: 16}}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            label="Username"
            name="username"
            rules={ruleFields.username}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={ruleFields.email}>
            <Input />
          </Form.Item>

          <Form.Item
            label="DateTime"
            name="datetime"
            rules={ruleFields.datetime}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={ruleFields.password}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset: 8, span: 16}}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>
      </div>

      <Form.Item wrapperCol={{offset: 12, span: 24}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
