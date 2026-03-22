import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Database, Calculator, ArrowRight, Activity } from 'lucide-react';
import { H1, H2, H3, P, Lead } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const formatCurrency = (value: number) => {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} Lakh`;
  return `₹${value.toLocaleString('en-IN')}`;
};

const ImpactReport = () => {
  const [step, setStep] = useState(1);
  const [peakLoad, setPeakLoad] = useState(3000);
  const [dsmPenalty, setDsmPenalty] = useState(12); // Extrapolated annual %
  const [renewables, setRenewables] = useState(25);
  
  const [simulatedLoss, setSimulatedLoss] = useState(0);
  const [simulatedRecapture, setSimulatedRecapture] = useState(0);

  // Dynamic simulation logic
  useEffect(() => {
    // Highly simplified fake math for UI interactivity
    const dailyVolume = peakLoad * 24 * 0.65; // MW to MWh approx
    const roughPrice = 4.5; // Rs per unit
    const annualSpend = dailyVolume * roughPrice * 1000 * 365;
    
    // Extrapolate penalty risk mathematically
    const penaltyRisk = annualSpend * (dsmPenalty / 100) * (renewables / 100);
    const recapture = penaltyRisk * 0.84; // 84% AI reduction
    
    setSimulatedLoss(penaltyRisk);
    setSimulatedRecapture(recapture);
  }, [peakLoad, dsmPenalty, renewables]);

  return (
    <div className="min-h-screen bg-[#05070A] pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-error/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Copy & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-outline-variant/30 text-on-surface text-xs font-semibold mb-8 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(58,255,194,0.1)] w-fit">
            <Calculator className="w-4 h-4 text-primary-fixed" />
            Live Shadow Audit
          </div>
          
          <H1 className="mb-6 text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter">
             Project your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary-fixed">Recapture.</span>
          </H1>
          
          <Lead className="mb-12 text-on-surface-variant font-normal leading-relaxed text-lg">
             Adjust the telemetry sliders to simulate the structural financial leakage existing within your current dispatch framework, and immediately see what the ArayNex Intelligence Engine can durably recapture.
          </Lead>

          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-outline-variant/20 rounded-2xl p-8 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 left-0 w-1 h-full bg-error shadow-[0_0_15px_rgba(255,84,73,1)]" />
             <H3 className="text-xl text-on-surface mb-2 flex items-center gap-2"><Activity className="w-5 h-5 text-error" /> Simulated System Leakage</H3>
             <P className="text-sm text-on-surface-variant mb-6">Estimated annual Un-Requisitioned Surplus & DSM combined exposure</P>
             <div className="text-5xl font-mono text-error font-bold mb-8 tracking-tighter">
               {formatCurrency(simulatedLoss)}
             </div>

             <div className="w-full h-px bg-outline-variant/20 mb-8" />
             
             <div className="absolute top-0 right-0 w-1 h-full bg-primary-fixed shadow-[0_0_15px_rgba(58,255,194,1)]" />
             <H3 className="text-xl text-on-surface mb-2 flex items-center gap-2"><Database className="w-5 h-5 text-primary-fixed" /> ArayNex Recapture Target</H3>
             <P className="text-sm text-on-surface-variant mb-6">Predicted capital recovered via High-Frequency 96-Block Optimization</P>
             <div className="text-6xl font-mono text-primary-fixed font-bold tracking-tighter">
               {formatCurrency(simulatedRecapture)}
             </div>
          </div>
        </div>

        {/* Right Side: Interactive Report Configurator */}
        <div className="lg:col-span-7">
          <div className="bg-[#0A0D14]/80 backdrop-blur-3xl rounded-[2rem] border border-outline-variant/20 shadow-2xl p-8 md:p-12 relative">
             <div className="flex justify-between items-center mb-12 border-b border-outline-variant/10 pb-6">
                <H2 className="text-2xlm font-mono text-on-surface tracking-tight">System Parameters Setup</H2>
                <div className="text-xs font-mono text-primary-fixed bg-primary-fixed/10 px-3 py-1 rounded-full border border-primary-fixed/20 animate-pulse">
                  Step {step} of 2
                </div>
             </div>

             {step === 1 ? (
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                 
                 {/* Slider 1: Peak Load */}
                 <div>
                   <div className="flex justify-between items-end mb-4">
                     <div>
                       <label className="block text-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-1">State Demanded Peak Load</label>
                       <span className="text-xs text-on-surface-variant/60">Total MW capacity required at evening peak</span>
                     </div>
                     <span className="text-3xl font-mono text-on-surface font-bold">{peakLoad.toLocaleString('en-IN')} MW</span>
                   </div>
                   <input 
                     type="range" min="500" max="25000" step="100" 
                     value={peakLoad} onChange={(e) => setPeakLoad(Number(e.target.value))}
                     className="w-full h-2 bg-surface-high rounded-lg appearance-none cursor-pointer accent-primary-fixed"
                   />
                 </div>

                 {/* Slider 2: Renewables */}
                 <div>
                   <div className="flex justify-between items-end mb-4">
                     <div>
                       <label className="block text-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-1">Renewable Penetration</label>
                       <span className="text-xs text-on-surface-variant/60">% of total generation from Solar/Wind</span>
                     </div>
                     <span className="text-3xl font-mono text-on-surface font-bold">{renewables}%</span>
                   </div>
                   <input 
                     type="range" min="0" max="80" step="1" 
                     value={renewables} onChange={(e) => setRenewables(Number(e.target.value))}
                     className="w-full h-2 bg-surface-high rounded-lg appearance-none cursor-pointer accent-primary-fixed"
                   />
                 </div>

                 {/* Slider 3: DSM Penalty */}
                 <div>
                   <div className="flex justify-between items-end mb-4">
                     <div>
                       <label className="block text-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-1">Estimated DSM Penalty Risk</label>
                       <span className="text-xs text-on-surface-variant/60">Rough % of energy portfolio exposed to deviation</span>
                     </div>
                     <span className="text-3xl font-mono text-on-surface font-bold">{dsmPenalty}%</span>
                   </div>
                   <input 
                     type="range" min="1" max="30" step="1" 
                     value={dsmPenalty} onChange={(e) => setDsmPenalty(Number(e.target.value))}
                     className="w-full h-2 bg-surface-high rounded-lg appearance-none cursor-pointer accent-error"
                   />
                 </div>

                 <div className="pt-6 border-t border-outline-variant/10 flex justify-end">
                   <Button size="lg" className="h-14 px-8 text-lg font-bold gap-3" onClick={() => setStep(2)}>
                     Lock Parameters & Continue <ArrowRight className="w-5 h-5" />
                   </Button>
                 </div>
               </motion.div>
             ) : (
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                 
                 <div className="bg-primary-fixed/5 border border-primary-fixed/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
                    <ShieldAlert className="w-6 h-6 text-primary-fixed shrink-0" />
                    <P className="text-sm text-on-surface m-0 leading-relaxed font-mono">
                      Your telemetry indicates an estimated <strong className="text-error">{formatCurrency(simulatedLoss)}</strong> in systemic capital leakage. Run a fully confidential Shadow Audit on your historical SCADA data to prove exact recapture value.
                    </P>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Entity Name</label>
                     <input type="text" className="w-full bg-surface-lowest border border-outline-variant/30 rounded-lg h-12 px-4 text-on-surface focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all" placeholder="e.g. MSEDCL / Tata Power" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Entity Type</label>
                     <select className="w-full bg-surface-lowest border border-outline-variant/30 rounded-lg h-12 px-4 text-on-surface focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all">
                       <option>State DISCOM</option>
                       <option>Strategic IPP</option>
                       <option>Grid Operator (SLDC/RLDC)</option>
                       <option>Enterprise C&I Consumer</option>
                     </select>
                   </div>
                   <div className="space-y-2 col-span-2">
                     <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Work Email</label>
                     <input type="email" className="w-full bg-surface-lowest border border-outline-variant/30 rounded-lg h-12 px-4 text-on-surface focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all" placeholder="CTO / Grid Director Email" />
                   </div>
                 </div>

                 <div className="pt-8 border-t border-outline-variant/10 flex items-center justify-between">
                   <button onClick={() => setStep(1)} className="text-on-surface-variant hover:text-on-surface text-sm font-semibold uppercase tracking-widest">
                     &larr; Refine Parameters
                   </button>
                   <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-[0_0_30px_rgba(58,255,194,0.15)] bg-surface-highest text-primary-fixed hover:bg-primary-fixed hover:text-surface-lowest border border-primary-fixed/30">
                     Request Secure Audit Key
                   </Button>
                 </div>
               </motion.div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImpactReport;
