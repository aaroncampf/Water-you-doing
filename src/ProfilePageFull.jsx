import React from 'react';
import './FullProfile.css'

const ProfilePageFull = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>User Name</h1>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>This is the about me section.</p>
      </div>
    </div>
  );
};

export default ProfilePageFull;