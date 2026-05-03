import { useState } from 'react';
import './FilterBar.css';

export default function FilterBar({ onCityChange }) {
  const [activeCity, setActiveCity] = useState('Abudhabi');

  const handleCityToggle = (city) => {
    setActiveCity(city);
    if (onCityChange) onCityChange(city);
  };

  return (
    <div className="filter-bar" id="filter-bar">
      <div className="filter-group">
        <div className="city-toggle">
          <button
            className={`city-btn ${activeCity === 'Abudhabi' ? 'active' : ''}`}
            onClick={() => handleCityToggle('Abudhabi')}
            id="city-btn-abudhabi"
          >
            Abudhabi
          </button>
          <button
            className={`city-btn ${activeCity === 'Dubai' ? 'active' : ''}`}
            onClick={() => handleCityToggle('Dubai')}
            id="city-btn-dubai"
          >
            Dubai
          </button>
        </div>
        <select className="dropdown-select" id="date-range-select">
          <option>Today</option>
          <option defaultValue>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>
      <div className="filter-group">
        <button className="action-btn" onClick={() => window.location.reload()} title="Refresh Data" id="refresh-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6"></path>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>
        <button className="export-btn" id="export-btn">Export</button>
      </div>
    </div>
  );
}
