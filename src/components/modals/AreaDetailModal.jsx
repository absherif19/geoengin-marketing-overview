import React from 'react';
import ReactECharts from 'echarts-for-react';

const AreaDetailModal = ({ isOpen, onClose, areaData }) => {
  if (!isOpen || !areaData) return null;

  const option = {
    grid: { left: 40, right: 20, top: 20, bottom: 40 },
    xAxis: {
      type: 'category',
      data: areaData.trendData.dates,
      axisLine: { lineStyle: { color: '#E7EAE9' } },
      axisLabel: { color: '#848A92', fontSize: 10, fontWeight: 700 }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLine: { show: false },
      axisLabel: { color: '#848A92', fontSize: 10, fontWeight: 700 },
      splitLine: { lineStyle: { type: 'dashed', color: '#E7EAE9' } }
    },
    series: [{
      data: areaData.trendData.values,
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: { width: 3, color: '#079455' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(7, 148, 85, 0.2)' },
            { offset: 1, color: 'rgba(7, 148, 85, 0)' }
          ]
        }
      }
    }]
  };

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-deep-navy/40 backdrop-blur-md" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-[calc(100%-32px)] max-w-[750px] rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-stroke">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <h2 className="text-[24px] font-black text-deep-navy m-0">{areaData.name}</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-stroke text-subtext hover:bg-surface transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <span className="bg-surface px-2.5 py-0.5 rounded-md text-[10px] font-black text-subtext uppercase">{areaData.city}</span>
            <span className="bg-success-bg text-success-text px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tight">
              {areaData.signal}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[24px] font-black text-deep-navy">{areaData.score}</span>
              <span className="text-[12px] font-black text-success-text flex items-center gap-1">
                ↗ {areaData.change}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Top Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-surface/50 border border-stroke rounded-xl p-4 text-center">
              <div className="text-[9px] font-black text-subtext uppercase tracking-widest mb-1.5">Avg Price / Sqft</div>
              <div className="text-[16px] font-black text-deep-navy">AED {areaData.price}</div>
            </div>
            <div className="bg-surface/50 border border-stroke rounded-xl p-4 text-center">
              <div className="text-[9px] font-black text-subtext uppercase tracking-widest mb-1.5">Demand Score</div>
              <div className="text-[16px] font-black text-deep-navy">{areaData.demand}</div>
            </div>
            <div className="bg-surface/50 border border-stroke rounded-xl p-4 text-center">
              <div className="text-[9px] font-black text-subtext uppercase tracking-widest mb-1.5">Activity Score</div>
              <div className="text-[16px] font-black text-deep-navy">{areaData.activity}</div>
            </div>
          </div>

          {/* Trend Chart */}
          <div className="border border-stroke rounded-xl p-4">
            <div className="text-[10px] font-black text-deep-navy uppercase tracking-widest mb-4 px-1">30-Day PSI Trend</div>
            <div className="h-[160px]">
              <ReactECharts option={option} style={{ height: '100%' }} />
            </div>
          </div>

          {/* Bottom Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Reasons */}
            <div className="bg-success-bg/30 border border-success-bg/50 rounded-xl p-5">
              <div className="text-[11px] font-black text-success-text uppercase tracking-wider mb-4">WHY {areaData.signal}</div>
              <ul className="space-y-3">
                {areaData.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full border-2 border-success-text flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--success-text)" strokeWidth="4">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[12px] font-bold text-deep-navy leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="bg-error-bg/30 border border-error-bg/50 rounded-xl p-5">
              <div className="text-[11px] font-black text-error-text uppercase tracking-wider mb-4">RISK FLAGS</div>
              <ul className="space-y-3">
                {areaData.risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 text-error-text shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                    </div>
                    <span className="text-[12px] font-bold text-deep-navy leading-snug">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="bg-surface rounded-xl p-4 flex items-center gap-3 border border-stroke">
            <span className="text-subtext">ⓘ</span>
            <p className="text-[10.5px] font-bold text-subtext leading-relaxed">
              PSI score and trend are computed indicators based on DLD data, portal listings, and PSI formula. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetailModal;
