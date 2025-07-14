import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

function RoomDetails() {
  const { id } = useParams();
  const room = useSelector(state => state.rooms.data.find(r => r.id === parseInt(id)));

  if (!room) return <p>Room not found.</p>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{room.name} ({room.type})</Card.Title>
          <Card.Text>
            Features: {Array.isArray(room.features) ? room.features.join(', ') : room.features}<br />
            Available: {room.available ? 'Yes' : 'No'}<br />
            Price: ₹{room.price}<br />
            Description: {room.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RoomDetails;
