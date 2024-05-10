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
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <a className="nav-link" href="/ourservices">Our Services</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <a className="nav-link" href="/our-services/doctors">Doctors</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <a className="nav-link" href="/our-services/equipments">Ortho Resourses</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
