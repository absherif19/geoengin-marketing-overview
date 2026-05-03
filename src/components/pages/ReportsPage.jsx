import { MOCK_DATA } from '../../data/mockData';
import './ReportsPage.css';

export default function ReportsPage({ city = 'Abudhabi' }) {
  const data = MOCK_DATA[city].reports;

  return (
    <div id="page-reports">
      {/* Report Summary */}
      <div className="card">
        <h3 style={{ margin: 0 }}>Report Summary — {city}</h3>
        <div className="grid-4 report-summary-grid">
          <div>
            <small>PSI INDEX</small>
            <h3>{data.index}</h3>
          </div>
          <div>
            <small>RECOMMENDATION</small>
            <h3 style={{ color: 'var(--success-text)' }}>{data.recommendation}</h3>
          </div>
          <div>
            <small>AREAS TRACKED</small>
            <h3>{data.areas}</h3>
          </div>
          <div>
            <small>DAYS OF DATA</small>
            <h3>{data.days}</h3>
          </div>
        </div>
      </div>

      {/* Download Cards */}
      <div className="grid-3">
        <div className="card report-card">
          <h4>Full Market Report</h4>
          <p>All signals and daily trends for {city}</p>
          <button className="download-btn">⬇ Download CSV</button>
        </div>
        <div className="card report-card">
          <h4>Area Intelligence</h4>
          <p>Per-area metrics within {city}</p>
          <button className="download-btn">⬇ Download CSV</button>
        </div>
        <div className="card report-card">
          <h4>Trends Data</h4>
          <p>Transaction history for {city}</p>
          <button className="download-btn">⬇ Download CSV</button>
        </div>
      </div>
    </div>
  );
}
