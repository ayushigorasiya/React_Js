import 'bootstrap/dist/css/bootstrap.min.css';
import './CardekhoHome.css';
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#">
          <img src="https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg" alt="CarDekho" height="50" className="me-2" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">New Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Used Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell Car</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News & Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">More</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger ms-3">Login/Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
