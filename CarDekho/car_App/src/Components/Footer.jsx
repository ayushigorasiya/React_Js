import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <img src="https://stimg.cardekho.com/pwa/img/logos/desktop_white.svg" alt="CarDekho Logo" style={{height:35}} className="mb-2" />
            <p className="small text-white-50 mb-0">India's #1 auto portal for Cars. Best prices, reviews and info.</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase fw-bold">Cars</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">New Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Used Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Upcoming Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Sell Car</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase fw-bold">Research</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">Compare Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Car Dealers</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Car Loan</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">EMI Calculator</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase fw-bold">About</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold">Connect</h6>
            <div className="mb-2">
              <a href="#" className="text-white-50 me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50 me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white-50 me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-youtube"></i></a>
            </div>
            <div className="small text-white-50">Download App</div>
            <img src="https://stimg.cardekho.com/pwa/img/app_store.png" alt="App Store" style={{height:30}} className="me-2" />
            <img src="https://stimg.cardekho.com/pwa/img/google_play.png" alt="Google Play" style={{height:30}} />
          </div>
        </div>
        <hr className="border-white-50 mb-3 mt-0" />
        <div className="text-center small text-white-50">
          © {new Date().getFullYear()} CarDekho.com • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
