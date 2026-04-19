import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const EmailVerifyLink = () => {

  
let param = useParams()
console.log(param.token);


const navigate = useNavigate()
const [status, setStatus] = useState('Loading...')



useEffect(() => {
        async function verify() {
            try {
                await axios.post(
                    `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/auth/linkverification`,
                    { token: param.token }
                )
                setStatus('Email verified! Redirecting to login...')
                setTimeout(() => navigate('/login'), 2000) // 👈 give user 2 seconds to see success
            } catch (error) {
                console.log(error)
                setStatus('Verification failed. Link may have expired.')
            }
        }
        verify()
    }, [])

//  useEffect (()=>{
//  async function verify(){
//   let data = await axios.post(`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/auth/linkverification`,
//       {
//         token: param.token,
//       }
//       )
//       navigate('/login')
//       console.log(data);
//   }
//   verify()
  
// })

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{status}</h2>
        </div>
  )
}

export default EmailVerifyLink
