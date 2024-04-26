import React from 'react';
import logo from '../Components/logo.png'; 
import '../CSS/navbar.css'; 

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <nav>
            <ul className="nav-links">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ourservices">Our Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/doctors">Doctors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/equipments">Equipment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">
                        <button className="login-button">Login</button>
                    </a>
                </li>
            </ul>
            </nav>

        </div>
    );
}

export default Navbar;
