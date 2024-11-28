import React from 'react';

const Login = ({ onLogin }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically check credentials
        onLogin(); // Call the onLogin function on successful login
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;