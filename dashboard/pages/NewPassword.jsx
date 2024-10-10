import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewPassword = () => {
    let [loading, setLoading] = useState(false);
    let param = useParams()

    const onFinish = async (values) => {
      // console.log("Success:", values);
      console.log(values);
  
      setLoading(true);
      try {
        let data = await axios.post(
          "https://fullstack-mernian-2204.onrender.com/api/V1/auth/newpassword",
          {
            password: values.password,
            token: param.token
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
          label="New Password"
          name="password"
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
  )
}

export default NewPassword
