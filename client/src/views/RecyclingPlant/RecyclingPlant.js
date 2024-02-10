// // import React from 'react';
// // import './RecyclingPlant.css';
// // import Navbar from '../../components/Navbar/Navbar';
// // import Footer from '../../components/Footer/Footer';

// // function RecyclingPlant() {
// //   return (
// //     <>
// //     <Navbar />
// //     <div className="waste-recycling-plant">
// //       <h1>Welcome to Our Waste Recycling Plant</h1>
// //       <p>
// //         Our recycling plant is dedicated to environmentally responsible waste management and recycling.
// //       </p>

// //       {/* Add more content and components specific to your recycling plant */}
// //     </div>
// //     <Footer />
// //     </>
// //   );
// // }

// import React from 'react';
// import './RecyclingPlant.css';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';

// function RecyclingPlant() {
//   return (
//     <>
//     <Navbar />
//     <div className="waste-recycling-plant">
//       <h1>Welcome to Our Waste Recycling Plant</h1>
//       <p>
//         Our recycling plant is dedicated to environmentally responsible waste management and recycling. We offer a wide range of recycling services to help protect the environment and reduce waste.
//       </p>

//       <section className="services">
//         <h2>Our Services</h2>
//         <ul>
//           <li>Plastic Recycling</li>
//           <li>Copper  Recycling</li>
//           <li>Silicon Recycling</li>
//           <li>Metal Recycling</li>
//         </ul>
//       </section>

//       <section className="contact">
//         <h2>Contact Us</h2>
//         <p>
//           If you have any questions or would like to inquire about our services, please feel free to contact us at <a className='mobile' href="tel:+1234567890">123-456-7890</a>
//         </p>
//       </section>
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default RecyclingPlant;

import React from "react";
import "./RecyclingPlant.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img from "../RecyclingPlant/Recyclingimg/e-waste.webp"

function RecyclingPlant() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center pt-2 pb-2 fs-2 ">
          {" "}
          Welcome to Our E-Waste Recycling Plant
        </h1>

        <p className="heading-text">
          Our recycling plant is dedicated to environmentally responsible waste
          management and recycling. We offer a wide range of recycling services
          to help protect the environment and reduce waste.
        </p>

       <p> <img src={img} alt="ewasteImg"  className="e-waste-img"/></p>
      </div>

      
      <Footer />
    </>
  );
}

export default RecyclingPlant;
