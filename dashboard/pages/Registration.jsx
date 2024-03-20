import React, { useState } from 'react';
import { Button, Checkbox, Form, Input,  Alert, Space } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate()

     const [loading, setLoading] = useState(false)
  const [msg, setmsg] = useState('')
  const onFinish = async (values) => {
    console.log('Success:', values);
    setLoading(true)
    try{
      let data = await axios.post('http://localhost:8000/api/V1/auth/registration',{
        name: values.username,
        email: values.email,
        password: values.password
      },{
        headers:{
          Authorization: "3sw20aYo'?Nq"
        }
      }
      
      )
  
      console.log('Bdate',data);
      setmsg("Registration Successful!! Please check your email.")
      setTimeout(()=>{
          navigate('/otpverification')
        }, 1500)
        //   setLoading(false)

    }
    catch(error){
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  
  // http://localhost:8000/api/V1/auth/registration
//   {
//     "title": "Masta",
//     "name": "Mugz",
//     "description": "Mern"
// }


  return (
      <>
    {msg && 
    <Alert message={msg} type="success" showIcon closable />
    }
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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

   
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default Registration
