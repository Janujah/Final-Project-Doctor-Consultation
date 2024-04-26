import React from 'react';
// import Navbar from '../Components/navbar'
import OS from '../Components/ourrservices'
import Footer from '../Components/footer'


function About() {
  return (
    <div>
        {/* <Navbar/> */}
        <h1 style={{textAlign:'center', fontWeight:'1000', color:' #0e0737',fontSize:'70px'}}>Our Services</h1>
        <p style={{padding:'34px',fontSize:'30px'}}> Welcome to Oasis, where we offer a comprehensive range of medical services tailored to meet your healthcare needs. From general medical consultations and specialist referrals to preventive health screenings and chronic disease management, our platform connects you with experienced healthcare professionals ready to provide personalized care. Whether you're preparing for surgery, seeking mental health support, or need pediatric care for your children, our team is here to ensure you receive quality care conveniently through our advanced telemedicine options. Join us today to experience healthcare that prioritizes your well-being and empowers you to take control of your health journey</p>
        <OS/>
    </div>
  )
}

export default About
