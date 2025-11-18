import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
 
const AddCategory = () => {
  const userInfo = useSelector((state) => state.user.value);
  const [image, setImage] = useState({});


  
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  
  const onFinish = async (values) => {
    // console.log('Success:', values);
    let data = await axios.post(
      `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/createcategory`,
      {
        name: values.name,
        avatar: image
      },{
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      }
    );
    console.log(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    userInfo.role != "User" && (
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
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your category name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Input onChange={handleChange} type="file" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  );
};

export default AddCategory;
