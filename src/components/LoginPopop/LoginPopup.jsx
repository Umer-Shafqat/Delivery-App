import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setshowLogin }) => {

    const [currstate , setcurrstate] = useState("Login");

  return (
    <div className='login-popup'>
    <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="Sign-Up" />
        </div>
        <div className="login-popup-inputs">
          { currstate === "Login" ?<></> : <input type="text" placeholder='Enter your name' required/> }
          <input type="email" placeholder='Enter your email' required/>
          <input type="password" placeholder='Enter your password' required/>
        </div>
        <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currstate === "Login" ? <p>Create a New Account ? <span onClick={() => setcurrstate("Sign Up")}>Click Here</span></p>
    : <p>Already have an account ? <span onClick={() => setcurrstate("Login")}>Login Here</span></p>}
    </form>
    </div>
  )
}

export default LoginPopup
