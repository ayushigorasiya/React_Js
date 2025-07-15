import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddDestination from './components/AddDestination';
import DestinationList from './components/DestinationList';
import Login from './components/Login';
import TravelPlan from './components/TravelPlan';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<DestinationList />} />
        <Route path="/add" element={<AddDestination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<TravelPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;