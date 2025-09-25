import React, { useState } from 'react';
import { Button, Checkbox, Form, Input,  Alert, Space } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { activeUser } from '../src/slices/userSlice';

const Login = () => {
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

     const [loading, setLoading] = useState(false)
  const [msg, setmsg] = useState('')
  const onFinish = async (values) => {
    console.log('Success:', values);
    setLoading(true)
    try{
      let data = await axios.post('http://localhost:8000/api/V1/auth/login',{
        email: values.email,
        password: values.password
      },{
        headers:{
          Authorization: "3sw20aYo'?Nq"
        }
      }
      )
  
      console.log('Bdate',data);
      setmsg(data.data.success)

      dispatch(activeUser(data.data))
      localStorage.setItem('user',JSON.stringify(data.data)).then(()=>{
        navigate('/dashboard')
      })



  //     dispatch(activeUser(data.data))
  // localStorage.setItem("user", JSON.stringify(data.data))
        //   setLoading(false)

    }
    catch(error){
      console.log(error);
    }
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


 
// chalkuri 

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

export default Login
