import React, { useState, useEffect } from 'react';
import { useReminderContext } from '../ReminderContext';
import ColorThemeDropdown from '../DropDown/ColorDropdown';
import ProfileForm from '../Forms/ProfileForm';
import styles from '../Dropdown/styles.module.css';

const Settings = () => {
  const { reminderInterval, setReminderInterval } = useReminderContext();
  const [selectedTheme, setSelectedTheme] = useState('default'); // Add this line

  const themes = [
    { value: 'default', label: 'Default Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'light', label: 'Light Theme' },
  ];

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleIntervalChange = (event) => {
    setReminderInterval(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        console.log('Notification permission:', permission);
      });
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme, reminderInterval]);

  return (
    <div>
      <h2>Settings Page</h2>
      <ProfileForm />
      <p>Select App Theme:</p>
      <ColorThemeDropdown themes={themes} selectedTheme={selectedTheme} onChange={handleThemeChange} />

      <p>Select Reminder Interval:</p>
      <select value={reminderInterval} onChange={handleIntervalChange}>
        <option value={1}>1 minute</option>
        <option value={30}>30 minutes</option>
        <option value={60}>1 hour</option>
      </select>
    </div>
  );
};

export default Settings;
