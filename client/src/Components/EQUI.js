import React, { useRef } from 'react';
import '../CSS/About.css'
import ServiceCard from '../Components/card'

const serviceData = [
    {
        id: 1,
        title: 'Family Physicians',
        imageUrl: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/456/2022/08/iStock-1351391195-1.jpg'
    },
    {
        id: 2,
        title: 'Internists',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPbC7Nc6FInRTsDZMSYSpHDxPhEG_KpDqF9TD8ENJzw&s'
    },
    {
        id: 3,
        title: 'General Pediatricians',
        imageUrl: 'https://www.pediatrics.wisc.edu/wp-content/uploads/2022/03/Mathur-with-patient-300x200.jpg'
    },
 
   
    // Add more services as needed
];

function ServicesDisplay() {
    return (
        <div className="services-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {serviceData.map(service => (
                <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                />
            ))}
        </div>
    );
}

export default ServicesDisplay;