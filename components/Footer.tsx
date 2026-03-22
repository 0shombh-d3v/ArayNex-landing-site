import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-lowest border-t border-outline-variant/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
              <Zap className="w-5 h-5 text-surface-lowest" />
            </div>
            <span className="text-2xl font-manrope font-bold text-on-surface tracking-wide">ArayNex</span>
          </Link>
          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
            Integrated Resource Planning platform built for DISCOMs and State Load Dispatch Centers. Unlocking durably efficient operations at scale.
          </p>
        </div>
        
        <div>
            <h4 className="font-semibold text-on-surface mb-6">Platform</h4>
            <ul className="space-y-4 text-on-surface-variant font-medium">
              <li><Link to="/platform/forecaster" className="hover:text-primary transition-colors">AI Forecaster</Link></li>
              <li><Link to="/platform/mod-engine" className="hover:text-primary transition-colors">Financial MOD Engine</Link></li>
              <li><Link to="/platform/vppa" className="hover:text-primary transition-colors">VPPA Marketplace</Link></li>
            </ul>
          </div>

        <div>
          <h4 className="text-on-surface font-manrope font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/thesis" className="hover:text-primary transition-colors">The Core Thesis</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-outline-variant/10 text-xs text-on-surface-variant flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} ArayNex Technology. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-on-surface transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-on-surface transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
