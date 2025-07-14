import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, updateReservation, cancelReservation } from '../redux/actions/reservationActions';
import { Container, Table, Button } from 'react-bootstrap';

function ReservationList() {
  const dispatch = useDispatch();
  const { loading, data: reservations, error } = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <Container className="mt-4">
      <h3>All Reservations</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading reservations.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Room ID</th>
              <th>Guest Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(res => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.roomId}</td>
                <td>{res.guestName}</td>
                <td>{res.checkIn}</td>
                <td>{res.checkOut}</td>
                <td>
                  <Button variant="danger" onClick={() => handleCancel(res.id)}>
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default ReservationList;