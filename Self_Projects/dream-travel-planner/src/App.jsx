// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddDestination from './components/AddDestination';
import DestinationList from './components/DestinationList';
import Login from './components/Login';
import TravelPlan from './components/TravelPlan';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/destinations" />} />
        <Route path="/destinations" element={<DestinationList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={isAuth ? <TravelPlan /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuth ? <AddDestination /> : <Navigate to="/login" />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
