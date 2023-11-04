import React from 'react'
import'./Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Manufacture from "./Images/manufacturer.png"
import Consumers from "./Images/consumers.png";
import Wastebin from "./Images/waste-bin.png";
import Wastecollection from "./Images/waste-collection.png";
import Contractors from "./Images/contractors.png";
import Wasterecycling from "./Images/waste-recycling.png";
import Datadestruction from "./Images/data-destruction.png";



function Home() {
  return (
   <>
    <Navbar />
    <div>
        <div>
        <h1 className='service-text'>Our Services</h1>

        <div className='container'>
         <div className='feature-card'>
         <img src={ Manufacture}  className="img-manufacturer" alt="manufacturer"/>
         <h3 className='title'>Manufacturer</h3>
         </div>

         <div className='feature-card'>
         <img src={ Manufacture}  className="img-manufacturer" alt="manufacturer"/>
         <h3 className='title'>Retailers</h3>
         </div>

         <div className='feature-card'>
         <img src={ Consumers}  className="img-manufacturer" alt="consumers"/>
         <h3 className='title'>Consumers</h3>
         </div>

         <div className='feature-card'>
         <img src={Wastebin}  className="img-manufacturer" alt="waste-bin"/>
         <h3 className='title'>Smart Waste Bins</h3>
         </div>
        </div>
        </div>
    </div>
    <div>
        <div>
        <div className='container'>
         <div className='feature-card'>
         <img src={Wastecollection}  className="img-manufacturer" alt="waste-collection"/>
         <h3 className='title'>Waste Collection Center</h3>
         </div>

         <div className='feature-card'>
         <img src={Contractors}  className="img-manufacturer" alt="contractors"/>
         <h3 className='title'>Contractors</h3>
         </div>

         <div className='feature-card'>
         <img src={Wasterecycling}  className="img-manufacturer" alt="waste recycling plant"/>
         <h3 className='title'>Waste Recycling Plant</h3>
         </div>

         <div className='feature-card'>
         <img src={Datadestruction}  className="img-manufacturer" alt="data-destruction-unit"/>
         <h3 className='title'>Data Destruction Unit</h3>
         </div>

        </div>
        </div>
    </div>

    <Footer />
   </>
  )
}

export default Home