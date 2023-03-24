import React from 'react';
import './userCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <p className="user-email">{user.email}</p>
      <div className="user-address">
        <p>{user.address.street}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
