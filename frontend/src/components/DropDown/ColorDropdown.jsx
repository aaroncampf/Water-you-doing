// ColorThemeDropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../DropDown/dropdown.module.css';

const ColorThemeDropdown = ({ themes, selectedTheme, onChange }) => {
  return (
    <select value={selectedTheme} onChange={onChange}>
      {themes.map((theme) => (
        <option key={theme.value} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </select>
  );
};

ColorThemeDropdown.propTypes = {
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedTheme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorThemeDropdown; 
