import { MOCK_DATA } from '../../data/mockData';
import ReactECharts from 'echarts-for-react';

export default function TrendsPage({ city = 'Abudhabi' }) {
  const data = MOCK_DATA[city].trends;
  const chart = data.chartData;

  const option = {
    color: ['#079455', '#E0592A', '#2C2D65'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      borderColor: '#E7EAE9',
      borderWidth: 1,
      textStyle: { color: '#2C2D65', fontWeight: 'bold', fontSize: 12 },
      shadowColor: 'rgba(0, 0, 0, 0.03)',
      shadowBlur: 10
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '10%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chart.dates,
      axisLine: { lineStyle: { color: '#E7EAE9' } },
      axisLabel: { color: '#848A92', fontWeight: 'bold', fontSize: 10, margin: 15 },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#F5F7F9' } },
      axisLabel: { show: false }
    },
    series: [
      {
        name: 'Transactions',
        type: 'line',
        smooth: true,
        data: chart.transactions,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 4 }
      },
      {
        name: 'Sales Value',
        type: 'line',
        smooth: true,
        data: chart.sales,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 4 }
      },
      {
        name: 'Avg. Price / Sqft',
        type: 'line',
        smooth: true,
        data: chart.price,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 4 }
      }
    ]
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Instructional Banner */}
      <div className="bg-white/40 backdrop-blur-md border border-stroke p-5 rounded-2xl flex items-center gap-4 transition-all hover:bg-white/60">
        <span className="text-2xl bg-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm border border-stroke">💡</span>
        <div className="flex-1">
          <h4 className="m-0 text-sm font-black text-deep-navy uppercase tracking-wider">Understanding the trends</h4>
          <p className="m-1 text-subtext text-[13px] font-semibold leading-relaxed">
            These charts show how the market has moved over your selected date range. Look for rising transaction volume alongside rising prices — that's the strongest buy signal.
          </p>
        </div>
        <div className="text-primary font-black ml-auto cursor-pointer hover:translate-y-0.5 transition-transform">▼</div>
      </div>

      {/* PSI Market Index */}
      <div className="card">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="m-0 text-lg font-black text-deep-navy">PSI Market Index — {city}</h2>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-[64px] font-black text-success-text leading-none tabular-nums">{data.index}</span>
              <div>
                <div className="flex items-center gap-2 font-black text-success-text text-sm">
                  <span className="w-2 h-2 rounded-full bg-success-text animate-pulse"></span> {data.index >= 80 ? 'STRONG BUY' : 'BUY'}
                </div>
                <div className="text-[13px] text-success-text font-extrabold mt-0.5">↑ +5.0 vs yesterday</div>
              </div>
            </div>
            <p className="mt-4 mb-0 text-subtext text-sm font-bold italic">"Market conditions are positive for buyers."</p>
          </div>
          <span className="live-badge bg-error-bg text-error-text border border-error-bg font-black px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-error-text animate-pulse"></span> LIVE
          </span>
        </div>

        <div className="gauge-full h-3 bg-surface rounded-full mt-8 mb-3 relative overflow-visible flex">
          <div className="h-full bg-error-text shrink-0 first:rounded-l-full" style={{ width: '40%' }}></div>
          <div className="h-full bg-primary shrink-0" style={{ width: '20%' }}></div>
          <div className="h-full bg-emerald-400 shrink-0" style={{ width: '20%' }}></div>
          <div className="h-full bg-success-text shrink-0 last:rounded-r-full" style={{ width: '20%' }}></div>
          <div 
            className="absolute -top-2.5 w-1 h-8 bg-deep-navy border-2 border-white rounded-full transition-all duration-1000 shadow-sm"
            style={{ left: `${data.index}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-[10px] font-black text-subtext uppercase tracking-widest px-1">
          <span>0–40 WAIT</span><span>40–60 SELECTIVE</span><span>60–80 BUY</span><span>80–100 STRONG BUY</span>
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-stroke text-xs">
          <div className="font-bold text-subtext uppercase tracking-wider">Trend: <span className="text-success-text font-black ml-1">Improving</span></div>
          <div className="font-bold text-subtext uppercase tracking-wider">Confidence: <span className="text-deep-navy font-black ml-1">High</span></div>
          <div className="font-bold text-subtext uppercase tracking-wider">Data Coverage: <span className="text-deep-navy font-black ml-1">3,600 Txn/mo</span></div>
        </div>
      </div>

      {/* Market Snapshot */}
      <div className="flex flex-col gap-5 mt-4">
        <h3 className="text-xl font-black text-deep-navy">Market Snapshot — {city}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card text-center hover:border-success-text/20 transition-colors">
            <div className="text-subtext text-xs font-black uppercase tracking-widest mb-2">Transactions (24h)</div>
            <div className="text-3xl md:text-[44px] font-black text-success-text tabular-nums">{data.transactions}</div>
          </div>
          <div className="card text-center hover:border-primary/20 transition-colors">
            <div className="text-subtext text-xs font-black uppercase tracking-widest mb-2">Sales Value (24h)</div>
            <div className="text-3xl md:text-[44px] font-black text-primary tabular-nums">AED {data.salesValue}</div>
          </div>
        </div>
      </div>

      {/* 7-Day Playback Chart */}
      <div className="card overflow-visible">
        <div className="flex justify-between items-center mb-6">
          <h3 className="m-0 text-base font-black text-deep-navy">7-Day Playback</h3>
          <div className="flex items-center gap-3">
            <button className="bg-deep-navy text-white px-4 py-2 rounded-lg text-xs font-black hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
              ▶ Play
            </button>
            <div className="bg-white border border-stroke rounded-lg px-3 py-2 flex items-center gap-2">
              <span className="text-xs font-black text-deep-navy">7 Days</span>
              <svg className="w-3 h-3 text-subtext" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <span className="text-xs font-black text-subtext bg-surface px-3 py-2 rounded-lg border border-stroke">1/7</span>
          </div>
        </div>

        <div className="w-full h-1 bg-surface rounded-full mb-10 overflow-hidden relative border border-slate-50 shadow-inner">
          <div className="absolute top-0 left-0 h-full bg-primary w-[15%] transition-all duration-500"></div>
        </div>

        <div className="h-[250px] md:h-[320px] w-full relative">
          <ReactECharts 
            option={option} 
            style={{ height: '100%', width: '100%' }}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-x-8 bg-surface py-4 px-6 md:px-10 rounded-2xl border border-stroke mt-6 mx-0 md:mx-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success-text"></span>
            <span className="text-[10px] font-black text-deep-navy uppercase tracking-widest">Transactions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-[10px] font-black text-deep-navy uppercase tracking-widest flex items-center gap-1">
              Sales Value <span className="text-subtext font-bold">(AED B)</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-deep-navy"></span>
            <span className="text-[10px] font-black text-deep-navy uppercase tracking-widest flex items-center gap-1">
              Avg. Price / Sqft <span className="text-subtext font-bold">(AED)</span>
            </span>
          </div>
        </div>

        <div className="mt-8 text-[10px] text-subtext font-bold text-center italic opacity-70 uppercase tracking-[2px]">
          Source: DLD, {city === 'Dubai' ? 'Dubai Pulse' : 'DMT'}, Bayut, Property Finder ✓
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl border border-stroke mt-4 gap-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
          <div>
            <div className="text-[10px] font-black text-subtext uppercase tracking-wider mb-2">Data Sources</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface text-deep-navy px-2.5 py-1 rounded-md text-[10px] font-black border border-stroke shrink-0">DLD</span>
              <span className="bg-surface text-deep-navy px-2.5 py-1 rounded-md text-[10px] font-black border border-stroke shrink-0">Bayut</span>
              <span className="bg-surface text-deep-navy px-2.5 py-1 rounded-md text-[10px] font-black border border-stroke shrink-0">{city === 'Dubai' ? 'Dubai Pulse' : 'DMT'}</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black text-subtext uppercase tracking-wider mb-2">Last Updated</div>
            <div className="text-[14px] font-black text-deep-navy tabular-nums">Today, 5:02 PM</div>
          </div>
        </div>
        <div className="text-[11px] font-bold text-subtext italic text-left md:text-right max-w-xs">PSI is a computed indicator, not financial advice</div>
      </div>
    </div>
  );
}
