import React from 'react'
import '../Login/Login.css'

const Login = () => {
  return (
    <>
    <h2>LOGIN </h2>
    <div className='login-form'>
        <label>Email 
            <input type='email' placeholder='Email'/>
        </label>

        <label>Password  
            <input type='password' placeholder='password'/>
        </label>

        <div>
        <input type="checkbox" /> <label>Remember me</label>
        <a href='/'>Forgot Password ?</a>
        </div>
       
        <button>Login</button>
        <button>Signup</button>
    </div>
    </>
  )
}

export default Login
