// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


const NavBar = () => {
  return (
    <div className={styles['navbar-container']}>
      <Link to="/">
        <h1 style={{ color: 'white' }}>Your Logo</h1>
      </Link>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <Link to="/" className={styles['nav-link']}>
            Home
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/analytics" className={styles['nav-link']}>
            Analytics
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/settings" className={styles['nav-link']}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
