import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Register.jsx'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import Login from './Login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Navbar />
    <Register />
  </React.StrictMode>,
)
