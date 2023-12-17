// RegisterUser.jsx
import React from 'react';

const RegisterUser = () => {
  return <div>
    Join the community
    of over XXXX water drinkers
    <tr>
      <td>
        <h1>First Name</h1> 
      </td>
      <td>
        <h1>Last Name</h1> 
      </td>
    </tr>
    <tr>
      <td>
      <input id="firstname" type="text"/> 
      </td>
      <td>
      <input id="lastname" type="text"/> 
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <h1>Email</h1>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <input id="email" type="email"/>
      </td>
    </tr>
    
    <tr>
      <td colSpan={2}>
        <h1>UserName</h1>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <input id="username" type="text"/>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <h1>Password</h1>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <input id="password" type="password"/>
      </td>
    </tr>

    </div>;
};

export default RegisterUser;
