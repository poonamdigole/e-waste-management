import React from 'react';
import './WasteBin.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function WasteBins() {
  return (
    <>
    <Navbar />
    <div className="smart-waste-bins">
      <section className="ferrous-bin">
        <h2>Ferrous Smart Waste Bin</h2>
        <p>
          The Ferrous Smart Waste Bin is designed to collect ferrous materials such as iron and steel. It helps in recycling and managing these materials efficiently.
        </p>
        <ul>
          <li>Capacity: 50 liters</li>
          <li>Location: Industrial Area</li>
          {/* Add more details specific to the Ferrous bin */}
        </ul>
        {/* Add components or functionality related to the Ferrous bin */}
      </section>

      <section className="non-ferrous-bin">
        <h2>Non-Ferrous Smart Waste Bin</h2>
        <p>
          The Non-Ferrous Smart Waste Bin is dedicated to non-ferrous materials like aluminum, copper, and brass. It promotes eco-friendly disposal of these materials.
        </p>
        <ul>
          <li>Capacity: 40 liters</li>
          <li>Location: Residential Area</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default WasteBins;
