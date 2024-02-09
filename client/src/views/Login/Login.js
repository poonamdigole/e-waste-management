import React, {useState,useEffect} from 'react'
import "./Login.css"
import "./../Signup/Signup.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
function Login() {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

const login = async()=>{
  if (!email){
    alert("email is required");
    return;
  }
  if (!password){
    alert("password is required");
    return
  }
  
  const response = await axios.post("/login",{
    email:email,
    password:password
  })
  if (response?.data?.success){
   alert(response?.data?.message);
   localStorage.setItem("user", JSON.stringify(response?.data?.data))
   
    window.location.href="/";
}else{
    alert(response?.data?.message);
}



}

  return (
    <div>
      <Navbar/>
      <form className='login-container'>

      <h1 className='text-center'>Login </h1>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text'
        placeholder='Enter your email'
        id="email"
        className='form-control'
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value);
        }}/>

     </div>
     <div>
        <label htmlFor='password'>Password</label>
        <input type='text'
        placeholder='Enter your password'
        id="password"
        className='form-control'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}/>

     </div>
      <button type='button' className='btn signup-btn' onClick={login}>login</button>
      <p className='text-right'>
          <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  )
    
}

export default Login
