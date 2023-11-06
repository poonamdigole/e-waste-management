import React from 'react';
import './Center.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import location from "./Images/location.png";

function Center() {
  return (
    <div>
      <Navbar />
      <div className="waste-collection-center">
        <h1>Welcome to Our Waste Collection Center</h1>
        <p>We are here to help you manage and dispose of your waste responsibly.</p> 
      </div>

      <div className='search-bar-div'>
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>

       <div className='location-card'>
        <img src={location}  className="img-location" alt="location"/> 
         <h3 className='title'>Location: Pune</h3>
         </div>
       
      <Footer />
    </div>
  );
}

export default Center;
