import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, FileKey, ActivitySquare, Server, Command } from 'lucide-react';
import Dashboard from './Dashboard';
import { H1, H2, H3, P, Lead } from '../components/ui/Typography';
import { Card, CardContent } from '../components/ui/Card';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Platform = () => {
  return (
    <div className="w-full bg-surface-lowest pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[800px] mesh-gradient pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Deep Technical Hero */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-fixed/10 text-secondary-fixed text-xs font-mono font-semibold mb-6 uppercase tracking-[0.2em] border border-secondary-fixed/20">
              System Architecture v2.4
            </div>
            <H1 className="mb-6 text-5xl md:text-7xl">The ArayNex <span className="text-secondary-fixed">Engine</span></H1>
            <Lead className="text-xl">
              A high-frequency AI orchestration layer designed to execute automated real-time power dispatch and predictive financial modelling at State Load Dispatch Center (SLDC) scales.
            </Lead>
          </motion.div>
        </div>

        {/* The Dashboard Mockup Section (Showcase immediately) */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <H2 className="mb-4 text-4xl">Command Center Interface</H2>
            <P className="max-w-2xl mx-auto text-lg">
              Below is a live rendering of the ArayNex Shadow Mode UI. During the initial 21-day pilot, the system operates non-invasively, providing a high-fidelity visual feed of the revenue and grid stability impact available through our engine.
            </P>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="rounded-2xl border border-outline-variant/30 overflow-hidden bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98] hover:scale-100 transition-transform duration-700"
          >
            <div className="bg-surface-low border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between" aria-hidden="true">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-error"/>
                <div className="w-3.5 h-3.5 rounded-full bg-secondary-fixed"/>
                <div className="w-3.5 h-3.5 rounded-full bg-primary-fixed"/>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-on-surface-variant bg-surface-lowest px-3 py-1 rounded-md border border-outline-variant/20">
                <Server className="w-3 h-3" /> core.araynex.engine:443
              </div>
            </div>
            <div className="p-4 md:p-8 bg-surface-lowest pointer-events-none relative">
              <div className="absolute inset-0 bg-primary-fixed/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Dashboard />
            </div>
          </motion.div>
        </div>

        {/* Deep Dive Component Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <H2 className="text-4xl mb-6">Algorithm Specifications</H2>
            <P className="text-lg mb-8 leading-relaxed">
              We replace legacy manual spreadsheets with deep learning models trained on 100+ years of meteorological variance, SCADA frequency histories, and thermal plant ramp-rate constraints.
            </P>
            
            <div className="space-y-4">
              {[
                { label: 'Forecast Resolution', val: '15-Minute Blocks (96/day)' },
                { label: 'Confidence Interval', val: '>98.4% Accuracy' },
                { label: 'Latency (Grid to Engine)', val: '< 200 milliseconds' },
                { label: 'Data Processing Rate', val: '4TB / Day (Telemetry)' }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant font-medium">{spec.label}</span>
                  <span className="font-mono text-primary-fixed">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <Card className="hover:border-primary-fixed/30 transition-colors bg-surface-low border-outline-variant/20 shadow-none">
              <CardContent className="p-10">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 border border-outline-variant/20 shadow-sm">
                  <Command className="w-6 h-6 text-primary-fixed" aria-hidden="true" />
                </div>
                <H3 className="mb-4 text-2xl">Financial MOD Logic (Alpha)</H3>
                <P>
                  Merit Order Dispatch inherently misprices sunk capital. When cheap solar injects into the grid, legacy thermal plants are backed down, yet DISCOMs must still pay fixed capacity charges. ArayNex's "Fixed-Cost Offsetter" automatically quantifies this Un-Requisitioned Surplus (URS) and algorithmically bids it on the Real-Time Market (RTM) exchanges to recapture revenue.
                </P>
              </CardContent>
            </Card>

            <Card className="hover:border-secondary-fixed/30 transition-colors bg-surface-low border-outline-variant/20 shadow-none">
              <CardContent className="p-10">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 border border-outline-variant/20 shadow-sm">
                  <BarChart3 className="w-6 h-6 text-secondary-fixed" aria-hidden="true" />
                </div>
                <H3 className="mb-4 text-2xl">Virtual PPA Settlement Engine</H3>
                <P>
                  Enabling compliance with India's aggressive Renewable Purchase Obligations (RPO). Instead of physically wiring solar plants, the Engine settles purely financial renewable attributes across corporate buyers (C&I) and standard grid power, securely tracking green certificates on our immutable ledger.
                </P>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise Security & Trust */}
        <div className="py-24 border-t border-outline-variant/20 border-dashed">
          <div className="text-center mb-16">
            <H2 className="text-3xl mb-4">Enterprise-Grade Security Architecture</H2>
            <P className="max-w-2xl mx-auto">
              Handling national-level grid operations requires defense-in-depth methodologies. We do not compromise on security compliances.
            </P>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-lowest border border-outline-variant/20 text-center flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-on-surface mb-6 opacity-70" />
              <H3 className="text-xl mb-3">SOC 2 Type II Certified</H3>
              <P className="text-sm">Independently audited controls ensuring the absolute privacy, security, and availability of your SLDC telemetry.</P>
            </div>
            <div className="p-8 rounded-2xl bg-surface-lowest border border-outline-variant/20 text-center flex flex-col items-center">
              <FileKey className="w-12 h-12 text-on-surface mb-6 opacity-70" />
              <H3 className="text-xl mb-3">Zero-Trust Network Access</H3>
              <P className="text-sm">End-to-end TLS 1.3 encryption across all internal services. Strict role-based access control (RBAC) enforced at every node.</P>
            </div>
            <div className="p-8 rounded-2xl bg-surface-lowest border border-outline-variant/20 text-center flex flex-col items-center">
              <ActivitySquare className="w-12 h-12 text-on-surface mb-6 opacity-70" />
              <H3 className="text-xl mb-3">Air-Gapped Operational State</H3>
              <P className="text-sm">Phase 1 deployment reads SCADA states strictly via one-way diodes. The engine cannot inadvertently issue dispatch commands to hardware.</P>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Platform;
