import React from 'react';
import logo from '../Components/logo.png'; 
import '../CSS/navbar.css'; 

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav class="navbar navbar-expand-lg " >
            <div class="container-fluid" style="background-color: transparent;">
              <a class="navbar-brand"><img src="img/favicon.png" alt="" style="filter: brightness(10);"/><b>PLANTEX</b></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#About">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#products">Products</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#question">FAQs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
