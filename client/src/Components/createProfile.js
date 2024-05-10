// // import React, { useState } from 'react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';

// // function ProfilePage() {
// //     const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
// //     const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');

// //     const formik = useFormik({
// //         initialValues: {
// //             fullName: 'John Doe',
// //             email: 'john.doe@example.com',
// //             bio: '',
// //             availableTime: '',
// //             registeredId: '',
// //             workingHospitals: '',
// //             age: '',
// //             contactNo: ''
// //         },
// //         validationSchema: Yup.object({
// //             fullName: Yup.string().required('Full name is required'),
// //             email: Yup.string().email('Invalid email address').required('Email is required'),
// //             bio: Yup.string(),
// //             availableTime: Yup.string(),
// //             registeredId: Yup.string().required('Registered ID is required'),
// //             workingHospitals: Yup.string().required('Current working hospitals are required'),
// //             age: Yup.number().positive().integer().required('Age is required'),
// //             contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
// //         }),
// //         onSubmit: values => {
// //             console.log('User Profile:', values);
// //             alert('Profile updated!');
// //         },
// //     });

// //     const handleImageChange = (file, setImage) => {
// //         if (file) {
// //             setImage(URL.createObjectURL(file));
// //         }
// //     };

// //     return (
// //         <div style={{ background:'linear-gradient(to bottom,   #FFFCFC,  #AB9551)'}}>
// //         <div className="profile-container" >
// //             <h1>Your Profile</h1>
// //             <form onSubmit={formik.handleSubmit} className="profile-form">
// //                 <div className="form-group">
// //                     <label htmlFor="fullName">Full Name:</label>
// //                     <input id="fullName" type="text" {...formik.getFieldProps('fullName')} />
// //                     {formik.touched.fullName && formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="email">Email:</label>
// //                     <input id="email" type="email" {...formik.getFieldProps('email')} />
// //                     {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="bio">Bio:</label>
// //                     <textarea id="bio" {...formik.getFieldProps('bio')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="availableTime">Available Time:</label>
// //                     <input id="availableTime" type="text" placeholder="e.g., Mondays, 3-5 PM" {...formik.getFieldProps('availableTime')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="registeredId">Registered ID:</label>
// //                     <input id="registeredId" type="text" {...formik.getFieldProps('registeredId')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="workingHospitals">Current Working places:</label>
// //                     <input id="workingHospitals" type="text" {...formik.getFieldProps('workingHospitals')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="age">Age:</label>
// //                     <input id="age" type="number" {...formik.getFieldProps('age')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="contactNo">Contact No:</label>
// //                     <input id="contactNo" type="text" {...formik.getFieldProps('contactNo')} />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="profilePicture">Profile Picture:</label>
// //                     <input id="profilePicture" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setProfileImage)} />
// //                     <img src={profileImage} alt="Profile" className="profile-image" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="digitalSignature">Digital Signature:</label>
// //                     <input id="digitalSignature" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setSignatureImage)} />
// //                     <img src={signatureImage} alt="Signature" className="profile-image" />
// //                 </div>
// //                 <button type="submit" className="update-button"><a href='/Doctors' style={{textDecoration:'none',  color:'white'}}>Update Profile</a></button>
// //             </form>
// //         </div>
// //         </div>
// //     );
// // }

// // export default ProfilePage;


// import React, { useState , useEffect } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// function ProfilePage() {
//     const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
//     const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');



//     const formik = useFormik({
//         initialValues: {
//             fullName: '',
//             email: '',
//             bio: '',
//             availableTime: '',
//             registeredId: '',
//             workingHospitals: '',
//             age: '',
//             contactNo: ''
//         },
//         validationSchema: Yup.object({
//             fullName: Yup.string().required('Full name is required'),
//             email: Yup.string().email('Invalid email address').required('Email is required'),
//             bio: Yup.string(),
//             availableTime: Yup.string(),
//             registeredId: Yup.string().required('Registered ID is required'),
//             workingHospitals: Yup.string().required('Current working hospitals are required'),
//             age: Yup.number().positive().integer().required('Age is required'),
//             contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
//         }),

//         onSubmit: values => {
//             axios.post('http://localhost:3002/Doctors/create', {
//                 ...values,
//                 profileImage,
//                 signatureImage
//             })
//             .then(response => {
//                 alert('Profile updated successfully!');
//             })
//             .catch(error => {
//                 alert('Failed to update profile.');
//                 console.error('Error:', error);
//             });
//         },
//     });

//     const handleImageChange = (event, setImage) => {
//         const file = event.currentTarget.files[0];
//         if (file) {
//             setImage(URL.createObjectURL(file));
//         }
//     };

//     return (
//         <div className="profile-container" style={{ padding: "20px", fontFamily: "Arial" }}>
//             <h1 style={{ textAlign: "center" }}>Your Profile</h1>
//             <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }}>
//                 {/* Full Name */}
//                 <label htmlFor="fullName">Full Name:</label>
//                 <input
//                     id="fullName"
//                     type="text"
//                     {...formik.getFieldProps('fullName')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />
//                 {formik.touched.fullName && formik.errors.fullName && <div style={{ color: "red" }}>{formik.errors.fullName}</div>}

//                 {/* Email */}
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     id="email"
//                     type="email"
//                     {...formik.getFieldProps('email')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />
//                 {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}

//                 {/* Bio */}
//                 <label htmlFor="bio">Bio:</label>
//                 <textarea
//                     id="bio"
//                     {...formik.getFieldProps('bio')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />

//                 {/* Available Time */}
//                 <label htmlFor="availableTime">Available Time:</label>
//                 <input
//                     id="availableTime"
//                     type="text"
//                     {...formik.getFieldProps('availableTime')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                     placeholder="e.g., Mondays, 3-5 PM"
//                 />

//                 {/* Registered ID */}
//                 <label htmlFor="registeredId">Registered ID:</label>
//                 <input
//                     id="registeredId"
//                     type="text"
//                     {...formik.getFieldProps('registeredId')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />

//                 {/* Working Hospitals */}
//                 <label htmlFor="workingHospitals">Current Working Places:</label>
//                 <input
//                     id="workingHospitals"
//                     type="text"
//                     {...formik.getFieldProps('workingHospitals')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />

//                 {/* Age */}
//                 <label htmlFor="age">Age:</label>
//                 <input
//                     id="age"
//                     type="number"
//                     {...formik.getFieldProps('age')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />

//                 {/* Contact No */}
//                 <label htmlFor="contactNo">Contact No:</label>
//                 <input
//                     id="contactNo"
//                     type="text"
//                     {...formik.getFieldProps('contactNo')}
//                     style={{ padding: "8px", margin: "5px 0" }}
//                 />

//                 {/* Profile Picture */}
//                 <label htmlFor="profilePicture">Profile Picture:</label>
//                 <input
//                     id="profilePicture"
//                     type="file"
//                     accept="image/*"
//                     onChange={(event) => handleImageChange(event, setProfileImage)}
//                     style={{ margin: "5px 0" }}
//                 />
//                 <img src={profileImage} alt="Profile" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />

//                 {/* Digital Signature */}
//                 <label htmlFor="digitalSignature">Digital Signature:</label>
//                 <input
//                     id="digitalSignature"
//                     type="file"
//                     accept="image/*"
//                     onChange={(event) => handleImageChange(event, setSignatureImage)}
//                     style={{ margin: "5px 0" }}
//                 />
//                 <img src={signatureImage} alt="Signature" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />

//                 <button type="submit" style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//                     Save Profile
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default ProfilePage;

import React, { useState } from 'react';

function ProfilePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        bio: '',
        registeredId: '',
        workingHospitals: '',
        age: '',
        contactNo: '',
        availability: [{ day: '', time: '' }],
        
    });
    const [profileImage, setProfileImage] = useState(null);
    const [signatureImage, setSignatureImage] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
        if (!formData.workingHospitals) newErrors.workingHospitals = 'Current working hospitals are required';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Must be a valid 10-digit phone number';
        formData.availability.forEach((slot, index) => {
            if (!slot.day) newErrors[`day${index}`] = 'Day is required';
            if (!slot.time) newErrors[`time${index}`] = 'Time is required';
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAvailabilityChange = (index, field, value) => {
        const newAvailability = formData.availability.map((slot, idx) =>
            index === idx ? { ...slot, [field]: value } : slot
        );
        setFormData({ ...formData, availability: newAvailability });
    };

    const handleAddAvailability = () => {
        setFormData(prev => ({
            ...prev,
            availability: [...prev.availability, { day: '', time: '' }]
        }));
    };

    const handleRemoveAvailability = (index) => {
        setFormData(prev => ({
            ...prev,
            availability: prev.availability.filter((_, idx) => idx !== index)
        }));
    };

    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log('Form submitted', formData);
        fetch('http://localhost:3002/Doctors/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(alert('Profile updated successfully!'))
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
            <div className="profile-container" style={{ padding: "20px" }}>
                <h1 style={{ textAlign: "center" }}>Your Profile</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">

                    <label htmlFor="profileImage">Profile Picture:</label>
                    <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleImageChange(event, setProfileImage)}
                        style={{ margin: "5px 0" }}
                    />
                    {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
                    {Object.keys(formData).filter(key => key !== 'availability').map(key => (
                        <div key={key}>
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}:</label>
                            <input
                                id={key}
                                name={key}
                                type={key === 'age' || key === 'contactNo' ? 'number' : 'text'}
                                value={formData[key]}
                                onChange={handleChange}
                                style={{ padding: "8px", margin: "5px 0" }}
                            />
                            {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
                        </div>
                    ))}

                    {formData.availability.map((slot, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <input
                                type="text"
                                placeholder="Day"
                                value={slot.day}
                                onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                                style={{ marginRight: '5px' }}
                            />
                            <input
                                type="text"
                                placeholder="Time"
                                value={slot.time}
                                onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)}
                                style={{ marginRight: '5px' }}
                            />
                            <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>
                        Add Availability
                    </button>

                    <label htmlFor="signatureImage">Digital Signature:</label>
                    <input
                        id="signatureImage"
                        name="signatureImage"
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleImageChange(event, setSignatureImage)}
                        style={{ margin: "5px 0" }}
                    />
                    {signatureImage && <img src={URL.createObjectURL(signatureImage)} alt="Signature" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}

                    <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;
