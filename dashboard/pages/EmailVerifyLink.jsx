import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const EmailVerifyLink = () => {

  
let param = useParams()
console.log(param.token);


let navigate = useNavigate()

 useEffect (()=>{
 async function verify(){
  let data = await axios.post('https://fullstack-mernian-2204.onrender.com/api/V1/auth/linkverification',
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
