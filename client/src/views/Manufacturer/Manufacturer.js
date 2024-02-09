import React from 'react';
import './Manufacturer.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import bulb from "./Images/bulb.png";
import flashDrive from "./Images/flash-drive.png";
import extension from "./Images/extension.png";
import fan from "./Images/fan.png";
import mobile from "./Images/mobile-phone.png";
import induction from "./Images/induction-stove.png";

function Manufacturer() {
  const Buynow=  ()=>{
    {
        alert('Your Order will be Place successfully✨🎇🎉');
        return;
    }}
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="product-card">
          <img src={bulb} className="product-image" alt="bulb" />
          <h1 className='product-title'>Bulb</h1>
          <p className='product-price'>₹450</p>
          <p className='product-description'>
            A bulb is the glass part of an
            electric lamp,which gives out
            light when electricity passes through it.</p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={flashDrive} className="product-image" alt="flashDrive" />
          <h1 className='product-title'>Flash Drive</h1>
          <p className='product-price'>₹700</p>
          <p className='product-description'>
            A USB flash drive -- also known as a USB stick,
            USB thumb drive or pen drive -- is a
            plug-and-play portable storage device
            that uses flash memory and is lightweight
            enough to attach to a keychain.</p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={extension} className="product-image" alt="extension" />
          <h1 className='product-title'>Extension</h1>
          <p className='product-price'>₹300</p>
          <p className='product-description'>
          An extension cord (US), extension cable, power extender, drop cord, or extension 
          lead (UK) is a length of flexible electrical power cable (flex) with 
          a plug on one end and one or more sockets on the other end 
          (usually of the same type as the plug).</p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={fan} className="product-image" alt="fan" />
          <h1 className='product-title'>Fan</h1>
          <p className='product-price'>₹2000</p>
          <p className='product-description'>
          A ceiling fan is one that is mounted on the 
          ceiling of your room, 
          runs on electricity and uses rotating 
          blades which cuts the air to produce airflow. </p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={mobile} className="product-image" alt="mobile" />
          <h1 className='product-title'>Mobile</h1>
          <p className='product-price'>₹20000</p>
          <p className='product-description'>
          Mobile devices may also include voice communication capabilities, 
          on-board sensors that allow the devices to capture information, 
          or built-in features that synchronize local data with remote locations.</p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={induction} className="product-image" alt="induction" />
          <h1 className='product-title'>Induction</h1>
          <p className='product-price'>₹3500</p>
          <p className='product-description'>
          Electromagnetic Induction or Induction is a process in which a
          conductor is put in a particular position and magnetic
          field keeps varying or magnetic field is stationary
          and a conductor is moving.
          </p>
          <button className='product-card-button' onClick={Buynow}>Buy Now</button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Manufacturer;
