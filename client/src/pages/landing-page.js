import React from 'react';
import Navbar from '../Components/navbar'
import Home from '../Components/home'
import About from './About'
import ContactUs from './contactus'
import Footer from '../Components/footer' 


function landingpage() {
  return (
    <div>
      <Navbar/>
      <Home/><br/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default landingpage;
