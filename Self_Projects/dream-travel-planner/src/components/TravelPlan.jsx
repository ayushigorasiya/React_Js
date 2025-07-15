import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';

function TravelPlan() {
  const { data } = useSelector(state => state.destinations);

  return (
    <Container className="mt-4">
      <h3>Your Travel Plan</h3>
      <ListGroup>
        {data.map(dest => (
          <ListGroup.Item key={dest.id}>
            {dest.name} in {dest.location}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TravelPlan;
