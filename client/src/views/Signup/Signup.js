import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [roll, setRoll] = useState('');
 
  
  const handleSubmit = () => {
    // Create an object to store the user information
    const user = {
      name,
      email,
      password,
      mobile,
      address,
      roll,
    };

    // Convert the user object to a JSON string and store it in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
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
          <label htmlFor="roll">Address</label>
          <input
            type="text"
            placeholder="Enter your roll"
            id="roll"
            className="form-control"
            value={roll}
            onChange={(e) => {
              setRoll(e.target.value);
            }}
          />
        </div>

        <button type="button" className="btn signup-btn" onClick={handleSubmit}>
          Signup
        </button>

        <p className="text-right">
          <Link to="/login">Already have an account?</Link>
        </p>
      </form>
      <Footer />
    </div>
  );
}

export default Signup;
