import { useMemo } from 'react';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';
import { Sparkles, AlertTriangle, TrendingDown } from 'lucide-react';

// Generates fake 96-block demand data
const generateDemandData = () => {
  const data = [];
  for (let i = 1; i <= 96; i++) {
    const base = 1000 + Math.sin(i / 10) * 300;
    const isErrorBlock = i > 50 && i < 60;
    data.push({
      block: i,
      time: `${Math.floor((i * 15) / 60).toString().padStart(2, '0')}:${((i * 15) % 60).toString().padStart(2, '0')}`,
      actual: base + (Math.random() * 50),
      forecastArayNex: base + (Math.random() * 10),
      forecastManual: isErrorBlock ? base - 150 : base + (Math.random() * 60)
    });
  }
  return data;
};

const Dashboard = () => {
  const chartData = useMemo(() => generateDemandData(), []);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex items-baseline justify-between pt-2">
        <div>
          <h1 className="text-3xl font-manrope font-bold text-on-surface tracking-tight">Daily Impact Report</h1>
          <p className="text-sm text-on-surface-variant mt-1">Shadow Mode (Advisory Co-Pilot) • February 21, 2026</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded border border-outline-variant/50 text-on-surface text-sm font-medium hover:bg-surface-low transition-colors">
            Export PDF
          </button>
          <button className="px-4 py-2 rounded bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Execute Suggested Trades
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Net Savings Potential */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="bg-surface-container rounded-lg p-6 border-l-4 border-primary-fixed shadow-[0_4px_24px_rgba(0,225,168,0.06)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingDown className="w-24 h-24 text-primary-fixed" />
          </div>
          <h3 className="text-on-surface-variant text-sm font-inter uppercase tracking-wider mb-2">Net Savings Opportunity</h3>
          <div className="text-4xl font-manrope font-bold text-primary-fixed mb-1">₹22.5 Lakhs</div>
          <p className="text-sm text-on-surface-variant">ArayNex Simulated Result vs Manual Schedule</p>
        </motion.div>

        {/* DSM Penalties */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="bg-surface-container rounded-lg p-6 relative overflow-hidden"
        >
          <h3 className="text-on-surface-variant text-sm font-inter uppercase tracking-wider mb-2">Avoidable DSM Penalties</h3>
          <div className="text-3xl font-manrope font-semibold text-error mb-1">₹8.5 Lakhs</div>
          <p className="text-sm text-on-surface-variant">Forecasting error deviation at Block 57</p>
        </motion.div>

        {/* URS Trading */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="bg-surface-container rounded-lg p-6 relative overflow-hidden"
        >
          <h3 className="text-on-surface-variant text-sm font-inter uppercase tracking-wider mb-2">Missed URS Revenue (RTM)</h3>
          <div className="text-3xl font-manrope font-semibold text-secondary-fixed mb-1">₹14.0 Lakhs</div>
          <p className="text-sm text-on-surface-variant">Idle Assets Fixed Cost Recovery</p>
        </motion.div>
      </div>

      {/* Main Chart */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-surface-container rounded-xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-manrope font-semibold text-on-surface">96-Block Demand Forecaster</h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-primary-fixed"></div><span>ArayNex AI</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-outline-variant"></div><span>Manual</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded border border-error bg-transparent"></div><span>Actual</span></div>
          </div>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorArayNex" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary-fixed)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary-fixed)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline-variant)" opacity={0.3} vertical={false} />
              <XAxis dataKey="time" stroke="var(--color-on-surface-variant)" tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 12 }} minTickGap={30} />
              <YAxis stroke="var(--color-on-surface-variant)" tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--color-surface-high)', border: 'none', borderRadius: '8px', color: 'var(--color-on-surface)' }}
                itemStyle={{ color: 'var(--color-on-surface)' }}
              />
              <Area type="monotone" dataKey="forecastArayNex" stroke="var(--color-primary-fixed)" strokeWidth={2} fillOpacity={1} fill="url(#colorArayNex)" name="ArayNex Forecast" />
              <Line type="monotone" dataKey="forecastManual" stroke="var(--color-outline-variant)" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Manual Forecast" />
              <Line type="monotone" dataKey="actual" stroke="var(--color-error)" strokeWidth={2} dot={false} name="Actual Load" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Detail Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-container rounded-xl p-6">
          <h3 className="text-lg font-manrope font-medium text-on-surface mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-error" /> 
            Deviation Incident (Block 57)
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-outline-variant/20 pb-3">
              <span className="text-on-surface-variant text-sm">Manual Forecast</span>
              <span className="text-on-surface font-medium">1,200 MW</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-3">
              <span className="text-on-surface-variant text-sm">Actual Demand (Temp Spike)</span>
              <span className="text-error font-medium">1,350 MW (+150 MW var)</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-on-surface-variant text-sm">ArayNex AI Forecast</span>
              <span className="text-primary-fixed font-medium">1,340 MW (Avoids penalty)</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-xl p-6">
          <h3 className="text-lg font-manrope font-medium text-on-surface mb-4">Un-Requisitioned Surplus (URS)</h3>
          <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
            State Thermal Plant X was backed down today due to cheaper solar availability. ArayNex's Financial MOD Engine recommended selling 50MW on the RTM to recover sunk fixed capacity charges.
          </p>
          <div className="bg-surface-low p-4 rounded-lg flex justify-between items-center border border-outline-variant/20">
            <div>
              <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Recommended Action</div>
              <div className="text-sm font-medium text-on-surface">Sell 50MW @ ₹4.5/unit (14:00 RTM)</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Lost Opportunity</div>
              <div className="text-lg font-bold text-secondary-fixed">₹14.0 Lakhs</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
