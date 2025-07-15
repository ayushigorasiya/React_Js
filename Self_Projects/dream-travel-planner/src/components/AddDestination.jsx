import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDestination } from '../redux/actions/destinationActions';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function AddDestination() {
  const [form, setForm] = useState({
    name: '',
    location: '',
    description: '',
    image: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDestination(form));
    navigate('/destinations');
  };

  return (
    <Container className="mt-4">
      <h3>Add Dream Destination</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" value={form.location} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" value={form.description} onChange={handleChange} required as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="image" value={form.image} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="success">Add Destination</Button>
      </Form>
    </Container>
  );
}

export default AddDestination;