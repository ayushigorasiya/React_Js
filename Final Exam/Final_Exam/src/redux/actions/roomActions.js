import axios from 'axios';

export const ROOMS_REQUEST = 'ROOMS_REQUEST';
export const ROOMS_SUCCESS = 'ROOMS_SUCCESS';
export const ROOMS_FAILURE = 'ROOMS_FAILURE';

export const roomsLoading = () => ({ type: ROOMS_REQUEST });
export const roomsFetched = (rooms) => ({ type: ROOMS_SUCCESS, payload: rooms });
export const roomsFetchError = (error) => ({ type: ROOMS_FAILURE, payload: error });

export const fetchRooms = () => {
  return (dispatch) => {
    dispatch(roomsLoading());
    axios.get('http://localhost:3001/rooms')
      .then(res => dispatch(roomsFetched(res.data)))
      .catch(err => dispatch(roomsFetchError(err.message)));
  };
};