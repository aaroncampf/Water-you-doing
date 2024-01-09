// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"; 

const NavBar = () => {
  const [responsive, setResponsive] = useState(false);

  const handleToggle = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={`${styles.topnav} ${responsive ? styles.responsive : ''}`}>
      <Link to="/" className={styles.active}>Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <a href="javascript:void(0);" className={styles.icon} onClick={handleToggle}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default NavBar;
