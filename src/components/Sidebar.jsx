import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const SUB_TABS = [
  { path: '/overview', label: 'Overview' },
  { path: '/map-areas', label: 'Map & Areas' },
  { path: '/trends', label: 'Trends' },
  { path: '/signals', label: 'Signals' },
  { path: '/reports', label: 'Reports' },
  { path: '/compare', label: 'Compare' },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const isMarketActive = SUB_TABS.some(t => location.pathname === t.path) || location.pathname === '/';

  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      onClose();
    }
  };

  return (
    <nav className="sidebar" id="sidebar-nav">
      <img
        src="https://res.cloudinary.com/dfejvtpzr/image/upload/v1777294008/Psi_Logo_blue_hujns2.svg"
        alt="PSI"
        className="sidebar-logo"
      />

      <div className="nav-group">
        {/* Market Overview — always expanded */}
        <div className={`nav-item ${isMarketActive ? 'active' : ''}`}>
          Market Overview
          <span className="nav-chevron expanded">▼</span>
        </div>

        <div className="sub-menu open">
          {SUB_TABS.map(tab => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `sub-item ${isActive || (tab.path === '/overview' && location.pathname === '/') ? 'active' : ''}`
              }
              id={`nav-${tab.path.slice(1)}`}
              onClick={handleLinkClick}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        {/* Coming Soon sections */}
        <div className="nav-item-new">
          <span className="nav-label">City Insights</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Investment Signals</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Property Explorer</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Watchlist</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Portfolio</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Reports</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-label">Alerts</span>
          <span className="soon-tag">Soon</span>
        </div>

        <div className="nav-item-new assistant-item">
          <span className="nav-label">PSI Assistant</span>
          <span className="ai-tag">AI</span>
        </div>
      </div>
    </nav>
  );
}
