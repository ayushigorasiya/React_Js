import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/actions/roomActions';
import { Link } from 'react-router-dom';
import { Spinner, Card, Button, Container, Row, Col } from 'react-bootstrap';

function RoomList() {
  const dispatch = useDispatch();
  const { loading, data: rooms, error } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" variant="primary" className="m-4" />;
  if (error) return <p className="text-danger">Error loading rooms</p>;

  return (
    <Container className="mt-4">
      <h2>Available Rooms</h2>
      <Row>
        {rooms.map(room => (
          <Col key={room.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{room.name} ({room.type})</Card.Title>
                <Card.Text>
                  Features: {Array.isArray(room.features) ? room.features.join(', ') : room.features}<br />
                  Available: {room.available ? 'Yes' : 'No'}<br />
                  Price: ₹{room.price}
                </Card.Text>
                <Link to={`/room/${room.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RoomList;
