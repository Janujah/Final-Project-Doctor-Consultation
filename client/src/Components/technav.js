import React from 'react';
import logo from '../Components/logo.png';
import '../CSS/navbar.css';

function Navbar() {

  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/Technicians">Home</a>
          </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/Techinicians/ourservices">Our Services</a>
          </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/Techinicians/orders">Orders</a>
          </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/Techinicians/ContactUs">Contact Us</a>
          </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/Techinicians/Create-profile">
              <button className="login-button" style={{width:'200px',height:'55px'}}>Add Profile</button>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
