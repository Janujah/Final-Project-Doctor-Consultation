import React from 'react';
import Navbar from '../Components/navbar'
import Equi from '../Components/EQUI'
import Footer from '../Components/footer' 



function About() {
  return (
    <div>
        <Navbar/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div><h1 style={{fontSize:'90px', textAlign:'center'}}className='ourservices'><b>Ortho Resourses</b></h1></div><br></br>

        <Equi/>
        <Footer/>
    </div>
  )
}

export default About
