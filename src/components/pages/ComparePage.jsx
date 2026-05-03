import ReactECharts from 'echarts-for-react';
import { MOCK_DATA } from '../../data/mockData';
import './ComparePage.css';

export default function ComparePage({ city = 'Abudhabi' }) {
  const data = MOCK_DATA[city].compare;

  const option = {
    grid: { left: 40, right: 20, top: 20, bottom: 40 },
    xAxis: {
      type: 'category',
      data: data.barData.map((_, i) => i + 1),
      axisLine: { lineStyle: { color: '#E7EAE9' } },
      axisLabel: { color: '#848A92', fontSize: 10, fontWeight: 700 }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: '#848A92', fontSize: 10, fontWeight: 700 },
      splitLine: { lineStyle: { type: 'dashed', color: '#E7EAE9' } }
    },
    series: [
      {
        name: 'Period A',
        type: 'bar',
        data: data.barData.map(d => d.a),
        barWidth: 15,
        barGap: '20%',
        itemStyle: { color: '#E0592A', borderRadius: [4, 4, 0, 0] }
      },
      {
        name: 'Period B',
        type: 'bar',
        data: data.barData.map(d => d.b),
        barWidth: 15,
        itemStyle: { color: '#2C2D65', borderRadius: [4, 4, 0, 0] }
      }
    ],
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } }
  };

  return (
    <div id="page-compare">
      {/* Period Selectors */}
      <h3 style={{ margin: '0 0 20px', fontSize: '20px', fontWeight: 900 }}>Market Comparison — {city}</h3>
      <div className="compare-grid-2">
        <div className="compare-panel">
          <h5><span style={{ color: 'var(--primary)' }}>●</span> Period A (Comparison)</h5>
          <div className="date-range-group">
            <div className="date-input-wrapper">
              <label>Start</label>
              <input type="date" defaultValue="2026-04-01" className="compare-input" />
            </div>
            <div className="date-separator">→</div>
            <div className="date-input-wrapper">
              <label>End</label>
              <input type="date" defaultValue="2026-04-30" className="compare-input" />
            </div>
          </div>
        </div>
        <div className="compare-panel">
          <h5><span style={{ color: 'var(--deep-navy)' }}>●</span> Period B (Baseline)</h5>
          <div className="date-range-group">
            <div className="date-input-wrapper">
              <label>Start</label>
              <input type="date" defaultValue="2026-03-02" className="compare-input" />
            </div>
            <div className="date-separator">→</div>
            <div className="date-input-wrapper">
              <label>End</label>
              <input type="date" defaultValue="2026-03-31" className="compare-input" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Comparison */}
      <div className="compare-kpi-grid">
        {data.kpi.map(kpi => (
          <div className="card compare-kpi" key={kpi.label}>
            <small>{kpi.label}</small>
            <div className="compare-kpi-value">{kpi.valueA} → {kpi.valueB}</div>
            <div className={kpi.positive ? 'compare-change-positive' : 'compare-change-negative'}>
              {kpi.positive ? '↗' : '↘'} {kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* Day-by-Day Chart */}
      <div className="card">
        <h4 style={{ margin: '0 0 20px' }}>Day-by-Day Comparison in {city}</h4>
        <div style={{ height: '300px' }}>
          <ReactECharts option={option} style={{ height: '100%' }} />
        </div>
        <div className="compare-legend">
          <div><span style={{ color: 'var(--primary)' }}>●</span> Period A</div>
          <div><span style={{ color: 'var(--deep-navy)' }}>●</span> Period B</div>
        </div>
      </div>
    </div>
  );
}
