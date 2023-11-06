import React from 'react';
import './Retailer.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import fan from  './../Manufacturer/Images/fan.png';
import induction from "./../Manufacturer/Images/induction-stove.png";
import bulb from "./../Manufacturer/Images/bulb.png";
import { Link } from 'react-router-dom';

function Retailers() {
  return (
    <>
      <Navbar />
      <div className='main-div'>
        <div className='product-card'>
          <h4 className='shop-name'>Om Electronics</h4>
          <div className='product-details'>
            <span>Product Name: Fan</span>
            <span>Total Amount: ₹2000</span>
            <span>Quantity: 1</span>
          </div>
          <img src={fan} className="product-image" alt="fan" />
         <div>
         <button className='place-order'>Place Order</button>
         </div>
        </div>
    
        <div className='product-card'>
          <h4 className='shop-name'>Electric Word</h4>
          <div className='product-details'>
            <span>Product Name: Induction</span>
            <span>Total Amount:₹7500</span>
            <span>Quantity: 2</span>
          </div>
          <img src={induction} className="product-image" alt="induction" />
          <div>
         <button className='place-order'>Place Order</button>
         </div>
        </div>

        <div className='product-card'>
          <h4 className='shop-name'>Sai Electronics</h4>
          <div className='product-details'>
            <span>Product Name: Blub</span>
            <span>Total Amount:₹450</span>
            <span>Quantity: 1</span>
          </div>
          <img src={bulb} className="product-image" alt="bulb" />
          <div>
         <button className='place-order'>Place Order</button>
         </div>
        </div>
        <button type='button' className='navigate-btn'><Link className='order-product' to="/manufacturer">
        Order Product Now</Link></button>
 </div>
      <Footer />
    </>
  );
}

export default Retailers;
