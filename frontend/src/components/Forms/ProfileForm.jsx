// ProfileForm.jsx
import React, { useState } from 'react';

const ProfileForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // TODO: Replace simulation with actual API update
        try {
          const response = await fetch('/api/update-profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
      
          const data = await response.json();
          console.log('Server response:', data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      

    // TODO: add logic  to save the data or send it to the server.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileForm;


