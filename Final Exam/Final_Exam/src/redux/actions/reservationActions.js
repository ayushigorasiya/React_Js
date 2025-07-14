import axios from 'axios';
export const fetchReservations = () => async dispatch => {
  dispatch({ type: 'RES_LOADING' });
  try {
    const res = await axios.get('http://localhost:8000/reservations');
    dispatch({ type: 'RES_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'RES_ERROR', error: err });
  }
};

export const makeReservation = (reservation) => async dispatch => {
  const res = await axios.post('http://localhost:8000/reservations', reservation);
  dispatch({ type: 'ADD_RESERVATION', payload: res.data });
};

export const updateReservation = (id, data) => async dispatch => {
  const res = await axios.put(`http://localhost:8000/reservations/${id}`, data);
  dispatch({ type: 'UPDATE_RESERVATION', payload: res.data });
};

export const cancelReservation = (id) => async dispatch => {
  await axios.delete(`http://localhost:8000/reservations/${id}`);
  dispatch({ type: 'DELETE_RESERVATION', payload: id });
};
