import React, { useState } from 'react';
import './CardekhoHome.css';

export default function HeroBanner() {
  const [carType, setCarType] = useState('new');
  const [budget, setBudget] = useState('');
  const [brand, setBrand] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSearch = () => {
    alert(`Searching for ${carType === 'new' ? 'New' : 'Used'} cars\nBrand: ${brand || 'Any'}\nBudget: ${budget || 'Any'}\nType: ${vehicleType || 'Any'}`);
  };

  return (
    
    <section className="banner-section">
      <div className="banner-overlay">
        <h1 className="banner-title">Find Your Right Car</h1>

        <div className="toggle-buttons">
          <button
            className={carType === 'new' ? 'active' : ''}
            onClick={() => setCarType('new')}
          >
            New Car
          </button>
          <button
            className={carType === 'used' ? 'active' : ''}
            onClick={() => setCarType('used')}
          >
            Used Car
          </button>
        </div>

        <div className="banner-filters">
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">By Budget</option>
            <option>Under ₹5 Lakh</option>
            <option>₹5 - ₹10 Lakh</option>
            <option>₹10 - ₹20 Lakh</option>
            <option>Above ₹20 Lakh</option>
          </select>

          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">By Brand</option>
            <option>Maruti</option>
            <option>Hyundai</option>
            <option>Tata</option>
            <option>Kia</option>
          </select>

          <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="">All Vehicle Types</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>MUV</option>
          </select>
        </div>

        <div className="banner-actions">
          <button className="search-btn" onClick={handleSearch}>Search</button>
          <button className="advanced-btn" onClick={() => alert('Advanced Search coming soon!')}>Advanced Search</button>
        </div>
      </div>
    </section>
  );
}

