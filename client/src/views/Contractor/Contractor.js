import React from 'react';
import './Contractor.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import profilePic from "./Images/profile.png";

function Contractor() {
  return (
    <div>
        <>
        <Navbar />
        <div className='container'>
        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Ram Patil</h3>
          <p className='area-name'>Hadpsar Lene No:3</p>
          <p className='Mobile'>9567564312</p>
          <button className='contact-now'>Conatct Now</button>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Shubham Pund</h3>
          <p className='area-name'>Shivaji Nagar</p>
          <p className='Mobile'>9567567612</p>
          <button className='contact-now'>Conatct Now</button>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Anand Gund</h3>
          <p className='area-name'>Shewalewadi Nandini Dreams</p>
          <p className='Mobile'>9567993454</p>
          <button className='contact-now'>Conatct Now</button>
        </div>
          
        </div>
        <Footer />
        </>
    </div>
  )
}

export default Contractor