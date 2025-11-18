import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const EmailVerifyLink = () => {

  
let param = useParams()
console.log(param.token);


let navigate = useNavigate()

 useEffect (()=>{
 async function verify(){
  let data = await axios.post(`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/auth/linkverification`,
      {
        token: param.token,
      }
      )
      navigate('/login')
      console.log(data);
  }
  verify()
  
})

  return (
    <div>
      Loading...
    </div>
  )
}

export default EmailVerifyLink
