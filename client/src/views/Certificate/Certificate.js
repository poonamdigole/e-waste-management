import React, { useState, useEffect } from "react";
import "./Certificate.css";
import logo from "./logo.png";
import r from "../Certificate/R.jpeg";
// import Navbar from '../../components/Navbar/Navbar';

function Certificate() {

  const [user, setUser] = useState('')

  useEffect(() => {
    const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(storageUse);
  }, [])

  const download = ()=>{
    alert("download...")
    return
  }
  
  return (
    <>
      {/* <Navbar/> */}
      <div className="certificate-container">
        <div className="certificate-card">
          <p><img src={logo} alt="logo" height={50} /></p>

          <h1>CERTIFICATE OF E-WASTE MANAGEMENT</h1><br/>

          <p>This certificate proudly awarded to</p>

          <h2 className="user-name">{user?.name || 'user'}</h2>



          <p>for succesfully completed E-waste Recycling and disposal</p>
          <p>
            E-waste solutions releases the customer from all liabilities to the
            safe collection and recycling of the documented load
          </p>

          <p>
            THIS IS TO CERTIFY that the above described commodity was weighed,
            measured, or counted
          </p>
          <p>conducted from 2023-2024</p>

          <img src={r} alt="signature" height={100} className="signature" />
        </div>

     
      </div>
      <button type="buttton" className="download-btn" onClick={download}>Download</button>
    </>
  );
}

export default Certificate;
