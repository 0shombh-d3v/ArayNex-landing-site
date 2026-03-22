import { motion } from 'framer-motion';
import { ArrowRight, Database, ShieldAlert, Cpu, Activity, TrendingUp, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { H1, H2, H3, P, Lead } from '../components/ui/Typography';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-surface-lowest">
      {/* Imposing Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#05070A]">
        {/* Deep Abstract Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-fixed/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary-fixed/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-outline-variant/30 text-on-surface text-sm font-semibold mb-8 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(58,255,194,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
              </span>
              Grid Intelligence Engine
            </div>
            
            <H1 className="mb-6 text-6xl lg:text-8xl leading-none tracking-tighter">
              Orchestrating <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary-fixed to-secondary-fixed">the Transition.</span>
            </H1>
            
            <Lead className="mb-10 max-w-2xl text-xl lg:text-2xl text-on-surface-variant font-normal leading-relaxed">
              ArayNex integrates AI-driven forecasting, live financial orchestration, and automated energy trading to eliminate multi-billion dollar revenue leaks for State-Owned DISCOMs and Strategic IPPs.
            </Lead>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Button size="lg" className="h-[60px] px-8 text-lg font-bold shadow-[0_0_40px_rgba(58,255,194,0.2)]" asChild>
                <Link to="/platform" className="gap-3">
                  Deploy Shadow Mode <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-[60px] px-8 text-lg hover:bg-surface-high transition-colors" asChild>
                <Link to="/thesis">
                  Read the Core Thesis
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 hidden lg:block"
          >
            {/* Extremely High-End Live Dispatch Terminal */}
            <div className="relative w-full bg-[#0A0D14]/80 backdrop-blur-3xl rounded-[2rem] overflow-hidden border border-outline-variant/20 shadow-[0_0_80px_rgba(0,0,0,0.8)] p-1">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/5 to-transparent pointer-events-none" />
               <div className="bg-[#05070A] rounded-[1.8rem] h-full w-full p-8 border border-outline-variant/10 relative overflow-hidden">
                 
                 {/* Terminal Header */}
                 <div className="flex justify-between items-center border-b border-outline-variant/10 pb-6 mb-8">
                   <div className="flex items-center gap-4">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-error" />
                       <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                       <div className="w-3 h-3 rounded-full bg-primary-fixed" />
                     </div>
                     <div className="text-xs font-mono text-on-surface-variant uppercase tracking-[0.3em]">
                       ArayNex Core OS v4.2
                     </div>
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono text-primary-fixed bg-primary-fixed/10 px-3 py-1 rounded-full border border-primary-fixed/20 shadow-[0_0_10px_rgba(58,255,194,0.2)]">
                     <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" /> LIVE DISPATCH
                     <span className="text-on-surface-variant ml-2 border-l border-primary-fixed/20 pl-2">BLK 57</span>
                   </div>
                 </div>
                 
                 {/* Main Telemetry */}
                 <div className="grid grid-cols-2 gap-8 mb-8">
                   <div>
                     <P className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">System Load Prediction</P>
                     <div className="flex items-end gap-3">
                       <H2 className="text-5xl font-mono m-0 tracking-tighter">14,205</H2>
                       <span className="text-lg text-on-surface-variant font-mono mb-1">MW</span>
                     </div>
                   </div>
                   <div className="text-right">
                     <P className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">Grid Imbalance Risk</P>
                     <div className="flex justify-end items-end gap-3">
                       <H2 className="text-5xl text-error font-mono m-0 tracking-tighter">-140</H2>
                       <span className="text-lg text-error/70 font-mono mb-1">MW</span>
                     </div>
                   </div>
                 </div>

                 {/* Visualization Graph Replacement */}
                 <div className="h-32 w-full bg-surface-lowest rounded-xl border border-outline-variant/20 mb-8 p-4 relative flex items-end gap-[2px]">
                   <div className="absolute top-4 left-4 text-xs font-mono text-on-surface-variant z-10">96-Block Dispatch Curve</div>
                   {Array.from({ length: 40 }).map((_, i) => (
                     <motion.div 
                       key={i}
                       initial={{ height: "10%" }}
                       animate={{ height: `${Math.random() * 60 + 20}%` }}
                       transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                       className={`w-full rounded-t-sm ${i > 25 && i < 35 ? 'bg-error/80 shadow-[0_0_10px_rgba(255,84,73,0.5)]' : 'bg-primary-fixed/30'}`}
                     />
                   ))}
                   <div className="absolute bottom-6 left-0 right-0 border-t border-error border-dashed pointer-events-none opacity-50 flex justify-end px-2">
                     <span className="text-[10px] text-error font-mono translate-y-1 bg-surface px-1">Trigger Threshold</span>
                   </div>
                 </div>
                 
                 {/* Execution Log */}
                 <div className="bg-[#0A0D14] rounded-xl p-5 border border-outline-variant/20 font-mono text-sm relative overflow-hidden group hover:border-primary-fixed/30 transition-colors">
                   <div className="absolute top-0 left-0 w-1 h-full bg-primary-fixed shadow-[0_0_15px_rgba(58,255,194,1)]" />
                   <P className="text-xs text-on-surface-variant mb-3 flex items-center justify-between">
                     <span>Automated RTM Intervention</span>
                     <span className="text-[10px] px-2 py-0.5 rounded bg-surface border border-outline-variant/30">Auto-Bidding Active</span>
                   </P>
                   <div className="space-y-2">
                     <div className="flex justify-between items-center text-on-surface">
                       <span className="flex items-center gap-2"><Lock className="w-3 h-3 text-on-surface-variant" /> Securing Capacity:</span>
                       <span className="text-primary-fixed font-bold tracking-wider">+140 MW</span>
                     </div>
                     <div className="flex justify-between items-center text-on-surface">
                       <span className="text-on-surface-variant">Avg Clearing Price:</span>
                       <span className="text-secondary-fixed">₹4.12/kWh</span>
                     </div>
                     <div className="w-full h-px bg-outline-variant/20 my-2" />
                     <div className="flex justify-between items-center">
                       <span className="text-on-surface-variant text-xs">Projected DSM Saving:</span>
                       <span className="text-on-surface font-semibold text-base">₹14.2 Lakhs</span>
                     </div>
                   </div>
                 </div>

               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extreme Enterprise Impact Metrics */}
      <section className="py-20 bg-surface border-y border-outline-variant/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-outline-variant/30">
            <div className="pl-0 md:pl-6">
              <div className="text-4xl md:text-5xl font-manrope font-bold text-on-surface mb-2">98.4%</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Forecasting Accuracy</div>
            </div>
            <div className="pl-6 md:pl-12">
              <div className="text-4xl md:text-5xl font-manrope font-bold text-on-surface mb-2">₹2.4B</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Penalties Prevented</div>
            </div>
            <div className="pl-6 md:pl-12">
              <div className="text-4xl md:text-5xl font-manrope font-bold text-on-surface mb-2">&lt;15m</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Dispatch Latency</div>
            </div>
            <div className="pl-6 md:pl-12">
              <div className="text-4xl md:text-5xl font-manrope font-bold text-primary-fixed mb-2">Tier-1</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">State Utility Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bento Box Capabilities */}
      <section className="py-32 bg-surface-lowest relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="mb-20 text-center md:text-left"
          >
            <H2 className="mb-6 max-w-4xl text-5xl">The Multi-Billion Dollar Engine</H2>
            <Lead className="max-w-3xl">
              We do not replace your infrastructure; we supercharge it. ArayNex sits as an intelligence layer atop your existing SCADA and financial systems.
            </Lead>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[300px]">
            {/* Large Feature 1 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 md:row-span-1 border border-outline-variant/30 rounded-3xl bg-surface p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:bg-primary-fixed/10" />
              <Cpu className="w-10 h-10 text-primary-fixed mb-6" />
              <H3 className="text-3xl mb-4">Hyper-Local AI Forecaster</H3>
              <P className="max-w-xl text-lg relative z-10">
                A 1% shift in weather spikes peak demand by 2.5%. Our engine ingests 100+ years of meteorological data and localized industrial calendars to predict demand across 96 daily blocks, obliterating Deviation Settlement Mechanism (DSM) penalties.
              </P>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-1 md:row-span-1 border border-outline-variant/30 rounded-3xl bg-surface p-8 relative overflow-hidden group">
               <Database className="w-8 h-8 text-secondary-fixed mb-4" />
               <H3 className="text-2xl mb-3">The "Duck Curve" Master</H3>
               <P className="relative z-10">
                 Volatile solar and wind energy makes manual dispatch impossible. SLDCs revise schedules up to 16 times daily to prevent grid collapse. We automate this.
               </P>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-1 md:row-span-1 border border-outline-variant/30 rounded-3xl bg-surface p-8 relative overflow-hidden group">
               <TrendingUp className="w-8 h-8 text-primary-fixed mb-4" />
               <H3 className="text-2xl mb-3">VPPA Settlement</H3>
               <P className="relative z-10">
                 Financial dashboards to seamlessly settle Virtual Power Purchase Agreements and meet critical Renewable Purchase Obligations.
               </P>
            </motion.div>

            {/* Large Feature 2 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 md:row-span-1 border border-outline-variant/30 rounded-3xl bg-surface p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-fixed/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 transition-all duration-700 group-hover:bg-secondary-fixed/10" />
              <Activity className="w-10 h-10 text-secondary-fixed mb-6" />
              <H3 className="text-3xl mb-4">Financial MOD Engine (Alpha)</H3>
              <P className="max-w-xl text-lg relative z-10">
                DISCOMs are locked into 25-year thermal PPAs. When cheaper solar pushes coal offline, DISCOMs still pay billions in sunk capacity charges. Our logic engine identifies this Un-Requisitioned Surplus and automates trading on the Real-Time Market.
              </P>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Pipeline Architecture */}
      <section className="py-32 bg-surface border-t border-outline-variant/20 outline-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 flex flex-col items-center">
             <H2 className="text-sm font-semibold text-primary-fixed uppercase tracking-widest mb-4">Enterprise Architecture</H2>
             <H3 className="text-4xl md:text-5xl font-bold text-center">Predict, Plan, Transact.</H3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-outline-variant/30 hidden md:block -z-10" />
             
             {[
               { step: '01', title: 'Data Ingestion', desc: 'Secure APIs pull live SCADA, PPA portfolios, and grid frequency data.' },
               { step: '02', title: 'Intelligence Core', desc: 'Models run millions of simulations to forecast the 96 daily blocks.' },
               { step: '03', title: 'Financial Execution', desc: 'Automated dispatch orders sent directly to the RTM exchanges.' }
             ].map((node, i) => (
                <div key={i} className="bg-surface-lowest border border-outline-variant/40 rounded-2xl p-8 w-full md:w-1/3 relative shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-lg absolute -top-6 left-8 shadow-[0_0_15px_rgba(58,255,194,0.3)]">
                    {node.step}
                  </div>
                  <H3 className="text-2xl mt-4 mb-3">{node.title}</H3>
                  <P>{node.desc}</P>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="py-32 bg-surface-lowest relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed/10 via-surface-lowest to-surface-lowest z-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <H2 className="text-5xl md:text-7xl font-bold mb-8">Ready to plug the leak?</H2>
          <Lead className="text-on-surface-variant mb-12 max-w-2xl mx-auto text-xl">
            Activating Phase 1 (The Leakage Plugger) takes just 14-21 days with exactly zero hardware installation. Request a Shadow Mode onboarding today.
          </Lead>
          <Button size="lg" className="h-[60px] px-10 text-xl font-bold border border-primary-fixed/20 shadow-[0_0_30px_rgba(58,255,194,0.1)] bg-surface text-primary-fixed hover:bg-primary-fixed hover:text-surface-lowest" asChild>
            <Link to="/impact-report" className="gap-3">
              Request Daily Impact Report <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>
          </Button>
          <p className=" mt-8 text-sm text-on-surface-variant/60 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4" /> Strictly confidential data processing. ISO 27001 Grade Security.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
