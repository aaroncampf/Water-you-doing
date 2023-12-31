import React, { useState } from 'react';

const Login = ({ events }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleUserLogin, handleNewUser } = events;

  const handleClickLogin = async (e) => {
    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        handleUserLogin(data.user_id);
        handleNewUser(false);
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
};

export default Login;
