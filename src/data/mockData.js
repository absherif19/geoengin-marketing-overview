export const MOCK_DATA = {
  Abudhabi: {
    overview: {
      index: 82,
      recommendation: "STRONG BUY",
      trend: "+5.0 vs yesterday",
      transactions: 142,
      salesValue: "0.67B",
      coverage: "2.8K/mo",
      signals: { activity: 100, price: 80, demand: 69, global: 74 },
      outlook: "Abu Dhabi's real estate market shows strong momentum supported by healthy demand, stable pricing and positive global sentiment.",
      chartData: [100, 90, 110, 80, 90, 60, 80, 50, 70, 40, 50, 30],
      baselineChart: [160, 150, 170, 140, 150, 130, 160, 140, 150, 130, 120, 130]
    },
    mapAreas: {
      raceData: [
        { rank: 1, name: 'Yas Island', value: 204, pct: 90, color: '#3b82f6', lat: 24.4848, lng: 54.6064 },
        { rank: 2, name: 'Al Raha Beach', value: 155, pct: 75, color: '#10b981', lat: 24.4422, lng: 54.5761 },
        { rank: 3, name: 'Al Reem Island', value: 152, pct: 72, color: '#f59e0b', lat: 24.4942, lng: 54.4069 },
        { rank: 4, name: 'Saadiyat Island', value: 129, pct: 60, color: '#ef4444', lat: 24.5333, lng: 54.4333 },
        { rank: 5, name: 'Khalifa City', value: 115, pct: 55, color: '#8b5cf6', lat: 24.4283, lng: 54.5750 },
        { rank: 6, name: 'Al Maryah Island', value: 98, pct: 45, color: '#06b6d4', lat: 24.5000, lng: 54.3833 },
        { rank: 7, name: 'Al Reef', value: 85, pct: 40, color: '#f43f5e', lat: 24.4750, lng: 54.6750 },
        { rank: 8, name: 'MBZ City', value: 72, pct: 35, color: '#14b8a6', lat: 24.3333, lng: 54.5500 },
        { rank: 9, name: 'Masdar City', value: 65, pct: 30, color: '#f97316', lat: 24.4267, lng: 54.6150 },
        { rank: 10, name: 'Al Shamkha', value: 45, pct: 20, color: '#64748b', lat: 24.4167, lng: 54.7333 },
      ],
      tableData: [
        { rank: 1, area: 'Al Maryah Island', date: '2026-04-30', score: 84, signal: 'STRONG BUY', price: 'AED 2,200', demand: 90, activity: 85 },
        { rank: 2, area: 'Yas Island', date: '2026-04-30', score: 82, signal: 'STRONG BUY', price: 'AED 1,950', demand: 88, activity: 92 },
      ],
      areasToWatch: [
        { name: 'Al Maryah Island Hub', score: 88, price: '2,200', change: '↑88%', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Saadiyat Cultural', score: 81, price: '2,700', change: '↑81%', img: 'https://images.unsplash.com/photo-1582672099034-dd88e14fd1b6?auto=format&fit=crop&w=400&q=80' },
        { name: 'Yas Island North', score: 85, price: '1,950', change: '↑85%', img: 'https://images.unsplash.com/photo-1626500155105-0967ed48f43c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Al Raha Beach Canal', score: 82, price: '1,800', change: '↑82%', img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=400&q=80' },
        { name: 'Khalifa City Sector', score: 78, price: '1,050', change: '↑78%', img: 'https://images.unsplash.com/photo-1577495508048-b654ee408221?auto=format&fit=crop&w=400&q=80' },
        { name: 'MBZ Residential', score: 75, price: '950', change: '↑75%', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Al Reef Villas', score: 74, price: '850', change: '↑74%', img: 'https://images.unsplash.com/photo-1582672099034-dd88e14fd1b6?auto=format&fit=crop&w=400&q=80' },
        { name: 'Masdar Green City', score: 79, price: '1,400', change: '↑79%', img: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?auto=format&fit=crop&w=400&q=80' },
        { name: 'Al Samrah Area', score: 70, price: '720', change: '↑70%', img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=400&q=80' },
        { name: 'Ghantoot Coast', score: 65, price: '1,200', change: '↑65%', img: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?auto=format&fit=crop&w=400&q=80' }
      ]
    },
    trends: {
      index: 81,
      transactions: 169,
      salesValue: "0.84B",
      chartData: {
        dates: ['Jan 7','Jan 6','Jan 5','Jan 4','Jan 3','Jan 2','Jan 1'],
        transactions: [120, 150, 180, 220, 260, 310, 350],
        sales: [0.5, 0.6, 0.65, 0.72, 0.78, 0.82, 0.84],
        price: [1100, 1150, 1180, 1200, 1220, 1240, 1250]
      }
    },
    signals: [
      { score: 100, status: 'Very Strong', desc: 'Market Activity tracks the volume of transactions.' },
      { score: 80, status: 'Very Strong', desc: 'Price Pressure compares current price vs 90-day baseline.' },
      { score: 65, status: 'Positive', desc: 'Demand Pulse measures search inquiries.' },
      { score: 78, status: 'Positive', desc: 'Global Context reflects macro factors.' }
    ],
    reports: { index: 81, recommendation: "STRONG BUY", areas: 50, days: 120 },
    compare: {
      kpi: [
        { label: 'TRANSACTIONS', valueA: '4,625', valueB: '4,501', change: '-2.7%', positive: false },
        { label: 'SALES VALUE', valueA: 'AED 23.1B', valueB: '22.2B', change: '-3.9%', positive: false },
        { label: 'AVG PRICE/SQFT', valueA: '1,252', valueB: '1,245', change: '-0.6%', positive: false },
        { label: 'AVG PSI INDEX', valueA: '72.8', valueB: '77.1', change: '+5.9%', positive: true },
      ],
      barData: [ { a: 55, b: 60 }, { a: 65, b: 70 }, { a: 48, b: 50 }, { a: 80, b: 85 } ]
    },
    areaDetails: {
      'Yas Island': {
        name: 'Yas Island',
        city: 'Abu Dhabi',
        score: 82,
        change: '+1 (30d)',
        price: '2,100',
        demand: 85,
        activity: 80,
        signal: 'STRONG BUY',
        trendData: {
          dates: ['2 Apr', '6 Apr', '10 Apr', '14 Apr', '18 Apr', '22 Apr', '26 Apr', '30 Apr'],
          values: [82, 85, 84, 80, 81, 83, 85, 82]
        },
        reasons: [
          'PSI score in top quartile for this area',
          'Demand consistently outpacing supply',
          'Price growth above city average',
          'High transaction velocity — deals closing quickly'
        ],
        risks: [
          'Entry price at premium — timing sensitive',
          'Risk of correction if macro conditions shift'
        ]
      },
      'Al Maryah Island': {
        name: 'Al Maryah Island',
        city: 'Abu Dhabi',
        score: 84,
        change: '+3 (30d)',
        price: '2,200',
        demand: 90,
        activity: 85,
        signal: 'STRONG BUY',
        trendData: {
          dates: ['2 Apr', '6 Apr', '10 Apr', '14 Apr', '18 Apr', '22 Apr', '26 Apr', '30 Apr'],
          values: [80, 82, 83, 85, 84, 86, 88, 84]
        },
        reasons: [
          'Strategic business hub designation',
          'Limited supply of luxury waterfront units',
          'High rental yield potential',
          'Institutional investor interest'
        ],
        risks: [
          'Dependent on commercial sector health',
          'Higher maintenance costs in high-rise'
        ]
      }
    }
  },
  Dubai: {
    overview: {
      index: 76,
      recommendation: "BUY",
      trend: "+2.4 vs yesterday",
      transactions: 245,
      salesValue: "1.2B",
      coverage: "4.5K/mo",
      signals: { activity: 85, price: 92, demand: 78, global: 70 },
      outlook: "Dubai's market remains exceptionally robust with significant interest in off-plan luxury segments and steady capital appreciation.",
      chartData: [120, 100, 130, 90, 110, 80, 100, 70, 90, 60, 80, 50],
      baselineChart: [140, 130, 150, 120, 130, 110, 140, 120, 130, 110, 100, 110]
    },
    mapAreas: {
      raceData: [
        { rank: 1, name: 'Dubai Marina', value: 350, pct: 95, color: '#3b82f6', lat: 25.0819, lng: 55.1367 },
        { rank: 2, name: 'Business Bay', value: 290, pct: 85, color: '#10b981', lat: 25.1833, lng: 55.2667 },
        { rank: 3, name: 'JVC', value: 260, pct: 78, color: '#f59e0b', lat: 25.0560, lng: 55.2050 },
        { rank: 4, name: 'Downtown Dubai', value: 210, pct: 65, color: '#ef4444', lat: 25.1972, lng: 55.2744 },
        { rank: 5, name: 'JLT', value: 185, pct: 58, color: '#8b5cf6', lat: 25.0768, lng: 55.1481 },
        { rank: 6, name: 'Palm Jumeirah', value: 172, pct: 52, color: '#06b6d4', lat: 25.1124, lng: 55.1390 },
        { rank: 7, name: 'Arabian Ranches', value: 155, pct: 45, color: '#f43f5e', lat: 25.0500, lng: 55.2800 },
        { rank: 8, name: 'Damac Hills', value: 142, pct: 40, color: '#14b8a6', lat: 25.0300, lng: 55.2400 },
        { rank: 9, name: 'Dubai Hills', value: 128, pct: 35, color: '#f97316', lat: 25.1180, lng: 55.2390 },
        { rank: 10, name: 'Meydan City', value: 95, pct: 25, color: '#64748b', lat: 25.1667, lng: 55.3000 },
      ],
      tableData: [
        { rank: 1, area: 'Palm Jumeirah', date: '2026-04-30', score: 89, signal: 'STRONG BUY', price: 'AED 4,500', demand: 95, activity: 88 },
        { rank: 2, area: 'Dubai Hills', date: '2026-04-30', score: 83, signal: 'BUY', price: 'AED 2,800', demand: 85, activity: 80 },
      ],
      areasToWatch: [
        { name: 'Dubai Marina Luxury', score: 88, price: '3,200', change: '↑92%', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80' },
        { name: 'Business Bay Central', score: 85, price: '2,400', change: '↑85%', img: 'https://images.unsplash.com/photo-1546412414-e1885261bb9b?auto=format&fit=crop&w=400&q=80' },
        { name: 'JVC Village', score: 82, price: '1,200', change: '↑82%', img: 'https://images.unsplash.com/photo-1582653280643-e3952ed0f600?auto=format&fit=crop&w=400&q=80' },
        { name: 'Palm Jumeirah East', score: 89, price: '4,500', change: '↑89%', img: 'https://images.unsplash.com/photo-1577948000111-9c97cbed27b0?auto=format&fit=crop&w=400&q=80' },
        { name: 'Arabian Ranches III', score: 84, price: '1,600', change: '↑84%', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Dubai Creek Waterfront', score: 83, price: '1,900', change: '↑83%', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Meydan Heights', score: 77, price: '1,800', change: '↑77%', img: 'https://images.unsplash.com/photo-1541339907198-e08756edd811?auto=format&fit=crop&w=400&q=80' },
        { name: 'Dubai South Pulse', score: 72, price: '950', change: '↑72%', img: 'https://images.unsplash.com/photo-1582666622210-9759d791db07?auto=format&fit=crop&w=400&q=80' },
        { name: 'Downtown Boulevard', score: 81, price: '2,600', change: '↑81%', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80' },
        { name: 'JLT Towers', score: 82, price: '1,450', change: '↑82%', img: 'https://images.unsplash.com/photo-1546412414-e1885261bb9b?auto=format&fit=crop&w=400&q=80' }
      ]
    },
    trends: {
      index: 78,
      transactions: 210,
      salesValue: "1.05B",
      chartData: {
        dates: ['Jan 7','Jan 6','Jan 5','Jan 4','Jan 3','Jan 2','Jan 1'],
        transactions: [180, 210, 240, 280, 330, 380, 420],
        sales: [0.8, 0.9, 0.95, 1.05, 1.12, 1.18, 1.25],
        price: [2100, 2150, 2200, 2250, 2300, 2350, 2400]
      }
    },
    signals: [
      { score: 85, status: 'Strong', desc: 'High volume of off-plan launches.' },
      { score: 92, status: 'Very Strong', desc: 'Significant price appreciation in prime areas.' },
      { score: 78, status: 'Strong', desc: 'Luxury demand continues to peak.' },
      { score: 70, status: 'Stable', desc: 'Global investment inflows remain steady.' }
    ],
    reports: { index: 78, recommendation: "BUY", areas: 120, days: 150 },
    compare: {
      kpi: [
        { label: 'TRANSACTIONS', valueA: '12,500', valueB: '14,200', change: '+13.6%', positive: true },
        { label: 'SALES VALUE', valueA: 'AED 45.2B', valueB: '52.1B', change: '+15.2%', positive: true },
        { label: 'AVG PRICE/SQFT', valueA: '2,800', valueB: '3,100', change: '+10.7%', positive: true },
        { label: 'AVG PSI INDEX', valueA: '75.2', valueB: '78.5', change: '+4.4%', positive: true },
      ],
      barData: [ { a: 40, b: 50 }, { a: 70, b: 80 }, { a: 60, b: 90 }, { a: 75, b: 85 } ]
    }
  }
};
