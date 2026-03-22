import { motion } from 'framer-motion';
import { Mail, Building, User, Phone, Zap } from 'lucide-react';
import { H1, H2, P, Lead } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] pt-32 pb-20 overflow-hidden relative bg-surface-lowest">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-fixed/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-secondary-fixed/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-high border border-outline-variant/30 text-primary-fixed text-xs font-mono font-semibold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(58,255,194,0.1)] w-fit">
            <Zap className="w-3 h-3" /> Partner With Us
          </div>
          
          <H1 className="mb-6 text-5xl lg:text-7xl leading-tight">
            Initiate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary-fixed">Shadow Mode.</span>
          </H1>
          
          <Lead className="mb-10 text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Gain exclusive access to the ArayNex Intelligence Engine. We'll run a 21-day non-invasive pilot against your historical SCADA data and provide a targeted Daily Impact Report demonstrating exact Rupee savings.
          </Lead>

          <div className="space-y-6 text-on-surface-variant">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-outline-variant/20">
               <div className="w-12 h-12 bg-surface-low rounded-lg flex items-center justify-center border border-outline-variant/30 flex-shrink-0">
                 <Building className="w-5 h-5 text-secondary-fixed" />
               </div>
               <div>
                  <h4 className="font-semibold text-on-surface mb-1">Enterprise Sales</h4>
                  <p className="text-sm">enterprise@araynex.com</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel border-outline-variant/30 p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-focus-within:bg-primary-fixed/10" />
            
            <H2 className="text-3xl mb-2 relative z-10">Request Report</H2>
            <P className="text-on-surface-variant mb-8 relative z-10">All submissions are strictly confidential.</P>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-on-surface-variant ml-1">Full Name</label>
                   <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                     <input type="text" className="w-full bg-surface-lowest/50 border border-outline-variant/40 rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 transition-all font-inter" placeholder="John Doe" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-on-surface-variant ml-1">Work Email</label>
                   <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                     <input type="email" className="w-full bg-surface-lowest/50 border border-outline-variant/40 rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 transition-all font-inter" placeholder="john@discom.gov.in" />
                   </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-on-surface-variant ml-1">Organization Name</label>
                   <div className="relative">
                     <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                     <input type="text" className="w-full bg-surface-lowest/50 border border-outline-variant/40 rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 transition-all font-inter" placeholder="State Utility" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-on-surface-variant ml-1">Phone Number</label>
                   <div className="relative">
                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                     <input type="tel" className="w-full bg-surface-lowest/50 border border-outline-variant/40 rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 transition-all font-inter" placeholder="+91 999 999 9999" />
                   </div>
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface-variant ml-1">Current Challenges (Optional)</label>
                <textarea 
                  className="w-full bg-surface-lowest/50 border border-outline-variant/40 rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 transition-all font-inter resize-none h-32" 
                  placeholder="Tell us about your forecasting blind-spots or MOD inefficiencies..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-[0_0_20px_rgba(58,255,194,0.15)] mt-4">
                Deploy Intelligence Layer
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
