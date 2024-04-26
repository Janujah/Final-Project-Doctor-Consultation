// src/components/ContactPage.js
import React from 'react';
import ContactForm from '../Components/contactUs';
import '../CSS/contactUs.css'; // Import the CSS for styling

function ContactPage() {
    return (
        <div>
            <h1 style={{textAlign:'center', fontWeight:'800', color:' #0e0737',fontSize:'50px'}}>Contact Us</h1>
            <ContactForm />

        </div>
    );
}

export default ContactPage;
