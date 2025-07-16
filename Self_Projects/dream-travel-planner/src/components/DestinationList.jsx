import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, deleteDestination } from '../redux/actions/destinationActions';
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

function DestinationList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.destinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" className="m-4" />;
  if (error) return <p className="text-danger">Error loading destinations</p>;

  return (
    <Container className="mt-4">
      <h3>Dream Travel Destinations</h3>
      <Row>
        {data.map(dest => (
          <Col md={4} className="mb-4" key={dest.id}>
            <Card>
              <Card.Img variant="top" src={dest.image} height="180px" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{dest.name} - {dest.location}</Card.Title>
                <Card.Text>{dest.description}</Card.Text>
                <Button variant="danger" onClick={() => dispatch(deleteDestination(dest.id))}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DestinationList;
