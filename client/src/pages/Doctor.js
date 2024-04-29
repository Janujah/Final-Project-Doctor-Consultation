import React from 'react';
import Navbar from '../Components/navbar'
import Doc from '../Components/Doc'
import Footer from '../Components/footer' 


function About() {
  return (
    <div>
        <Navbar/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div><h1 style={{fontSize:'90px', textAlign:'center'}}className='ourservices'><b>Doctors</b></h1></div><br></br>

        <Doc/>
        <Footer/>
    </div>
  )
}

export default About
