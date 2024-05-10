import React, { useState } from 'react';

function UserProfile() {
    const userData = {
        name: "Dr.Hariharan",
        email: "Hariharan@gmail.com",
        role: "Doctor",
        profileImage: "https://via.placeholder.com/150",
    };

    const timeSlots = [
        { day: "Monday", time: "10:00 - 11:00 AM" },
        { day: "Tuesday", time: "1:00 - 2:00 PM" },
        { day: "Wednesday", time: "3:00 - 4:00 PM" },
        { day: "Wednesday", time: "3:00 - 4:00 PM" },

        { day: "Wednesday", time: "3:00 - 4:00 PM" },
        { day: "Wednesday", time: "3:00 - 4:00 PM" },

    ];

    const [selectedSlot, setSelectedSlot] = useState(null);

    return (
        <div style={{ background:'linear-gradient(to bottom,   #FFFCFC,  #AB9551)'}}>
        <div className="profile-container">

            <div className="profile-header">
                <img src={userData.profileImage} alt="Profile" className="profile-image" />
                <h1>{userData.name}</h1>
                <p>{userData.email}</p>
                <p>{userData.role}</p>
                <button onClick={() => alert("Booking functionality to be implemented.")} className="book-button">Book Appointment</button>
            </div>
            <div className="profile-details">
                <h2>Available Time Slots</h2>
                <table className="timeslot-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((slot, index) => (
                            <tr key={index}>
                                <td>{slot.day}</td>
                                <td>{slot.time}</td>
                                <td>
                                    <button onClick={() => setSelectedSlot(slot)} className="select-button">Select</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default UserProfile;
