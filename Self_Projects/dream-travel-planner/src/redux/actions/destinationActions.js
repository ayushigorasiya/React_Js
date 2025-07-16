// redux/actions/destinationActions.js
import axios from 'axios';
const API = 'http://localhost:8080/destinations';

export const fetchDestinations = () => async dispatch => {
  dispatch({ type: 'DESTINATIONS_LOADING' });
  try {
    const res = await axios.get(API);
    dispatch({ type: 'DESTINATIONS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'DESTINATIONS_ERROR', error: err.message });
  }
};

export const addDestination = (destination) => async dispatch => {
  try {
    const res = await axios.post(API, destination);
    dispatch({ type: 'ADD_DESTINATION', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteDestination = (id) => async dispatch => {
  try {
    await axios.delete(`${API}/${id}`);
    dispatch({ type: 'DELETE_DESTINATION', payload: id });
  } catch (err) {
    console.error(err);
  }
};
