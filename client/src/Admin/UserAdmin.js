import React, { useState, useEffect } from 'react';
import Navbar from '../Components/nav-admin';

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://localhost:3002/SignUp/view')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Failed to fetch users:', error));
    };



    const deleteUser = (id) => {
        if (!id) {
            alert('User ID is missing.');
            return;
        }

        if (window.confirm(`Are you sure you want to delete this user?`)) {
            fetch(`http://localhost:3002/SignUp/delete/${id}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message || "User deleted successfully");
                fetchUsers();  // Refresh list to show remaining users
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
                                <td>{user.Role}</td>
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
