import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  const [image, setImage] = useState([]);

  const [description, setDescription] = useState('')

  const [showSlug, setShowSlug] = useState("")

  const userInfo = useSelector((state) => state.user.value);
  const [protype, setProtype] = useState([
    {
      value: "normal",
      label: "normal"
    },
    {
      value: "top",
      label: "top"
    },
    {
      value: "new",
      label: "new"
    },
    {
      value: "feature",
      label: "feature"
    },
    {
      value: "flash",
      label: "flash"
    },
  ])



  const [categoryList, setCategoryList] = useState([])
  const [categoryId, setCategoryId] = useState("")

  const [subCategoryList, setSubCategoryList] = useState([])
  const [type, setType] = useState("")


  useEffect(() => {
    async function allcategory() {
      let data = await axios.get(
        `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/viewcategory`);
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
    // console.log('Success:', {
    //   name: values.name,
    //   description: description,
    //   avatar: image,
    //   regularprice: values.regularprice,
    //   discountprice: values.discountprice,
    //   slug: values.name.split(" ").join("-").toLowerCase(),
    //   categoryId: categoryId,

    // },);

    let formData = new FormData()
    formData.append("name", values.name)
    formData.append("description", description)
    formData.append("regularprice", values.regularprice)
    formData.append("discountprice", values.discountprice)
    formData.append("slug", values.name.split(" ").join("-").toLowerCase())
    formData.append("categoryId", categoryId)
    formData.append("proType", type)
    image.forEach(item=>{
      formData.append("photos", item)
    })
    let data = await axios.post(
      `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/createproduct`,
      // {
      //   name: values.name,
      //   description: description,
      //   avatar: image,
      //   regularprice: values.regularprice,
      //   discountprice: values.discountprice,
      //   slug: values.name.split(" ").join("-").toLowerCase(),
      //   categoryId: categoryId,
      // }
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      }
    );
    console.log(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    let photoarr = Array.from(e.target.files)
    setImage(photoarr)

    
    // setImage(e.target.files[0]);
  };
  
   const handleChangeCatId = async (e)=>{
    

    let data = await axios.get(
        `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/singlesubcategory/${e}`);
        let categoryData = []

        data.data.map((item)=>{
          categoryData.push({
            value: item._id,
            label: item.name
          })
        })

        setSubCategoryList(categoryData)
        setCategoryId(e);
  }

  const handleSLug = (e) =>{
    setShowSlug(e.target.value.split(" ").join("-").toLowerCase())
  }
  const handleChangeType = (e) =>{
    setType(e);
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
          <Input  type="number"/>
        </Form.Item>


        <Form.Item
          label="Product Discount in Taka"
          name="discountprice"
          rules={[
            {
              required: true,
              message: "Please input your product discount!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
 
        <Form.Item>
        <Select
          defaultValue={"Select Product Type"}
          style={{
            width: 180,
          }}
          onChange={handleChangeType}
          options={protype}
        />
      </Form.Item>
        
        <Form.Item>
        <Select
          defaultValue={"Select Category"}
          style={{
            width: 180,
          }}
          onChange={handleChangeCatId}
          options={categoryList}
        />
      </Form.Item>
        {
          subCategoryList.length > 0 && 
          <Form.Item>
        <Select
          defaultValue={"Select Subcategory"}
          style={{
            width: 180,
          }}
          onChange={handleChangeCatId}
          options={subCategoryList}
        />
      </Form.Item>
        }
        


        
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
          <Input onChange={handleChange} type="file" multiple />
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
