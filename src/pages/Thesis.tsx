import { motion } from 'framer-motion';
import { Target, Zap, AlertTriangle, TrendingDown, Factory, Activity, DollarSign } from 'lucide-react';
import { H1, H2, H3, P, Lead } from '../components/ui/Typography';
import { Card, CardContent } from '../components/ui/Card';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Thesis = () => {
  return (
    <div className="w-full bg-[#05070A] pt-32 pb-32 overflow-hidden relative min-h-screen">
      {/* Deep Space Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-error/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-fixed/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Thesis Header */}
        <div className="mb-24 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline-variant/30 text-error text-xs font-mono font-bold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(255,84,73,0.1)] w-fit mx-auto">
              <AlertTriangle className="w-4 h-4" /> The Fundamental Flaw
            </div>
            <H1 className="mb-8 text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
              The <span className="text-error font-medium">Calculus</span> <br /> of Ruin.
            </H1>
            <Lead className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Why State Utilities are collapsing under ₹6.77 Lakh Crore in structural debt, and why building more physical hardware is no longer the solution.
            </Lead>
          </motion.div>
        </div>

        {/* Global Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
           {[
             { num: '70%', label: 'Of Total Costs are Procurement', icon: <DollarSign className="w-6 h-6 text-on-surface-variant mb-4" /> },
             { num: '₹3L+', label: 'Daily Penalties (DSM)', icon: <Activity className="w-6 h-6 text-error mb-4" /> },
             { num: '25 Yrs', label: 'Rigid Thermal PPA Lock-ins', icon: <Factory className="w-6 h-6 text-on-surface-variant mb-4" /> },
           ].map((stat, i) => (
             <motion.div 
               key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
               className="bg-surface-low border border-outline-variant/20 rounded-2xl p-8 hover:border-outline-variant/40 transition-colors"
             >
               {stat.icon}
               <h4 className="text-5xl font-bold font-mono text-on-surface mb-2">{stat.num}</h4>
               <p className="text-sm uppercase tracking-widest text-on-surface-variant font-semibold">{stat.label}</p>
             </motion.div>
           ))}
        </div>

        {/* The Document Body - Bento Box Layout */}
        <div className="space-y-6">
          
          {/* Section 1: The Illusion of T&D Losses */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Card className="bg-surface-lowest border-outline-variant/20 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-outline-variant/10">
                  <H2 className="text-4xl lg:text-5xl mb-6">The Illusion of Hardware</H2>
                  <P className="text-on-surface-variant text-lg leading-relaxed mb-6">
                    For decades, the standard diagnosis for failing distribution companies (DISCOMs) in emerging markets has been "Transmission and Distribution (T&D) wire losses." The classic solution has been to pour billions into new transformers, smart meters, and grid hardening.
                  </P>
                  <div className="bg-error/5 border border-error/20 rounded-xl p-6 mt-8">
                     <H3 className="text-error font-medium mb-2 text-xl">The Mathematical Reality</H3>
                     <P className="text-on-surface m-0 font-medium">
                       They are not bleeding because wire resistance is too high; they are bleeding because 70% to 80% of a DISCOM’s cost lies entirely in power procurement, which is chained to analog, inefficient decision-making frameworks.
                     </P>
                  </div>
                </div>
                <div className="p-10 lg:p-16 bg-surface-low flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                   <div className="relative z-10 flex items-center gap-6">
                     <div className="flex-1 space-y-4">
                       <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden flex">
                         <div className="h-full bg-outline-variant/40 w-[20%]" />
                         <div className="h-full bg-error w-[80%]" />
                       </div>
                       <div className="flex justify-between text-xs font-mono tracking-widest uppercase">
                         <span className="text-on-surface-variant">20% Hardware Losses</span>
                         <span className="text-error font-bold">80% Procurement Costs</span>
                       </div>
                     </div>
                   </div>
                   <P className="text-on-surface-variant text-sm mt-12 relative z-10 border-l border-outline-variant pl-4">
                     You cannot buy your way out of a debt cycle by upgrading hardware when the vast majority of capital outflow is dictated by the underlying software and trading logic.
                   </P>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 2: The Sunk-Cost Trap */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Card className="bg-surface-lowest border-outline-variant/20 overflow-hidden shadow-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="p-10 lg:p-16 col-span-3 bg-surface-lowest z-10 relative">
                  <H2 className="text-4xl lg:text-5xl mb-6">The Sunk-Cost Paradox</H2>
                  <P className="text-on-surface-variant text-lg leading-relaxed mb-6">
                    Historically, grids were built around baseload thermal generation. DISCOMs signed inflexible 25-year Power Purchase Agreements (PPAs) with coal giants. These contracts mandate massive "Capacity Charges" simply to keep the plant available, regardless of whether the electron is utilized.
                  </P>
                  <P className="text-on-surface-variant text-lg leading-relaxed">
                    Now, zero-marginal cost solar energy floods the grid at noon, forcing operators to back down thermal plants to 40% efficiency. But the Fixed Capacity Charges remain fully payable. <strong className="text-on-surface font-medium">A DISCOM often pays for electricity twice:</strong> once to the thermal generator for unused capacity, and once to the renewable generator for the actual daylight electron.
                  </P>
                </div>
                <div className="col-span-2 bg-surface-low border-t lg:border-t-0 lg:border-l border-outline-variant/10 p-10 flex flex-col justify-center gap-8">
                  <div className="bg-surface border border-outline-variant/20 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary-fixed/10 transition-colors" />
                    <H3 className="text-xl mb-2 text-on-surface flex items-center gap-2"><Target className="w-5 h-5 text-secondary-fixed" /> Legacy Baseload</H3>
                    <P className="text-sm m-0 text-on-surface-variant">Coal plants ran at 85% Plant Load Factor. Fixed costs were efficiently amortized over massive volumes.</P>
                  </div>
                  <div className="bg-surface border border-outline-variant/20 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-error/10 transition-colors" />
                    <H3 className="text-xl mb-2 text-on-surface flex items-center gap-2"><TrendingDown className="w-5 h-5 text-error" /> The Duck Curve</H3>
                    <P className="text-sm m-0 text-on-surface-variant">Thermal plants backed down to 40% PLF during daytime solar peaks. Fixed capacity tariffs become ruinous.</P>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 3: The AI Arbitrage */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Card className="bg-[#0A0F16] border-primary-fixed/20 overflow-hidden shadow-[0_0_50px_rgba(58,255,194,0.05)] relative group">
              <div className="absolute inset-0 bg-primary-fixed/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <CardContent className="p-10 md:p-16 lg:p-24 text-center relative z-10">
                <Zap className="w-12 h-12 text-primary-fixed mx-auto mb-8" />
                <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">The Intelligence Arbitrage</H2>
                <div className="text-xl md:text-2xl text-on-surface-variant max-w-4xl mx-auto leading-relaxed space-y-8">
                  <P>
                    You cannot solve an algorithmic financial problem with concrete and copper wire. You solve it with <span className="text-on-surface font-semibold bg-primary-fixed/10 px-2 py-1 rounded">high-frequency software</span>.
                  </P>
                  <P>
                    ArayNex orchestrates thousands of discrete data points—from satellite weather irradiances to Live Merit Order dispatch ledgers—allowing SLDCs to mathematically optimize their 15-minute dispatch blocks in real-time. 
                  </P>
                  <P className="text-on-surface font-medium border-l-4 border-primary-fixed pl-6 mx-auto text-left max-w-3xl">
                    We don't just predict the load; we automatically trade the Un-Requisitioned Surplus (URS) thermal capacity on the Real-Time Market, <strong className="text-primary-fixed">weaponizing a utility's sunk costs into a revenue-generating asset.</strong>
                  </P>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Thesis;
