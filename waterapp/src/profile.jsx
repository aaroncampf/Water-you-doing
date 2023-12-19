import React from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
  const userProfile = useSelector((state) => state.userProfile);
  return (
    <div>
      <h1>{userProfile.name}</h1>
      <p>Email: {userProfile.email}</p>
      <p>Bio: {userProfile.bio}</p>
    </div>
  );
};
export default Profile;