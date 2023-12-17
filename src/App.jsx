// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import RegisterUser from './components/RegisterUser/RegisterUser';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
