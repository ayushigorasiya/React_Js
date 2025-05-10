import React from "react";

function HeroBanner() {
  return (
    <section className="position-relative overflow-hidden bg-light" style={{ minHeight: 350 }}>
      {/* Banner background image */}
      <img
        src="https://stimg.cardekho.com/pwa/img/home_banner_v6_desktop.webp"
        alt="Find the right car"
        className="hero-banner-img"
      />
      {/* Overlay content */}
      <div className="hero-banner-overlay">
        <h1>Find the right car</h1>
        <p>Search from 1000+ new & used cars, compare, and get the best price!</p>
      </div>
    </section>
  );
}

export default HeroBanner;
