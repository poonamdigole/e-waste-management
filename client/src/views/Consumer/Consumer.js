import React from 'react';
import './Consumer.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import fan from './../Manufacturer/Images/fan.png';
import induction from "./../Manufacturer/Images/induction-stove.png";
import bulb from "./../Manufacturer/Images/bulb.png";


function Consumers() {
  const Buynow=  ()=>{
    {
        alert('Your Order will be Place successfully🎉✨');
        return;
    }}
  return (
    <div>
      <>
        <Navbar />
        <div className='main-div'>
          <div className='main-div'>
            <div className='product-card'>
              <h4 className='shop-name'>Priyanka Bhand</h4>
              <div className='product-details'>
                <span>Product Name: Fan</span>
                <span>Total Amount: ₹2000</span>
                <span>Quantity: 1</span>
              </div>
              <img src={fan} className="product-image" alt="fan" />
              <div>
                <button className='place-order'onClick={Buynow}>Place Order</button>
              </div>
            </div>
          </div>

          <div className='product-card'>
            <h4 className='shop-name'>Sham Shewale</h4>
            <div className='product-details'>
              <span>Product Name: Induction</span>
              <span>Total Amount:₹3500</span>
              <span>Quantity: 1</span>
            </div>
            <img src={induction} className="product-image" alt="induction" />
            <div>
              <button className='place-order'onClick={Buynow}>Place Order</button>
            </div>
          </div>

          <div className='product-card'>
            <h4 className='shop-name'>Ram patil</h4>
            <div className='product-details'>
              <span>Product Name: Blub</span>
              <span>Total Amount:₹450</span>
              <span>Quantity: 1</span>
            </div>
            <img src={bulb} className="product-image" alt="bulb" />
            <div>
              <button className='place-order'onClick={Buynow}>Place Order</button>
            </div>
          
          </div>
          <div className='product-card'>
            <h4 className='shop-name'>Vivek Jadhav</h4>
            <div className='product-details'>
              <span>Product Name: Fan</span>
              <span>Total Amount:₹4000</span>
              <span>Quantity: 2</span>
            </div>
            <img src={fan} className="product-image" alt="bulb" />
            <div>
              <button className='place-order'onClick={Buynow}>Place Order</button>
            </div>
          </div>
          <div className='product-card'>
            <h4 className='shop-name'>Om patil</h4>
            <div className='product-details'>
              <span>Product Name: Bulb</span>
              <span>Total Amount:₹800 </span>
              <span>Quantity: 2</span>
            </div>
            <img src={bulb} className="product-image" alt="bulb" />
            <div>
              <button className='place-order'onClick={Buynow}>Place Order</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  )
}

export default Consumers