import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-surface border-b border-outline-variant/20 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search blocks, plants..." 
            className="bg-surface-low border-none rounded-md text-sm pl-9 pr-4 py-1.5 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary-fixed transition-shadow w-64"
          />
        </div>

        {/* Alerts */}
        <button className="relative p-2 rounded-full hover:bg-surface-low text-on-surface-variant hover:text-on-surface transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center border border-outline-variant/30">
            <User className="w-4 h-4 text-on-surface" />
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-on-surface leading-none">SLDC Admin</span>
            <span className="text-xs text-on-surface-variant mt-1">North-1 Region</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
