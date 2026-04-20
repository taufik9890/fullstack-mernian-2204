import React, { useEffect, useState } from 'react'
import {useNavigate, useParams, useSearchParams} from 'react-router-dom'
import axios from 'axios'

const EmailVerifyLink = () => {

  
const param = useParams()
    const navigate = useNavigate()
    const [status, setStatus] = useState('Verifying your email...')
    const [isExpired, setIsExpired] = useState(false)
    const [searchParams] = useSearchParams()

     useEffect(() => {
        async function verify() {
            try {
                const token = searchParams.get('token')  
                console.log('token:', token)

                if (!token) {
                    setStatus('❌ Invalid verification link.')
                    return
                }

                await axios.post(
                    `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/auth/linkverification`,
                    { token: token }
                )
                setStatus('✅ Email verified! Redirecting to login...')
                setTimeout(() => navigate('/login'), 2000)
            } catch (error) {
                console.log(error)
                setStatus('❌ Verification failed. Please try again.')
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
            {isExpired && (
                <button onClick={() => navigate('/login')}>
                    Go to Login & Request New Link
                </button>
            )}
        </div>
  )
}

export default EmailVerifyLink
