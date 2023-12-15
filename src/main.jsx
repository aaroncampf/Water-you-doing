import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Register.jsx'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import Login from './Login.jsx'
import './index.css'
import CirclePage from './CircleGraph.jsx'
import CircleGraph from './CircleGraph.jsx'
import ProfilePage from './ProfilePage.jsx'
import ProfilePageFull from './ProfilePageFull.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> 
    <Navbar />
    <Register />
    <CircleGraph /> */}
    {/* <ProfilePage /> */}
    <ProfilePageFull />

    
  </React.StrictMode>,
)
