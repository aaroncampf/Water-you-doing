import React, { useState } from 'react';
import './RegisterUser.css';

function RegisterUser({ events }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const { handleUserLogin, handleNewUser } = events;

  function clickRegisterUser(e) {
    const payload = {
      fname: firstName,
      lname: lastName,
      email: email,
      userID: userID,
      password: password,
    };

    fetch('http://localhost:8080/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((jsondata) => {
        console.log(jsondata);
        const resultJSON = JSON.parse(JSON.stringify(jsondata));
        console.log(resultJSON.STATUS);
        alert('User Registered Successfully');
        if (resultJSON.STATUS === 'Success') {
          handleUserLogin(userID);
          handleNewUser(false);
        }
      })
      .catch((error) => {
        alert('Error submitting request');
      });
  }

  return (
    <form className="RegisterUser">
      <div className="RegisterUserDiv">
        <table border="1">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>
                <input
                  placeholder="Enter User Name"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="button" value="Register User" onClick={(e) => clickRegisterUser(e)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default RegisterUser;
