import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  const [image, setImage] = useState({});

  const [description, setDescription] = useState('')

  const [showSlug, setShowSlug] = useState("")

  const userInfo = useSelector((state) => state.user.value);


  
  const [categoryList, setCategoryList] = useState([])

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

 
  const onFinish = async (values) => {
    // console.log('Success:', values.name.split(" ").join("-").toLowerCase());
    console.log('Success:', {
      name: values.name,
      description: description,
      avatar: image,
      regularprice: values.regularprice,
      discount: values.discount,
      slug: values.name.split(" ").join("-").toLowerCase()
    },);
    // let data = await axios.post(
    //   "http://localhost:8000/api/v1/product/createproduct",
    //   {
    //     name: values.name,
    //     description: description,
    //     avatar: image,
    //     regularprice: values.regularprice,
    //     discount: values.discount,
    //     slug: values.name.split(" ").join("-").toLowerCase()
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    console.log(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSLug = (e) =>{
    setShowSlug(e.target.value.split(" ").join("-").toLowerCase())
  }



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
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
          ]}
        >
          <Input  onChange={handleSLug}/>
        </Form.Item>


        <Form.Item
          label="Slug"
          name="slug"
          rules={[
            {
              message: "slug",
            },
          ]}
        >
          <Input readOnly placeholder={showSlug}  />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: "Please input your product price!",
            },
          ]}
        >
          <Input  />
        </Form.Item>


        <Form.Item
          label="Product Discount in Taka"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please input your product discount!",
            },
          ]}
        >
          <Input  />
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


        
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            setDescription(editor.getData());
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />

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

export default AddProduct;
