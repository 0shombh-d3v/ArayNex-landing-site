import { LayoutDashboard, Activity, Zap, TrendingUp, Briefcase } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Forecasting', icon: Activity, active: false },
  { name: 'Bleed Tracker', icon: Zap, active: true },
  { name: 'Market Trades', icon: TrendingUp, active: false },
  { name: 'Portfolio', icon: Briefcase, active: false },
  { name: 'Dashboard', icon: LayoutDashboard, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-surface-lowest flex flex-col border-r border-outline-variant/20 relative z-10 glass-panel">
      <div className="h-16 flex items-center px-6 border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          {/* ArayNex Logo Placeholder */}
          <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
            <Zap className="w-5 h-5 text-surface-lowest" />
          </div>
          <span className="text-xl font-manrope font-bold text-on-surface tracking-wide">ArayNex</span>
        </div>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={clsx(
              'w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative',
              item.active 
                ? 'bg-surface-high text-on-surface' 
                : 'text-on-surface-variant hover:bg-surface-low hover:text-on-surface'
            )}
          >
            {item.active && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-primary-fixed" />
            )}
            <item.icon className={clsx("w-5 h-5 mr-3", item.active ? "text-primary-fixed" : "text-on-surface-variant group-hover:text-on-surface")} />
            {item.name}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-outline-variant/20">
        <div className="bg-surface-low rounded-lg p-4">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-2">Grid Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
            <span className="text-sm text-primary-fixed font-medium">Frequency: 49.98 Hz</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
