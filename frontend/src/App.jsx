import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import { ReminderProvider } from './components/ReminderContext';
import RegisterUser from './components/RegisterUser/RegisterUser';
import Login from './components/Login';

const App = () => {
  const [loggedInUser,setLoggedInUser] = useState("");
  const [isNewUser, setNewUser] = useState(true);

  const handleUserLogin = (loggedInUser) => {
    setLoggedInUser(loggedInUser);
  } 

  const handleNewUser = (newUser) => {
    setNewUser(newUser);
  }

  console.log('isNewUser:', isNewUser);
  
  return (
    <Router>
      <ReminderProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<RegisterUser events={{ handleUserLogin, handleNewUser }} />} />
            <Route path="/login" element={<Login events={{ handleUserLogin, handleNewUser }} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ReminderProvider>
    </Router>
  );
};

export default App;