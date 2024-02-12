import React, { useState } from 'react';
import './CertificateGenerator.css';
import axios from 'axios'
// import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function CertificateGenerator() {
  const [name, setName] = useState('');
  const [dateOfStart, setDateOfStart] = useState('');
  const [dateOfEnd, setDateOfEnd] = useState('');
  const [signature, setSignature] = useState('');
  const [signatureDetails, setSignatureDetails] = useState('');

  
  
 

  const certificate = async ()=>{
    if (!name){
        alert('Name is required');
        return;
    }
   
   if(!dateOfStart){
    alert('date is required')
    return;
   }

   if(!dateOfEnd){
    alert('date is required')
    return;
   }

   if(!signature){
    alert('signature is required')
    return;
   }

   if(!signatureDetails){
    alert('signatureDetails is required')
    return;
   }



    const response =await axios.post("/api/v1/certificates",{
           name,
           dateOfStart,
           dateOfEnd,
           signature,
           signatureDetails
        })
        if (response?.data?.success){
            alert(response?.data?.message);
            window.location.href="/login";
        }else{
            alert(response?.data?.message);
        }
    };
  return (


    <>
    <div>
       <Navbar />
      <form className="signup-form">
        <h1 className='text-center'>Signup</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="dateOfStart">Start Date</label>
          <input
            type="text"
            placeholder="Enter you start date"
            id="dateOfStart"
            className="form-control"
            value={dateOfStart}
            onChange={(e) => {
              setDateOfStart(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="dateOfEnd"> Enter End DATE</label>
          <input
            type="text"
            placeholder="Enter your Etart Date"
            id="dateOfEnd"
            className="form-control"
            value={dateOfEnd}
            onChange={(e) => {
              setDateOfEnd(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="signature">Signature</label>
          <input
            type="text"
            placeholder="Enter your Signature"
            id="signature"
            className="form-control"
            value={signature}
            onChange={(e) => {
              setSignature(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="signatureDetails">SignatureDetails</label>
          <input type="text"
            placeholder="Enter your signatureDetails"
            id="signatureDetails"
            className="form-control"
            value={signatureDetails}
            onChange={(e) => {
              setSignatureDetails(e.target.value);
            }} />
        </div>

        <button type="button" className="btn signup-btn" onClick={certificate}>
         Generate Certificate
        </button>

      
      </form>
    </div>
    <Footer />
    </>
  );
}

export default CertificateGenerator;
