
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = (JSON.parse(localStorage.getItem("user") || "{}"));
    setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
   
  }


  return (
    <div className="position-sticky top-0 navbar-container ">
      <nav className="navbar navbar-expand-lg p-3 fs-4 nav1 ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light logoimg " to="/">
            <span className="logo"> 🗑️ E-WASTE</span>
          </Link>

          <button
            className="navbar-toggler bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/mylinks">
                  customer
                </Link>
              </li>
            </ul>
          <div className="logout-btn">
            {
          user?.name ? <button type='button' className="navbar-logout-btn" onClick={logout}> Logout </button> : <span><Link to='/signup' className="navbar-link"> Signup </Link> <Link to='/login' className="navbar-link">login</Link> </span>
          }

       hello,{user?.name || "user"}
       </div>
          </div>
        </div>
        <div>
         
          
         
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
