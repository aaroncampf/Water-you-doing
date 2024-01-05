import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import { ReminderProvider } from './components/ReminderContext';

const App = () => {
  return (
    <Router>
      <ReminderProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ReminderProvider>
    </Router>
  );
};

export default App;