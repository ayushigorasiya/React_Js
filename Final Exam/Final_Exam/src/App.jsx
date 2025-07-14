import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList';
import RoomDetails from './components/RoomDetails';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import NavigationBar from './components/NavigationBar'; // Make sure to use the correct Navbar
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<RoomList />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/reserve" element={<ReservationForm />} />
          <Route path="/reservations" element={<ReservationList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
