import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

const ForgotPassword = () => {
  let [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);

    setLoading(true);
    try {
      let data = await axios.post(
        `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/auth/forgotpassword`,
        {
          email: values.email,
        },
        {
          headers: {
            Authorization: "3sw20aYo'?Nq",
          },
        }
      );
      console.log( 'fdata', data);
      setLoading(false);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
