import { MOCK_DATA } from '../../data/mockData';
import './SignalsPage.css';

const SIGNAL_DEFS = [
  { icon: '📈', label: 'Market Activity', color: '#E0592A', bgColor: '#FFF7EC', sources: 'Sources: Bayut, PropertyFinder, DLD' },
  { icon: '⏱️', label: 'Price Pressure', color: '#2C2D65', bgColor: '#F5F7F9', sources: 'Sources: Bayut, PropertyFinder' },
  { icon: '👤', label: 'Demand Pulse', color: '#079455', bgColor: '#DFF6EB', sources: 'Sources: Bayut, PropertyFinder' },
  { icon: '🌍', label: 'Global Context', color: '#4B5563', bgColor: '#F3F4F6', sources: 'Sources: Macroeconomic Indices' },
];

export default function SignalsPage({ city = 'Abudhabi' }) {
  const meta = MOCK_DATA[city];
  const signalsData = meta.signals;
  const outlook = meta.overview.outlook;

  return (
    <div id="page-signals">
      {/* Instructional Banner */}
      <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl mb-8 flex gap-4 items-start relative group transition-all hover:bg-primary/10">
        <span className="text-2xl">💡🎯</span>
        <div className="flex-1">
          <h4 className="m-0 text-sm font-black text-primary uppercase tracking-widest mb-1">What the signals mean</h4>
          <p className="text-deep-navy text-[13px] font-medium leading-relaxed opacity-80">Each signal is scored 0–100. Market Activity tracks deal volumes. Demand Pulse measures search interest. Price Pressure compares current vs. historical pricing. Global Context reflects macro conditions like oil prices and interest rates.</p>
        </div>
        <div className="text-primary font-black text-xs self-center">▼</div>
      </div>

      {/* Signal Cards Grid */}
      <div className="signals-main-grid">
        {SIGNAL_DEFS.map((def, i) => {
          const sig = signalsData[i];
          return (
            <div className="card" key={def.label}>
              <div className="signal-card">
                <div className="signal-icon-box" style={{ background: def.bgColor, color: def.color }}>{def.icon}</div>
                <div className="signal-main">
                  <div className="signal-header">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--deep-navy)' }}>{def.label}</h3>
                        <span style={{ cursor: 'pointer', color: 'var(--subtext)' }}>ⓘ</span>
                      </div>
                      <p style={{ margin: '8px 0', fontSize: '14px', color: 'var(--subtext)', maxWidth: '600px' }}>{sig.desc}</p>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--subtext)' }}>{def.sources}</div>
                    </div>
                    <div className="signal-score-group">
                      <div className="signal-score-num" style={{ color: def.color }}>{sig.score}</div>
                      <div className="signal-status-label" style={{ color: def.color }}>{sig.status}</div>
                    </div>
                  </div>
                  <div className="signal-progress-container">
                    <div className="signal-progress-bar">
                      <div className="signal-progress-fill" style={{ width: `${sig.score}%`, background: def.color }}></div>
                    </div>
                    <div className="signal-axis">
                      <span>0 · Very Weak</span>
                      <span>50 · Neutral</span>
                      <span>100 · Very Strong</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Market Outlook */}
      <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--deep-navy)' }}>Market Outlook</h3>
      <div className="signals-outlook-grid">
        <div className="outlook-content">
          <div className="outlook-quote">
            "{outlook}"
          </div>
          <div className="horizon-grid">
            <div className="horizon-item">
              <span>✅ Short Term (1–3 Months)</span>
              <span style={{ color: 'var(--success-text)', fontSize: '15px' }}>Very Positive</span>
            </div>
            <div className="horizon-item">
              <span>✅ Mid Term (3–6 Months)</span>
              <span style={{ color: 'var(--success-text)', fontSize: '15px' }}>Very Positive</span>
            </div>
            <div className="horizon-item">
              <span>✅ Long Term (6–12 Months)</span>
              <span style={{ color: 'var(--success-text)', fontSize: '15px' }}>Positive</span>
            </div>
          </div>
          <p style={{ marginTop: 'auto', fontSize: '11px', color: 'var(--subtext)', fontStyle: 'italic', fontWeight: 600 }}>
            * Our outlook is derived from supply-demand algorithmic parsing, macroeconomic shift tracking, and local sentiment weighting for {city}.
          </p>
        </div>
        <div className="outlook-image">
          <img 
            src={city === 'Dubai' ? 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80' : 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'} 
            alt={city} 
            className="city-preview-img" 
          />
        </div>
      </div>
    </div>
  );
}
