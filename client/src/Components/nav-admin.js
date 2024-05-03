// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="admin-navbar">
      <ul className="admin-nav-links">
        <li><Link to="/Admin/users">Users</Link></li>
        <li><Link to="/Admin/Doctors">Doctors</Link></li>
        <li><Link to="/Admin/Technicians">Technicians</Link></li>
        <li><Link to="/Admin/Consultation">Consumers</Link></li>
        <li><Link to="/Admin/Payment">Payments</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
