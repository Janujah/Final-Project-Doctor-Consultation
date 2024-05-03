// src/components/UserProfile.js
import React, { useState } from 'react';

function UserProfile() {
    // Example user and time slot data (normally you'd fetch this from a server)
    const userData = {
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
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

    // State to track the selected time slot
    const [selectedSlot, setSelectedSlot] = useState(null);

    return (
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
    );
}

export default UserProfile;
