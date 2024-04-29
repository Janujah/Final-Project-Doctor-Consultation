// src/App.js
import React from 'react';
import ProfileCard from '../Components/ProfileCard';
import image1 from '../Img/interlocking-implants-removebg-preview.png';
// import image2 from '../Img/img2.png'
// import Nav from '../Components/navbar'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer' 



function App() {
    return (
      <div>
        <Navbar/><br/><br/><br/><br/><br/><br/><br/>
        <div><h1 style={{fontSize:'90px', textAlign:'center'}}className='ourservices'><b>Our Services</b></h1></div><br></br>
        <div style={{padding:'40px'}}><p style={{fontSize:'23px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Oasis, where we offer a comprehensive range of medical services tailored to meet your healthcare needs. From general medical consultations and specialist referrals to preventive health screenings and chronic disease management, our platform connects you with experienced healthcare professionals ready to provide personalized care. <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you're preparing for surgery, seeking mental health support, or need pediatric care for your children, our team is here to ensure you receive quality care conveniently through our advanced telemedicine options. Join us today to experience healthcare that prioritizes your well-being and empowers you to take control of your health journey.</p></div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href='/our-services/doctors' style={{ textDecoration:'none' }}> <ProfileCard
               specialty="Doctors"
               imageUrl="https://t4.ftcdn.net/jpg/03/30/33/29/360_F_330332917_MO0x1tcYedbGxUM4wgATwyOkU7xY5wEI.jpg"
           /></a>
           <a href='/our-services/equipments' style={{ textDecoration:'none' }}> <ProfileCard 
                specialty="Ortho Resourses"
                imageUrl= {image1}
            /></a>
        </div>
        {/* <Footer/> */}
        </div>
    );
}

export default App;

