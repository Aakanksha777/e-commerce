import React from 'react'
import '../Signup/Signup.css'

const Signup = () => {
  return (
    <>
    <h2>SIGNUP </h2>
    <div className='signup-form'>
        <label>Email 
            <input type='email' placeholder='Email'/>
        </label>

        <label>Password  
            <input type='password' placeholder='password'/>
        </label>

      <h3>I accept All Terms & Conditions</h3>
       
        <button>Create New Account</button>
        <button>Already Have An Account</button>
    </div>
    </>
  )
}

export default Signup
