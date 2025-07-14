import React from 'react';

const RoomDetails = ({ room }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{room.type}</h5>
      <p className="card-text">Features: {room.features.join(', ')}</p>
      <p className={`badge ${room.available ? 'bg-success' : 'bg-danger'}`}>{room.available ? 'Available' : 'Booked'}</p>
    </div>
  </div>
);
export default RoomDetails;