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
            <a className="nav-link active" aria-current="page" href="/doctors">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/doctors/ourservices">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/doctors/Appointment">Appointments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/doctors/ContactUs">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <button className="login-button" style={{width:'200px',height:'55px'}}>Add Profile</button>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
