// Settings.jsx
import React, { useState } from 'react';
import ColorThemeDropdown from '../DropDown/DropDown'; 

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = [
    { value: 'default', label: 'Default Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'light', label: 'Light Theme' },
  ];

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    // You can add logic here to apply the selected theme to your app
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Select App Theme:</p>
      <ColorThemeDropdown themes={themes} selectedTheme={selectedTheme} onChange={handleThemeChange} />
    </div>
  );
};

export default Settings;
