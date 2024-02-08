import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(storageUse);
  }, [])

  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        🗑️E-waste
      </Link>

      <div className='navbar-links-container'>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link">
          Signup
        </Link>
      </div>
      <div>

        <span className='text-light fs-5'>Hello 👋,{user?.name || 'user'}</span>


        {
          user?.name ? (
            <span className='text-light fs-5 ms-3 curser-pointer' onClick={() => {
              localStorage.removeItem('user')
              window.location.href = '/login'
            }}> Logout </span>

          ) : null
        }


      </div>
    </div>
  )
}

export default Navbar