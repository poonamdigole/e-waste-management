import React from 'react';
import './DataUnit.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function DataUnit() {
  return (
    <>
    <Navbar />
    <div className="data-destruction-unit">
      <h1>Electronic Waste Data Destruction Unit</h1>
      <p>
        We provide secure data destruction services for electronic waste to protect your sensitive information.
      </p>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Secure Data Wiping</li>
          <li>Hard Drive Shredding</li>
          <li>Certified Data Destruction</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For inquiries and appointments, please contact us at <a className='mobile' href="tel:+1234567890">123-456-7890</a> 
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default DataUnit;
