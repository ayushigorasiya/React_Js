import axios from 'axios';
export const fetchRooms = () => async dispatch => {
  dispatch({ type: 'ROOMS_LOADING' });
  try {
    const res = await axios.get('http://localhost:8000/rooms');
    dispatch({ type: 'ROOMS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'ROOMS_ERROR', error: err });
  }
};