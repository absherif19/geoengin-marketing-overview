import { MOCK_DATA } from '../../data/mockData';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect } from 'react';
import AreaDetailModal from '../modals/AreaDetailModal';

// Custom CSS for Heat Icons
const heatIconStyles = `
  .heat-marker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .heat-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Lato', sans-serif;
    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0.2);
    animation: pulse-heat 2s infinite;
  }
  .heat-val {
    font-size: 14px;
    font-weight: 900;
    line-height: 1;
  }
  .heat-label-text {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .heat-area-name {
    margin-top: 8px;
    background: white;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 800;
    color: #0A1D37;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    white-space: nowrap;
    border: 1px solid #E2E8F0;
  }
  @keyframes pulse-heat {
    0% { box-shadow: 0 0 0 0px rgba(245, 158, 11, 0.4); }
    100% { box-shadow: 0 0 0 12px rgba(245, 158, 11, 0); }
  }
  .draggable-container {
    cursor: grab;
    user-select: none;
    -webkit-user-drag: none;
  }
  .draggable-container:active {
    cursor: grabbing;
  }
  .draggable-container img {
    pointer-events: none;
  }
  .custom-scrollbar::-webkit-scrollbar {
    height: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-alt);
  }
`;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const createHeatIcon = (value, name, color) => {
  return L.divIcon({
    className: 'custom-heat-icon',
    html: `
      <div class="heat-marker-container">
        <div class="heat-circle" style="background-color: ${color || '#f59e0b'};">
          <div class="heat-val">${value}</div>
          <div class="heat-label-text">deals</div>
        </div>
        <div class="heat-area-name">${name}</div>
      </div>
    `,
    iconSize: [120, 80],
    iconAnchor: [60, 40]
  });
};

export default function MapAreasPage({ city = 'Abudhabi' }) {
  const data = MOCK_DATA[city].mapAreas;
  const isDubai = city === 'Dubai';
  const center = isDubai ? [25.10, 55.20] : [24.45, 54.55];
  const zoom = 12;

  const scrollRef = useRef(null);
  const detailedData = MOCK_DATA[city].areaDetails;
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Replay Animation State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentDay(prev => {
          if (prev >= 30) {
            setIsPlaying(false);
            return 30;
          }
          return prev + 1;
        });
      }, 500); // 500ms per day
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (currentDay >= 30) {
      setCurrentDay(1);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleAreaClick = (areaName) => {
    if (detailedData && detailedData[areaName]) {
      setSelectedArea(detailedData[areaName]);
    } else {
      setSelectedArea({
        name: areaName,
        city: city,
        score: 75,
        change: '+2 (30d)',
        price: '---',
        demand: 75,
        activity: 70,
        signal: 'BUY',
        trendData: {
          dates: ['2 Apr', '6 Apr', '10 Apr', '14 Apr', '18 Apr', '22 Apr', '26 Apr', '30 Apr'],
          values: [70, 72, 75, 74, 76, 78, 80, 78]
        },
        reasons: ['Consistent search volume growth', 'Positive sentiment in local community'],
        risks: ['Market supply fluctuation']
      });
    }
    setModalOpen(true);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col gap-6">
      <style>{heatIconStyles}</style>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-deep-navy mb-2">Map & Areas</h1>
        <p className="text-subtext max-w-3xl text-[15px] leading-relaxed">
          This page provides a geographic and data-driven breakdown of real estate performance across individual areas within {city}. It contains 4 main sections.
        </p>
      </div>

      {/* Section 1: Area Performance Race */}
      <div className="card">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-5 gap-4">
          <div>
            <h2 className="m-0 text-xl font-black text-deep-navy">Area Performance Race</h2>
            <p className="mt-1 text-subtext text-[13px] font-semibold">Top {data.raceData.length} areas · Daily animated replay · {city}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex bg-white rounded-lg p-1 border border-stroke flex-1 lg:flex-none">
              <button className="flex-1 lg:px-3 py-1 text-xs font-bold rounded-md hover:bg-surface transition-colors text-subtext">7D</button>
              <button className="flex-1 lg:px-3 py-1 text-xs font-bold rounded-md bg-deep-navy text-white shadow-sm">30D</button>
              <button className="flex-1 lg:px-3 py-1 text-xs font-bold rounded-md hover:bg-surface transition-colors text-subtext">90D</button>
            </div>
            <div className="flex bg-white rounded-lg p-1 border border-stroke flex-1 lg:flex-none">
              <button className="flex-1 lg:px-3 py-1 text-xs font-bold rounded-md bg-deep-navy text-white shadow-sm">Transactions</button>
              <button className="flex-1 lg:px-3 py-1 text-xs font-bold rounded-md hover:bg-surface transition-colors text-subtext">Sales Value</button>
            </div>
            <button 
              className={`btn-primary !py-2 !px-4 text-xs w-full lg:w-auto transition-all ${isPlaying ? 'bg-deep-navy hover:bg-deep-navy/90' : ''}`}
              onClick={togglePlay}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
          </div>
        </div>

        <div className="bg-surface p-4 rounded-xl mt-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 text-[13px] font-bold gap-2">
            <span className="text-deep-navy">{currentDay} Apr · {city} · Day {currentDay} of 30</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <span className="text-subtext">DAY TRANSACTIONS: <span className="text-deep-navy">{Math.floor(1010 * (currentDay/30))}</span></span>
              <span className="text-subtext">DAY SALES: <span className="text-deep-navy">AED {Math.floor(2478 * (currentDay/30))}M</span></span>
            </div>
          </div>
          <div className="h-1 bg-gray-200 rounded-full relative">
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
              style={{ left: `${(currentDay / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-8 relative" style={{ height: `${data.raceData.length * 36}px` }}>
          {data.raceData
            .map((item, i) => {
              // Apply different growth curves based on index to create "overtaking" behavior
              // Curve 1: Acceleration (starts slow, ends fast)
              // Curve 2: Deceleration (starts fast, ends slow)
              // Curve 3: Linear
              const progress = currentDay / 30;
              let curve;
              if (i % 3 === 0) curve = Math.pow(progress, 1.5);
              else if (i % 3 === 1) curve = Math.pow(progress, 0.6);
              else curve = progress;

              const animatedValue = Math.floor(item.value * curve);
              const animatedPct = item.pct * curve;
              return { ...item, animatedValue, animatedPct };
            })
            .sort((a, b) => b.animatedValue - a.animatedValue)
            .map((item, index) => (
              <div 
                key={item.name} 
                className="flex items-center gap-3 cursor-pointer hover:bg-surface/50 p-1 rounded-sm transition-all duration-700 group absolute w-full"
                style={{ transform: `translateY(${index * 34}px)` }}
                onClick={() => handleAreaClick(item.name)}
              >
                <div className="w-32 text-xs font-bold text-deep-navy truncate">{item.name}</div>
                <div className="flex-1 h-3.5 bg-gray-100 rounded-sm relative overflow-hidden">
                  <div 
                    className="h-full rounded-sm transition-all duration-300 ease-out bg-deep-navy group-hover:bg-primary!" 
                    style={{ width: `${item.animatedPct}%` }}
                  ></div>
                </div>
                <div className="w-10 text-xs font-black text-deep-navy text-right">{item.animatedValue}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Section 2: Deal Heatmap */}
      <div className="card overflow-visible">
        <div className="flex justify-between items-center mb-2.5">
          <h2 className="m-0 text-xl font-black text-deep-navy">Deal Heatmap — 30D Replay</h2>
          <div className="flex items-center gap-3">
            <span className="bg-deep-navy text-white px-3 py-1.5 rounded-lg text-xs font-black">{city}</span>
            <span className="text-subtext text-xs font-bold">30 Apr</span>
          </div>
        </div>
        <p className="text-xs text-subtext mb-5 italic font-medium leading-relaxed">
          Darker areas = more deal activity. Click any district to see transactions, pricing, and momentum. Use the timeline scrubber to replay how activity shifted over time.
        </p>

        <div className="rounded-2xl h-[450px] relative overflow-hidden border border-stroke shadow-inner z-0">
          <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <ChangeView center={center} zoom={zoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.raceData.map(area => (
              area.lat && area.lng && (
                <Marker 
                  key={area.name} 
                  position={[area.lat, area.lng]}
                  icon={createHeatIcon(area.value, area.name, area.color)}
                >
                  <Popup>
                    <div className="font-sans">
                      <div className="font-black text-deep-navy">{area.name}</div>
                      <div className="text-xs font-bold text-subtext">{area.value} deals</div>
                    </div>
                  </Popup>
                </Marker>
              )
            ))}
          </MapContainer>
          
          <div className="absolute top-5 left-5 bg-white/95 p-4 rounded-xl border border-stroke w-52 shadow-lg z-1000 pointer-events-auto">
            <div className="text-[10px] font-black text-subtext mb-2 tracking-wider">LEADERBOARD</div>
            <div className="text-[13px] text-deep-navy mb-3 font-semibold">Total: <b className="font-black text-primary">{isDubai ? '8,241' : '3,973'} deals</b></div>
            <div className="space-y-1.5">
              {data.raceData.slice(0, 3).map((area, i) => (
                <div key={area.name} className="text-[11px] font-bold text-deep-navy flex items-center gap-2">
                  #{i+1} <span className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? 'red' : i === 1 ? 'orange' : 'gold' }}></span> {area.name} - {area.value}
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 rounded-full flex items-center gap-3 text-[10px] font-black border border-stroke shadow-sm z-1000 pointer-events-auto">
            <span className="text-subtext">Low Activity</span>
            <div className="w-32 h-2 bg-linear-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
            <span className="text-subtext">High Activity</span>
          </div>
        </div>

        <div className="bg-surface p-4 rounded-xl mt-5">
          <div className="flex justify-between items-center mb-3 text-[13px] font-bold">
            <span className="text-deep-navy">1 Apr</span>
            <button className="bg-primary text-white py-1 px-3 text-[10px] rounded-lg cursor-pointer font-black border-none hover:opacity-90 transition-opacity">🔴 REPLAY</button>
            <span className="text-deep-navy">30 Apr</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      {/* Section 3: Top Areas to Watch */}
      <div className="flex justify-between items-end mb-5">
        <div>
          <h2 className="m-0 text-xl font-black text-deep-navy">Top Areas to Watch</h2>
          <span className="text-[11px] text-subtext font-semibold">Source: Bayut area pages — listing counts & avg price/sqft scraped per neighbourhood</span>
        </div>
        <a href="#" className="text-primary text-sm font-black no-underline hover:underline transition-all">View all areas →</a>
      </div>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar draggable-container"
      >
        {data.areasToWatch.map(area => (
          <div className="min-w-[240px] bg-white border border-stroke rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group shrink-0" key={area.name}>
            <div 
              className="h-32 bg-gray-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
              style={{ backgroundImage: `url('${area.img}')` }}
            ></div>
            <div className="p-4 pointer-events-none">
              <div className="font-black text-[15px] text-deep-navy">{area.name}</div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-[11px] font-bold text-subtext">PSI Score</span>
                <span className="text-[11px] text-green-500 font-black">{area.score}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[11px] font-bold text-subtext">Avg. Price / Sqft</span>
                <span className="text-[11px] text-[#00acc1] font-black">AED {area.price}</span>
              </div>
              <div className="inline-block px-2.5 py-1.5 rounded-lg text-[10px] font-black mt-4 bg-green-50 text-green-700 border border-green-100">
                {area.score >= 80 ? 'STRONG BUY' : 'BUY'} {area.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section 4: Area Intelligence Table */}
      <div className="card mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="m-0 text-xl font-black text-deep-navy">Area Intelligence — {city}</h2>
            <p className="mt-1 text-subtext text-xs font-semibold">Click any row to view PSI trend, rationale & risk flags</p>
          </div>
          <div className="flex gap-2 bg-surface p-1 rounded-xl w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-1.5 text-xs font-black rounded-lg bg-white shadow-sm text-deep-navy">All Areas</button>
            <button className="flex-1 md:flex-none px-4 py-1.5 text-xs font-bold rounded-lg text-subtext hover:bg-white hover:text-deep-navy transition-all">STRONG BUY</button>
            <button className="flex-1 md:flex-none px-4 py-1.5 text-xs font-bold rounded-lg text-subtext hover:bg-white hover:text-deep-navy transition-all">WAIT</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-stroke">
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap">#</th>
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap min-w-[150px]">AREA</th>
                <th className="p-4 text-[11px] font-extrabold text-green-500 uppercase whitespace-nowrap">PSI SCORE ↓</th>
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap">SIGNAL</th>
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap">AED/SQFT</th>
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap">DEMAND</th>
                <th className="p-4 text-[11px] font-extrabold text-subtext uppercase whitespace-nowrap">ACTIVITY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stroke">
              {data.tableData.map(row => (
                <tr 
                  key={row.area} 
                  className="hover:bg-surface/50 transition-colors group cursor-pointer"
                  onClick={() => handleAreaClick(row.area)}
                >
                  <td className="p-4 text-sm font-black text-subtext">{row.rank}</td>
                  <td className="p-4">
                    <div className="text-sm font-black text-deep-navy group-hover:text-primary transition-colors">{row.area}</div>
                    <div className="text-[10px] font-bold text-subtext uppercase tracking-tight">{row.date}</div>
                  </td>
                  <td className="p-4 text-sm font-black text-success-text">{row.score}</td>
                  <td className="p-4">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black bg-success-bg text-success-text border border-success-bg">{row.signal}</span>
                  </td>
                  <td className="p-4 text-sm font-black text-primary">{row.price}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 bg-surface rounded-full w-20 overflow-hidden">
                        <div className="h-full bg-deep-navy transition-all duration-1000" style={{ width: `${row.demand}%` }}></div>
                      </div>
                      <span className="text-xs font-black text-deep-navy">{row.demand}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 bg-surface rounded-full w-20 overflow-hidden">
                        <div className="h-full bg-success-text transition-all duration-1000" style={{ width: `${row.activity}%` }}></div>
                      </div>
                      <span className="text-xs font-black text-deep-navy">{row.activity}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <span className="bg-surface text-deep-navy px-2.5 py-1 rounded-md text-[10px] font-black border border-stroke shrink-0">Property Finder</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-black text-subtext uppercase tracking-wider mb-2">Last Updated</div>
            <div className="text-[14px] font-black text-deep-navy">5 minutes ago</div>
          </div>
        </div>
      <div className="text-[11px] font-bold text-subtext italic text-left md:text-right max-w-xs">PSI is a computed indicator, not financial advice</div>
      </div>

      <AreaDetailModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        areaData={selectedArea} 
      />
    </div>
  );
}
