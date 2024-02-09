import React from 'react';
import './Center.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import location from "./Images/location.png";
// import {Contactpagecard, } from "../../components/Cards/Card";
import Contactpagecard from "./../../components/Cards/Card";
import ImgCall from './img/tele.png';
import ImgLoc from './img/address.png';
import ImgClock from './img/cloc.png';
import ImgGmail from './img/mail.png';


function Center() {
  return (
    <div>
      <Navbar />
      <div className="waste-collection-center">
        <h1>Welcome to Our Waste Collection Center</h1>
        <p>We are here to help you manage and dispose of your waste responsibly.</p> 
      </div>

      {/* <div className='search-bar-div'>
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div> */}

       {/* */}

         <div className='google-map'>
         <div className='location-card'>
        <img src={location}  className="img-location" alt="location"/> 
         <h3 className='title'>Location: Pune</h3>
         </div> 
         <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4901915444375!2d73.83564527465184!3d18.506737769597727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8b178b9435%3A0x5222625a9f5bea09!2sEwaste%20Global!5e0!3m2!1sen!2sin!4v1707416458726!5m2!1sen!2sin" ></iframe>
         </div>

         <div className="contact-card-container ">
                <Contactpagecard Img={ImgCall} Heading={'PHONE'} Text={'+91 9356181098'} />
                <Contactpagecard Img={ImgLoc} Heading={'OUR LOCATION'} Text={'Ewaste Global A, J Riverview, 33/34, Navi Peth, Sadashiv Peth, Pune, Maharashtra 411030'} />
                <Contactpagecard Img={ImgGmail} Heading={'EMAIL US'} Text={'Aj@gmail.com'} />
                <Contactpagecard Img={ImgClock} Heading={'OPENING HOURS'} Text={'Sat-Sun: 9:00 AM to 10:00 PM Mon-Fri: 12:00 PM to 10:00'} />
            </div>

      <Footer />
    </div>
  );
}

export default Center;
