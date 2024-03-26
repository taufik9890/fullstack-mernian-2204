import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ResendMail = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [email, setEmail] = useState('')
  const showModal = () => {
    setOpen(true);
  };
  const handleOk =  () => {
    // console.log(email);
    setConfirmLoading(true);
    axios.post('http://localhost:8000/api/V1/auth/resendmail',{
        email: email
    }).then((res)=>{
        console.log(res);
        toast.success(res.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        setConfirmLoading(false)
    }).catch((error)=>{
        console.log(error);
        
        if(error.response.data.error){
          toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
            setConfirmLoading(false)
            
    })
    


    
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
    <ToastContainer />
      <Button type="primary" onClick={showModal}>
        Resend Mail
      </Button>
      <Modal
        title="Resend Email"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
      </Modal>
    </>
  );
};
export default ResendMail;