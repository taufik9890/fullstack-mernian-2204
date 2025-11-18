import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Table, Tag, Checkbox, Form, Input } from "antd";
import axios from "axios";

const ViewCategory = () => {
  const [initialValue, setInitialValue] = useState([]);
  let [refetch, setRefetch] = useState(false)
 
  const onFinish = async (values) => {
    // console.log(initialValue[0].value);
    console.log(values);
    
    let cData =  await axios.post(`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/editcat`, {
      oldName: initialValue[0].value,
      name: values.name
    })

    setRefetch(!refetch)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (record) => {
    setIsModalOpen(true);
    console.log();
    setInitialValue([{
      name: ['name'],
      value: record.name,
    }])
    
    
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    async function allcategory() {
      let data = await axios.get(
        `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/viewcategory`
      );
      let categoryData = [];

      data.data.map((item) => {
        categoryData.push({
          key: item._id,
          name: item.name,
          status: item.status,
          image: item.image,
        });
      });
 
      setCategoryList(categoryData);
      console.log("hello", data.data);
    }

    allcategory();
  }, [refetch]);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      status: "",
    },
    {
      key: "2",
      name: "John",
      status: "",
    },
  ]; 

  const handleStatus = async (record) => {
    console.log(record);

    let data = await axios.post(
      `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/approvecategory`,
      {
        id: record.key,
        status: record.status,
      }
    );
    console.log(data);
  };

  const handleDelete = async (id) => {
    let data = await axios.delete(
      `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/deletecategory/${id}`
    );
    console.log(data);
  };
  // const handleChange = ()=>{
  //   console.log(initialValue);
    
  // }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <> 
          <button onClick={() => handleStatus(record)}>
            {record.status === "waiting" ? "Approve" : "Reject"}
          </button>
          <button onClick={() => handleDelete(record.key)}>Delete</button>
          <Button type="primary" onClick={()=>showModal(record)}>
            edit
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              name="basic"
              fields={initialValue}
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
                label="name"
                name="name"
                initialValue="Taufik"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button  type="primary" htmlType="submit">
                  Change
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img width={50} src={`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL_IMG}${record.image}`} />
        //   <a>Invite {record.image}</a>
      ),
    },
  ];
  return <Table dataSource={categoryList} columns={columns}/>;
};

export default ViewCategory;
