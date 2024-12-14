import React from 'react';
import '../styles/UserCard.css'; // Import styles specific to the component

const UserCard = ({ user }) => {
  if (!user) return <p>No user data available.</p>;

  return (
    <div className="user-card">
      <h1 className="user-card__title">User Information</h1>
      <div className="user-card__content">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    </div>
  );
};

export default UserCard;
