import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FilterBar from './components/FilterBar';
import OverviewPage from './components/pages/OverviewPage';
import MapAreasPage from './components/pages/MapAreasPage';
import TrendsPage from './components/pages/TrendsPage';
import SignalsPage from './components/pages/SignalsPage';
import ReportsPage from './components/pages/ReportsPage';
import ComparePage from './components/pages/ComparePage';
import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('Abudhabi');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={`dashboard-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Mobile Header */}
        <div className="mobile-header">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <img
            src="https://res.cloudinary.com/dfejvtpzr/image/upload/v1777294008/Psi_Logo_blue_hujns2.svg"
            alt="PSI"
            className="h-6 w-auto"
          />
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="main-content">
          <FilterBar onCityChange={setCity} />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage city={city} />} />
              <Route path="/map-areas" element={<MapAreasPage city={city} />} />
              <Route path="/trends" element={<TrendsPage city={city} />} />
              <Route path="/signals" element={<SignalsPage city={city} />} />
              <Route path="/reports" element={<ReportsPage city={city} />} />
              <Route path="/compare" element={<ComparePage city={city} />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
