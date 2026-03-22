import { motion } from 'framer-motion';
import { ShieldCheck, Target, Globe2, Briefcase } from 'lucide-react';
import { H1, H2, H3, P, Lead } from '../components/ui/Typography';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const About = () => {
  return (
    <div className="w-full bg-surface-lowest pt-32 pb-20 overflow-hidden relative">
      {/* Global abstract background */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] mesh-gradient pointer-events-none opacity-40 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Authoritative Hero */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-high border border-outline-variant/30 text-on-surface-variant text-xs font-mono font-semibold mb-8 uppercase tracking-[0.2em]">
              Company Overview & Thesis
            </div>
            <H1 className="mb-8 text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
              Redefining the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary-fixed">Economics of Power.</span>
            </H1>
            <Lead className="text-xl md:text-2xl text-on-surface-variant font-normal max-w-3xl mx-auto leading-relaxed">
              We build high-frequency automated intelligence layers for national power grids. ArayNex is on a mission to completely eradicate multi-billion-dollar inefficiencies plaguing State-Owned DISCOMs globally.
            </Lead>
          </motion.div>
        </div>

        {/* Global Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
           {[
             { num: '₹6.7T', label: 'Accumulated DISCOM Debt' },
             { num: '70%', label: 'Cost of Power Procurement' },
             { num: '16x', label: 'Daily Dispatch Revisions' },
             { num: '0.0ms', label: 'Downtime Acceptance' },
           ].map((stat, i) => (
             <motion.div 
               key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
               className="bg-surface border border-outline-variant/20 rounded-2xl p-8 text-center glass-panel shadow-sm hover:border-primary-fixed/30 transition-colors"
             >
               <h4 className="text-4xl lg:text-5xl font-bold font-manrope text-on-surface mb-2">{stat.num}</h4>
               <p className="text-sm uppercase tracking-widest text-on-surface-variant font-semibold">{stat.label}</p>
             </motion.div>
           ))}
        </div>

        {/* The Core Thesis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <H2 className="text-4xl md:text-5xl mb-6">The Global Mandate</H2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <P>
                The transition to renewable energy has broken legacy power economics. State-owned electricity distribution companies (DISCOMs) are trapped in a chronic debt cycle. While the industry fixates on transmission and distribution (T&D) wire losses, the mathematical reality is that <strong>70% of a DISCOM's cost lies in power procurement.</strong>
              </P>
              <P>
                A 1% shift in weather variance spikes peak demand by 2.5%, leading to devastating Deviation Settlement Mechanism (DSM) penalties. Meanwhile, rigid 25-year thermal power purchase agreements force utilities to pay billions in sunk capacity charges even when cheaper solar pushes coal offline.
              </P>
              <P className="text-on-surface font-medium border-l-4 border-primary-fixed pl-6 py-2">
                ArayNex was founded precisely to solve this. We do not build physical wires; we build the algorithmic brain that directs the flow of capital and megawatts across the grid.
              </P>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full bg-surface-lowest border border-outline-variant/30 rounded-3xl p-8 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-low z-0" />
               <Globe2 className="w-24 h-24 text-primary-fixed/40 mb-8 relative z-10 animate-pulse" />
               <H3 className="text-3xl relative z-10 mb-4 tracking-tight">Systemic Grid Intelligence</H3>
               <P className="relative z-10 max-w-sm">Operating as a non-invasive telemetry overlay above existing grid hardware.</P>
             </div>
          </motion.div>
        </div>

        {/* Enterprise Deployment Methodology */}
        <div className="w-full mb-32 bg-surface py-24 border-y border-outline-variant/20 -mx-6 px-6 relative z-10 max-w-[100vw]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <H2 className="text-4xl md:text-5xl mb-4">Enterprise Deployment Architecture</H2>
              <Lead className="max-w-3xl mx-auto">
                Selling mission-critical software to State Load Dispatch Centers (SLDCs) requires absolute trust. Our phased, zero-risk integration model ensures deployment without compromising grid stability.
              </Lead>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: 'Phase 1', title: 'The Leakage Plugger', timeline: 'Months 1-8',
                  desc: 'Focus purely on hyper-local forecasting and DSM penalty reduction. Low integration barrier, no hardware required, immediate measurable ROI. We translate MW errors into absolute Rupee figures, operating strictly in "Shadow Mode".'
                },
                {
                  phase: 'Phase 2', title: 'The MOD Cost Cutter', timeline: 'Months 9-18',
                  desc: 'We activate the Smart Merit Order Dispatch (MOD) Engine. Utilizing data ingested during Phase 1, the AI automates live dispatch decisions and monetizes idle thermal assets on real-time power exchanges (DAM/RTM).'
                },
                {
                  phase: 'Phase 3', title: 'The VPPA Future Proofer', timeline: 'Year 2+',
                  desc: 'Implementation of Layer 3: Virtual Power Purchase Agreement Management. Equipping the state to hit aggressive decarbonization mandates and seamlessly manage purely financial renewable energy swaps.'
                }
              ].map((step, i) => (
                <Card key={i} className="bg-surface-lowest border-outline-variant/30 shadow-none hover:shadow-2xl hover:border-primary-fixed/30 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-fixed/10 transition-colors" />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="text-xs font-mono text-primary-fixed tracking-widest mb-3 uppercase">{step.timeline}</div>
                    <H3 className="text-2xl m-0">{step.phase}: <br /> <span className="text-on-surface-variant font-medium">{step.title}</span></H3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <P className="text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </P>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Trust */}
        <div className="text-center max-w-4xl mx-auto pb-10">
           <H2 className="text-3xl mb-12">Driven by Engineering Excellence</H2>
           <div className="flex flex-wrap items-center justify-center gap-6">
             <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-outline-variant/30">
               <ShieldCheck className="w-5 h-5 text-secondary-fixed" />
               <span className="font-semibold text-sm tracking-wide">SOC 2 Type II Audited</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-outline-variant/30">
               <Briefcase className="w-5 h-5 text-primary-fixed" />
               <span className="font-semibold text-sm tracking-wide">Enterprise SLA Guaranteed</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-outline-variant/30">
               <Target className="w-5 h-5 text-error" />
               <span className="font-semibold text-sm tracking-wide">Zero-Downtime Telemetry</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
