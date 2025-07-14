import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Hotel System</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Rooms</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/reserve">Reserve</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/reservations">My Reservations</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;