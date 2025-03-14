import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-info">
        <div className="info-group">
          <label>Name:</label>
          <p>{user?.name}</p>
        </div>
        <div className="info-group">
          <label>Email:</label>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;