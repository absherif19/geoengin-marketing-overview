import { useRef, useEffect } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import './OverviewPage.css';

export default function OverviewPage({ city = 'Abudhabi' }) {
  const trendPathRef = useRef(null);
  const data = MOCK_DATA[city].overview;

  const animateTrendLine = () => {
    const path = trendPathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
    path.style.strokeDashoffset = '0';
  };

  useEffect(() => {
    animateTrendLine();
  }, [city]);

  const points = data.chartData.map((val, i) => [60 + i * 60, val]);

  return (
    <div id="page-overview">
      {/* Header */}
      <div className="overview-header">
        <h1 className="overview-title">Overview</h1>
        <div className="live-indicator">
          Updated: 5m ago <span className="live-dot">● LIVE</span>
        </div>
      </div>

      {/* Top Row */}
      <div className="top-row-grid">
        {/* PSI Market Index */}
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--deep-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            PSI Market Index – {city}
          </h3>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px', marginTop: '20px' }}>
            <span className="index-number" style={{ color: 'var(--success-text)' }}>{data.index}</span>
            <div>
              <span style={{ color: 'var(--success-text)', fontWeight: 800, fontSize: '18px' }}>{data.recommendation}</span><br />
              <span style={{ color: 'var(--success-text)', fontSize: '12px', fontWeight: 800 }}>↑ {data.trend}</span>
            </div>
          </div>
          <div className="gauge-track">
            <div className="segment seg-1"></div>
            <div className="segment seg-2"></div>
            <div className="segment seg-3"></div>
            <div className="segment seg-4"></div>
            <div className="gauge-marker" style={{ left: `${data.index}%` }}></div>
          </div>
          <div className="gauge-labels">
            <span>0-40 WAIT</span><span>40-60 SELECTIVE</span><span>60-80 BUY</span><span>80-100 STRONG BUY</span>
          </div>
        </div>

        {/* 24h Transactions */}
        <div className="card" style={{ marginBottom: 0 }}>
          <div className="stats-card-container">
            <div>
              <div className="stats-header">24h Transactions</div>
              <div className="stats-value">{data.transactions}</div>
              <div className="stats-trend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--success-text)' }}><polyline points="18 15 12 9 6 15"></polyline></svg>
                <span style={{ color: 'var(--success-text)' }}>Improving</span>
              </div>
            </div>
            <div>
              <hr className="stats-divider" />
              <div className="stats-footer">
                <span>Confidence</span>
                <span style={{ color: 'var(--deep-navy)' }}>High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Value */}
        <div className="card" style={{ marginBottom: 0 }}>
          <div className="stats-card-container">
            <div>
              <div className="stats-header">Sales Value (24h)</div>
              <div className="stats-value">{data.salesValue}</div>
              <div style={{ color: 'var(--subtext)', fontWeight: 700, fontSize: '14px' }}>AED</div>
            </div>
            <div>
              <hr className="stats-divider" />
              <div className="stats-footer">
                <span>Data Coverage</span>
                <span style={{ color: 'var(--text-main)' }}>{data.coverage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row-grid">
        {/* Transaction Trend Chart */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--deep-navy)' }}>Transaction Trend</h3>
            <button className="play-btn" onClick={animateTrendLine}>▶ Play</button>
          </div>
          <div className="chart-container">
            <svg className="chart-svg" viewBox="0 0 800 280">
              <line className="axis-line" x1="60" y1="20" x2="60" y2="230" />
              <g fontSize="12" fill="var(--subtext)" fontWeight="900" textAnchor="end">
                <line className="axis-line" x1="55" y1="60" x2="60" y2="60" />
                <text x="50" y="65">2024</text>
                <line className="axis-line" x1="55" y1="140" x2="60" y2="140" />
                <text x="50" y="145">2023</text>
                <line className="axis-line" x1="55" y1="220" x2="60" y2="220" />
                <text x="50" y="225">0</text>
              </g>
              <line className="grid-line" x1="60" y1="60" x2="780" y2="60" />
              <line className="grid-line" x1="60" y1="140" x2="780" y2="140" />
              <path ref={trendPathRef} className="trend-line" d={`M${points.map(p => p.join(',')).join(' L')}`} style={{ stroke: 'var(--deep-navy)' }} />
              <g fill="var(--deep-navy)">
                {points.map(([cx,cy], i) => (
                  <circle key={i} className="chart-point" cx={cx} cy={cy} r="5" />
                ))}
              </g>
              <g fontSize="11" fill="var(--subtext)" fontWeight="700">
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                  <text key={m} x={60 + i * 60} y="260" textAnchor="middle">{m}</text>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* 4 Key Market Signals */}
        <div className="card signals-card-layout">
          <h3 style={{ margin: '0 0 24px 0', fontSize: '16px', color: 'var(--deep-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>4 Key Market Signals</h3>
          <div className="signals-grid">
            <div className="signal-item">
              <div className="signal-label">Activity</div>
              <div className="signal-value" style={{ color: 'var(--success-text)' }}>{data.signals.activity}</div>
            </div>
            <div className="signal-item">
              <div className="signal-label">Price</div>
              <div className="signal-value" style={{ color: 'var(--deep-navy)' }}>{data.signals.price}</div>
            </div>
            <div className="signal-item">
              <div className="signal-label">Demand</div>
              <div className="signal-value" style={{ color: 'var(--success-text)' }}>{data.signals.demand}</div>
            </div>
            <div className="signal-item">
              <div className="signal-label">Global</div>
              <div className="signal-value" style={{ color: 'var(--success-text)' }}>{data.signals.global}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Outlook */}
      <div className="card">
        <div className="outlook-container">
          <h2 className="outlook-title">Market Outlook</h2>
          <p className="outlook-desc">
            {data.outlook}
          </p>
          <div className="outlook-grid">
            <div className="outlook-card">
              <div className="term">Short Term</div>
              <div className="duration">1–3 Months</div>
              <div className="status">Very Positive</div>
            </div>
            <div className="outlook-card">
              <div className="term">Mid Term</div>
              <div className="duration">3–6 Months</div>
              <div className="status">Very Positive</div>
            </div>
            <div className="outlook-card">
              <div className="term">Long Term</div>
              <div className="duration">6–12 Months</div>
              <div className="status">Positive</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="footer-info">
        <div className="source-group">
          <div>
            <div className="info-label">Data Sources</div>
            <div className="source-pills">
              <div className="source-pill">DLD</div>
              <div className="source-pill">Bayut</div>
              <div className="source-pill">Property Finder</div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div>
            <div className="info-label">Last Updated</div>
            <div className="update-val">5 minutes ago</div>
          </div>
        </div>
        <div className="disclaimer">
          PSI is a computed indicator, not financial advice
        </div>
      </div>
    </div>
  );
}
