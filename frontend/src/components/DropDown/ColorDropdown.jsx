import React from 'react';
import styles from '../styles.module.css';

const ColorThemeDropdown = ({ themes, selectedTheme, onChange }) => {
  const themeClass = selectedTheme.toLowerCase();

  return (
    <select className={`${styles.dropdown} ${styles[themeClass]}`} value={selectedTheme} onChange={onChange}>
      {themes.map((theme) => (
        <option key={theme.value} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </select>
  );
};

export default ColorThemeDropdown;