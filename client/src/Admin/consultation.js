import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/nav-admin';

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3002//view')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch users:', error);
            });
    };

    const deleteUser = (id) => {
        if (!id) {
            alert('User ID is missing.');
            return;
        }

        if (window.confirm(`Are you sure you want to delete this user?`)) {
            axios.delete(`http://localhost:3002/SignUp/delete/${id}`)
                .then(response => {
                    alert(response.data.message || "User deleted successfully");
                    fetchUsers(); 
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to delete the user.');
                });
        }
    };

    return (
        <div className="user-management-container">
            <Navbar />
            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => alert('Edit functionality not implemented')}>Edit</button>
                                    <button onClick={() => deleteUser(user._id)}>Delete</button>
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
