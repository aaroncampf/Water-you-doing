import React, { useState, useEffect } from 'react';
import { useReminderContext } from '../ReminderContext';
import ColorThemeDropdown from '../DropDown/ColorDropdown';
import ProfileForm from '../Forms/ProfileForm';
import styles from '../styles.module.css';


const Settings = ({ onGlobalThemeChange }) => {
  const { reminderInterval, setReminderInterval } = useReminderContext();
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [waterGoal, setWaterGoal] = useState(8);
  
  const themes = [
    { value: 'default', label: 'Default Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'light', label: 'Light Theme' },
  ];

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    onGlobalThemeChange(newTheme);
  };

  const handleIntervalChange = (event) => {
    setReminderInterval(parseInt(event.target.value, 10));
  };

  const handleWaterGoalChange = (event) => {
    setWaterGoal(parseInt(event.target.value, 10));
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
      <h2>Settings</h2>
      <br />
      <ProfileForm />
      <br />
      <p>Select Daily Water Goal:</p>
      <select className={styles.dropdown} value={waterGoal} onChange={handleWaterGoalChange}>
        {[...Array(8).keys()].map((i) => (
           <option key={i + 1} value={(i + 1) * 8}>
           {(i + 1) * 8} ounces
          </option>
        ))}
      </select>
      <br />
      <p>Select App Theme:</p>
      <ColorThemeDropdown themes={themes} selectedTheme={selectedTheme} onChange={handleThemeChange} />
      <br />
      <p>Select Reminder Interval:</p>
      <select className={styles.dropdown} value={reminderInterval} onChange={handleIntervalChange}>
        <option value={1}>1 minute</option>
        <option value={30}>30 minutes</option>
        <option value={60}>1 hour</option>
      </select>
    </div>
  );
};

export default Settings;
