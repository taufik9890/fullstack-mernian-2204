import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import axios from "axios";

const AddSubCategory = () => {
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  const onFinish = async (values) => {
    // console.log('Success:', values);
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/createsubcategory",
      {
        name: values.name,
        categoryId: categoryId,
      }
    );
    console.log(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  const [categoryList, setCategoryList] = useState([])
  const [categoryId, setCategoryId] = useState("")
  useEffect(() => {
    async function allcategory() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/viewcategory");
        let categoryData = []

        data.data.map((item)=>{
          categoryData.push({
            value: item._id,
            label: item.name
          })
        })

        setCategoryList(categoryData)
      console.log("hello", data.data);
    }

    allcategory();
  }, []);


  const handleChange =(e)=>{
    setCategoryId(e);
  }


  return (
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
        label="Subcategory Name"
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
        <Select
          defaultValue={categoryList[0]}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={categoryList}
        />
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
  );
};

export default AddSubCategory;
