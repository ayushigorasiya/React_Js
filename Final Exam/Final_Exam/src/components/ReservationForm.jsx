import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../redux/actions/reservationActions';
import { Form, Button, Container } from 'react-bootstrap';

function ReservationForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    roomId: '',
    guestName: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(form));
    alert('Reservation Successful');
    setForm({ roomId: '', guestName: '', checkIn: '', checkOut: '' });
  };

  return (
    <Container className="mt-4">
      <h3>Make a Reservation</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Room ID</Form.Label>
          <Form.Control
            type="number"
            name="roomId"
            value={form.roomId}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Guest Name</Form.Label>
          <Form.Control
            type="text"
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check-In Date</Form.Label>
          <Form.Control
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check-Out Date</Form.Label>
          <Form.Control
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Reserve</Button>
      </Form>
    </Container>
  );
}

export default ReservationForm;
