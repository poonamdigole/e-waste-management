import "./RecyclingCard.css"
import { Link } from "react-router-dom";

export default function RecyclingCard({ name, recyclingproductimg, recyclingproductprice, recyclingproductDescription, recyclingproductquantity }) {

  const manufacturing = ()=>{
    alert("successfully send product")
    window.location.href="/"
    return
  }
  
  return (
    
    <div className="recycling-card">
        
      <p><img  src={recyclingproductimg} className="img-recycling" alt="" /></p>

      <h2>{name}</h2>

      <p className="card-text text-dark ">{recyclingproductDescription}</p>

      <h2 className="card-headding text-dark fw-bold">₹ {recyclingproductprice}</h2>
{/* 
      <p>{recyclingproductquantity}</p> */}

   

      <button type='button' onClick={manufacturing} className="btn outline-btn my-3 bg:hover-light fw-bold ">Send To Manufacture</button>
    </div>
  );
}
