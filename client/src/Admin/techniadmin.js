import React, { useState } from 'react';
import Navbar from '../Components/nav-admin'; // Ensure the path is correct

function UserTable() {
    const [data, setData] = useState({
        users: [
            { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
            { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
            { id: 3, name: "Charlie Daniels", email: "charlie@example.com", role: "Technician" }
        ],
        doctors: [
            { id: 1, name: "Dr. Smith",email:"janu@gmail.com", specialization: "Cardiology" },
            { id: 2, name: "Dr. Who", specialization: "General" }
        ],
        technicians: [
            { id: 1, name: "Techie Steve",email:"janu@gmail.com", field: "Lab" },
            { id: 2, name: "Techie Bob", email:"janu@gmail.com",field: "Field" }
        ],
        consultations: [
            { id: 1, date: "2024-01-01", doctorId: 1, userId: 2 },
            { id: 2, date: "2024-01-02", doctorId: 2, userId: 3 }
        ],
        orders: [
            { id: 1, product: "Medicine A", quantity: 10 },
            { id: 2, product: "Medicine B", quantity: 20 }
        ],
        payments: [
            { id: 1, amount: 100.00 },
            { id: 2, amount: 200.00 }
        ]
    });

    const handleDeleteUser = (id) => {
        setData(prevData => ({
            ...prevData,
            technicians: prevData.technicians.filter(user => user.id !== id)
        }));
    };

    return (
        <div className="user-management-container">
            <Navbar/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className="user-count-card">
                    <h3>Users: {data.users.length}</h3>
                </div>
                <div className="user-count-card">
                    <h3>Doctors: {data.doctors.length}</h3>
                </div>
                <div className="user-count-card">
                    <h3>Technicians: {data.technicians.length}</h3>
                </div>
                <div className="user-count-card">
                    <h3>Consultations: {data.consultations.length}</h3>
                </div>
                <div className="user-count-card">
                    <h3>Orders: {data.orders.length}</h3>
                </div>
                <div className="user-count-card">
                    <h3>Payments: {data.payments.length}</h3>
                </div>
            </div>
            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Field</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.technicians.map((user) => (  
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.field}</td>
                                <td>
                                    <button onClick={() => alert("Go, and write the function for this.")}>Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserTable;
