import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/actions/roomActions';
import RoomDetails from './RoomDetails';

const RoomList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <div className="alert alert-info">Loading rooms...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Rooms</h2>
      <div className="row">
        {data.map(room => (
          <div className="col-md-4" key={room.id}>
            <RoomDetails room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RoomList;