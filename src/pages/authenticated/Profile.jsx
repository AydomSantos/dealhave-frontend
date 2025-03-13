import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2>Welcome, {user?.name}</h2>
        {/* Add your profile content here */}
      </div>
    </div>
  );
};

export default Profile;