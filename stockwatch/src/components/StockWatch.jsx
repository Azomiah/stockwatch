import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Bell, Menu, ChevronUp, ChevronDown, X } from 'lucide-react';

// Initial stock data
const INITIAL_STOCKS = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 173.50, change: 2.5, basePrice: 173.50 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.80, change: -1.8, basePrice: 242.80 },
  { symbol: 'MSFT', name: 'Microsoft', price: 338.45, change: 1.2, basePrice: 338.45 },
  { symbol: 'AMZN', name: 'Amazon', price: 178.90, change: -0.5, basePrice: 178.90 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 147.60, change: 0.8, basePrice: 147.60 }
];

// Available stocks for search
const AVAILABLE_STOCKS = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 824.15, change: 3.2, basePrice: 824.15 },
  { symbol: 'META', name: 'Meta Platforms Inc', price: 503.28, change: 1.5, basePrice: 503.28 },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 180.49, change: -0.8, basePrice: 180.49 },
  { symbol: 'NFLX', name: 'Netflix Inc', price: 605.88, change: 2.1, basePrice: 605.88 },
  { symbol: 'DIS', name: 'Walt Disney Co', price: 111.95, change: -1.2, basePrice: 111.95 },
  { symbol: 'PYPL', name: 'PayPal Holdings Inc', price: 62.35, change: -0.5, basePrice: 62.35 },
  { symbol: 'UBER', name: 'Uber Technologies Inc', price: 75.20, change: 1.8, basePrice: 75.20 },
  { symbol: 'GME', name: 'GameStop Corp', price: 14.82, change: -2.5, basePrice: 14.82 },
  { symbol: 'COIN', name: 'Coinbase Global Inc', price: 225.15, change: 4.2, basePrice: 225.15 },
  ...INITIAL_STOCKS
];

const StockWatch = () => {
    const [stocks, setStocks] = useState(INITIAL_STOCKS);
    const [selectedStock, setSelectedStock] = useState(INITIAL_STOCKS[0]);
    const [historicalData, setHistoricalData] = useState([]);
    const [balance, setBalance] = useState(12435.67);
    const [dailyGain, setDailyGain] = useState(234.56);
    const [dailyPercent, setDailyPercent] = useState(1.92);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    // Filter stocks based on search term
    const filteredStocks = AVAILABLE_STOCKS.filter(stock => 
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Add stock to watchlist
    const addToWatchlist = (stock) => {
      if (!stocks.find(s => s.symbol === stock.symbol)) {
        setStocks(prev => [...prev, stock]);
      }
      setShowSearch(false);
      setSearchTerm('');
    };
  
    // Generate random price movement
    const generateNewPrice = (basePrice) => {
      const changePercent = (Math.random() - 0.5) * 0.2;
      return basePrice * (1 + changePercent);
    };
  
    // Update stock prices periodically
    useEffect(() => {
      const updateStocks = () => {
        setStocks(prevStocks => 
          prevStocks.map(stock => {
            const newPrice = generateNewPrice(stock.basePrice);
            const priceChange = ((newPrice - stock.basePrice) / stock.basePrice) * 100;
            return {
              ...stock,
              price: newPrice,
              change: priceChange
            };
          })
        );
      };
  
      const interval = setInterval(updateStocks, 3000);
      return () => clearInterval(interval);
    }, []);

    // Generate historical data for selected stock
  useEffect(() => {
    const generateHistoricalData = () => {
      const data = [];
      const basePrice = selectedStock.basePrice;
      const now = new Date();
      
      for (let i = 0; i < 50; i++) {
        const time = new Date(now - (50 - i) * 5 * 60000);
        data.push({
          timestamp: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          price: basePrice * (1 + (Math.random() - 0.5) * 0.1)
        });
      }
      setHistoricalData(data);
    };

    generateHistoricalData();
  }, [selectedStock]);

  // Update portfolio value based on stock performance
  useEffect(() => {
    const totalChange = stocks.reduce((acc, stock) => acc + stock.change, 0) / stocks.length;
    const newGain = balance * (totalChange / 100);
    setDailyGain(newGain);
    setDailyPercent(totalChange);
  }, [stocks, balance]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <Menu className="h-6 w-6 text-gray-400" />
          <span className="text-2xl font-bold text-yellow-500">StockWatch</span>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowSearch(true)} 
              className="hover:text-yellow-500 transition-colors"
            >
              <Search className="h-6 w-6 text-gray-400" />
            </button>
            <Bell className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {showSearch && (
        <div className="absolute inset-0 bg-black bg-opacity-95 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 flex items-center bg-gray-900 rounded-lg p-2">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="bg-transparent w-full focus:outline-none text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
              <button 
                onClick={() => {
                  setShowSearch(false);
                  setSearchTerm('');
                }}
                className="ml-4 text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredStocks.map((stock) => (
                <div 
                  key={stock.symbol}
                  onClick={() => addToWatchlist(stock)}
                  className="flex items-center justify-between p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <div className="font-bold">{stock.symbol}</div>
                    <div className="text-sm text-gray-400">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${stock.price.toFixed(2)}</div>
                    <div className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        {/* Portfolio Value */}
        <div className="mb-6">
          <span className="text-sm text-gray-400">Portfolio Value</span>
          <div className="text-3xl font-bold text-yellow-500">
            ${balance.toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <span className={`flex items-center ${dailyGain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {dailyGain >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              ${Math.abs(dailyGain).toFixed(2)} ({dailyPercent.toFixed(2)}%)
            </span>
            <span className="text-gray-400">Today</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-4">
          <div className="text-lg font-bold mb-2">{selectedStock.name} ({selectedStock.symbol})</div>
        </div>
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#EAB308" 
                dot={false} 
                strokeWidth={2}
              />
              <XAxis 
                dataKey="timestamp" 
                stroke="#4B5563"
                tick={{ fill: '#4B5563' }}
              />
              <YAxis 
                stroke="#4B5563"
                tick={{ fill: '#4B5563' }}
                domain={['auto', 'auto']}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.375rem',
                  color: '#F3F4F6'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stock List */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-500">Watchlist</h2>
          <div className="space-y-4">
            {stocks.map((stock) => (
              <div 
                key={stock.symbol} 
                className="flex items-center justify-between p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => setSelectedStock(stock)}
              >
                <div>
                  <div className="font-bold">{stock.symbol}</div>
                  <div className="text-sm text-gray-400">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">${stock.price.toFixed(2)}</div>
                  <div className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockWatch;