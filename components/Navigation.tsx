import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, ArrowRight, Sun, Moon, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Platform', 
      path: '/platform',
      dropdown: [
        { name: 'AI Forecaster', path: '/platform/forecaster' },
        { name: 'Financial MOD Engine', path: '/platform/mod-engine' },
        { name: 'VPPA Marketplace', path: '/platform/vppa' },
      ]
    },
    { 
      name: 'Company', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'The Core Thesis', path: '/thesis' },
        { name: 'Contact', path: '/contact' },
      ]
    },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300 border-b',
      scrolled 
        ? 'bg-surface/80 backdrop-blur-md border-outline-variant/20 py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center transition-transform group-hover:scale-105">
            <Zap className="w-5 h-5 text-surface-lowest" />
          </div>
          <span className="text-2xl font-manrope font-bold text-on-surface tracking-wide">ArayNex</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors py-2 group-hover:text-primary-fixed",
                  location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? "text-primary-fixed" : "text-on-surface-variant",
                  link.name === 'Home' && location.pathname === '/' ? "text-primary-fixed" : ""
                )}
              >
                {link.name}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-surface border border-outline-variant/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1 z-50">
                  {link.dropdown.map(subItem => (
                    <Link 
                      key={subItem.name} 
                      to={subItem.path}
                      className={clsx(
                         "text-sm font-medium px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between",
                         location.pathname === subItem.path ? "bg-primary-fixed/10 text-primary-fixed" : "text-on-surface hover:text-primary-fixed hover:bg-surface-high"
                      )}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex bg-surface border border-outline-variant/30 rounded-full p-1 gap-1">
            <button
              onClick={() => setTheme('light')}
              className={clsx("p-1.5 rounded-full transition-colors", theme === 'light' ? "bg-primary-fixed text-on-primary-fixed" : "text-on-surface-variant hover:text-on-surface")}
              aria-label="Light theme"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={clsx("p-1.5 rounded-full transition-colors", theme === 'dark' ? "bg-primary-fixed text-on-primary-fixed" : "text-on-surface-variant hover:text-on-surface")}
              aria-label="Dark theme"
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('system')}
              className={clsx("p-1.5 rounded-full transition-colors", theme === 'system' ? "bg-primary-fixed text-on-primary-fixed" : "text-on-surface-variant hover:text-on-surface")}
              aria-label="System theme"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
          <Link to="/impact-report" className="px-5 py-2.5 rounded bg-on-surface text-surface-lowest font-semibold hover:bg-surface-high hover:text-on-surface transition-all flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed">
            Request Impact Report <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-lowest border-b border-outline-variant/20 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-outline-variant/10">
              <Link 
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-on-surface py-3"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col pl-4 pb-2 border-l-2 border-outline-variant/10 ml-2">
                  {link.dropdown.map(subItem => (
                    <Link 
                      key={subItem.name} 
                      to={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-medium text-on-surface-variant hover:text-primary py-2"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
