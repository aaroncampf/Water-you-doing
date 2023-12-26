import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import RegisterUser from './components/RegisterUser/RegisterUser';

function App() {
  const [count, setCount] = useState(0)
  const [loggedInUser,setLoggedInUser] = useState("");
  const [isNewUser, setNewUser] = useState(false);

  const handleUserLogin = (loggedInUser) => {
   
    setLoggedInUser(loggedInUser);
  } 

  const handleNewUser = (newUser) => {
    
    setNewUser(newUser);
  }

  return (

      <Router>
      <div>
        
        {(isNewUser) ? <RegisterUser events={{handleUserLogin,handleNewUser}}/> : 
        (loggedInUser == "" ? <Login events={{handleUserLogin,handleNewUser}}/> : <NavBar />)
        }
        <Routes>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/home" element={<Home />} />
          <Route paht="/" element={<Login/>} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
        </Routes>
      </div>
      
      </Router>
  )
}

export default App;
