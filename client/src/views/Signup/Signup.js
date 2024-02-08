import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  let [roll, setRoll] = useState('');
 
  
  const signup= async ()=>{
    if (!name){
        alert('Name is required');
        return;
    }
    if (!email){
        alert('Email is required');
        return;
    }
    if (!password){
        alert('Password is required');
        return;
    }
    if (!mobile){
        alert('Mobile is required');
        return;
    }
    if (!address){
        alert('Address is required');
        return;
    }

    const response =await axios.post("/signup",{
            name:name,
            email:email,
            password:password,
            mobile:mobile,
            address:address,
            roll:roll
        })
        if (response?.data?.success){
            alert(response?.data?.message);
            window.location.href="/login";
        }else{
            alert(response?.data?.message);
        }
    };
  return (


    <>
    <div>
       <Navbar />
      <form className="signup-form">
        <h1 className='text-center'>Signup</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            placeholder="Enter your mobile"
            id="mobile"
            className="form-control"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text"
            placeholder="Enter your address"
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }} />
        </div>

        <div>
      <label htmlFor="roll">Roll</label>
      <select
        className='form-control'
        value={roll}
        onChange={(e) => {
          setRoll(e.target.value); // Corrected assignment
        }}
      >
        <option value="Manufacturer">Manufacturer</option>
        <option value="Retailers">Retailers</option>
        <option value="Consumers">Consumers</option>
        <option value="Contractors">Contractors</option>
      </select>
    </div>

        <button type="button" className="btn signup-btn" onClick={signup}>
          Signup
        </button>

        <p className="text-right">
          <Link to="/login">Already have an account?</Link>
        </p>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Signup;
