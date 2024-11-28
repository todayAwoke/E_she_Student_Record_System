import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Student =()=>{
const [users, setUsers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com" },
    { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com" }
]);

const handleEdit = (user) => {
    alert(`Edit user: ${user.firstName} ${user.lastName}`);
    // Implement edit functionality here
};

const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        setUsers(users.filter(user => user.id !== id));
    }
};

return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">User Table</h2>

        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">First Name</th>
                    <th className="py-2 px-4 border-b">Last Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border-b">{user.firstName}</td>
                        <td className="py-2 px-4 border-b">{user.lastName}</td>
                        <td className="py-2 px-4 border-b">{user.email}</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                onClick={() => handleEdit(user)}
                                className="text-blue-500 hover:underline mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default Student