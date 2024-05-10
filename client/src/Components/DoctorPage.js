import React, { useState, useEffect } from 'react';
import DoctorCard from './doccard';
import Nav from './navbar'

function DoctorPage() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/Doctors/view')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <Nav/><br/><br/><br/><br/><br/><br/><br/>
        <div><h1 style={{fontSize:'90px', textAlign:'center'}}className='ourservices'><b>Doctors</b></h1></div><br></br>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {doctors.map(doctor => (
              <a href='/profile' style={{textDecoration:'none',color:'black'}}>  <DoctorCard key={doctor._id} doctor={doctor} /></a>
            ))}
            </div>
        </div>
    );
}

export default DoctorPage;

// import React, { useState, useEffect } from 'react';
// import DoctorCard from '../Components/doccard';
// import Navbar from '../Components/nav'

// function DoctorShowcase() {
//     const [doctors, setDoctors] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         fetchVerifiedDoctors();
//     }, []);

//     const fetchVerifiedDoctors = () => {
//         fetch('http://localhost:3002/Doctors/view/verified') // Assuming 'verified' fetches only verified doctors
//             .then(response => response.json())
//             .then(data => setDoctors(data))
//             .catch(error => console.error('Failed to fetch verified doctors:', error));
//     };

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredDoctors = doctors.filter(doctor =>
//         doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <Navbar />
//             <div style={{ padding: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Search doctors..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     style={{ width: '100%', padding: '10px' }}
//                 />
//             </div>
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//                 {filteredDoctors.map(doctor => (
//                      <a href='/profile' ><DoctorCard key={doctor._id} doctor={doctor} /></a>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default DoctorShowcase;

