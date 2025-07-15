import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DestinationCard({ destination, onDelete }) {
  return (
    <Card>
      <Card.Img variant="top" src={destination.image} height="180px" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{destination.name} - {destination.location}</Card.Title>
        <Card.Text>{destination.description}</Card.Text>
        <Button variant="danger" onClick={() => onDelete(destination.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;