import "./RecyclingCard.css"
import { Link } from "react-router-dom";

export default function Contactpagecard({ name, productImg, price, description }) {
  const manufacturing = ()=>{
    alert("successfully send product")
    window.location.href="/"
    return
  }
  return (
    <div className="contact-page-cardcard">
        
      <p><img  src={productImg} className="img-contact" alt="" /></p>

      <h2>{name}</h2>

      <h2 className="card-headding text-dark">{price}</h2>

      <p className="card-text text-dark">{description}</p>

      <button type='button' onClick={manufacturing} className="btn outline-btn my-3 bg:hover-light fw-bold ">Send To Manufacture</button>
    </div>
  );
}
