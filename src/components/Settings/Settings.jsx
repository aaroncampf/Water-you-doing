// Settings.jsx
import React, { useState, useEffect } from 'react';
import ColorThemeDropdown from '../DropDown/ColorDropdown';
import ProfileForm from '../Forms/ProfileForm';
import styles from '../Dropdown/styles.module.css';

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = [
    { value: 'default', label: 'Default Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'light', label: 'Light Theme' },
  ];

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div>
      <h2>Settings Page</h2>
      <ProfileForm />
      <p>Select App Theme:</p>
      <ColorThemeDropdown themes={themes} selectedTheme={selectedTheme} onChange={handleThemeChange} />
    </div>
  );
};

export default Settings;
