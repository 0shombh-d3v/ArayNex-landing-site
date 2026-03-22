import { motion } from 'framer-motion';
import { Cpu, CloudRain, Sun, Activity, Maximize, AlertTriangle, Play, BarChart2 } from 'lucide-react';
import { H1, P } from '../components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Forecaster = () => {
  return (
    <div className="min-h-screen bg-[#05070A] pt-24 pb-20">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-outline-variant/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded bg-primary-fixed/10 flex items-center justify-center border border-primary-fixed/20 shadow-[0_0_15px_rgba(58,255,194,0.1)]">
                <Cpu className="w-5 h-5 text-primary-fixed" />
              </div>
              <H1 className="text-3xl font-mono tracking-tight m-0">Hyper-Local AI Forecaster</H1>
            </div>
            <P className="text-on-surface-variant font-mono text-sm">STATE LOAD DISPATCH CENTER &bull; LIVE TELEMETRY</P>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-3 flex flex-col items-end">
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">Model Confidence</span>
              <span className="text-xl font-bold font-mono text-primary-fixed">98.84%</span>
            </div>
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-3 flex flex-col items-end">
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">Active Blocks</span>
              <span className="text-xl font-bold font-mono text-on-surface">96 / 96</span>
            </div>
          </div>
        </div>

        {/* Top Operational Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-surface-lowest border-outline-variant/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-secondary-fixed" /> Humidity Spike Detected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-bold font-mono text-error">+4.2%</span>
                 <span className="text-xs text-on-surface-variant">Zone 3 (Coastal)</span>
              </div>
              <div className="mt-2 text-xs text-error bg-error/10 px-2 py-1 rounded inline-block">Triggering AC Load +120MW</div>
            </CardContent>
          </Card>

          <Card className="bg-surface-lowest border-outline-variant/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary-fixed" /> Solar Irradiance Drop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-bold font-mono text-secondary-fixed">-14.5%</span>
                 <span className="text-xs text-on-surface-variant">Expected by 14:00</span>
              </div>
              <div className="mt-2 text-xs text-secondary-fixed bg-secondary-fixed/10 px-2 py-1 rounded inline-block">Cloud cover moving East</div>
            </CardContent>
          </Card>

          <Card className="bg-surface-lowest border-outline-variant/20 md:col-span-2">
             <CardContent className="p-6 flex items-center justify-between h-full">
               <div>
                  <h4 className="text-sm uppercase tracking-widest text-on-surface-variant mb-2">Algorithm Status</h4>
                  <div className="flex items-center gap-3">
                     <span className="relative flex h-3 w-3">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-fixed"></span>
                     </span>
                     <span className="text-xl font-mono text-on-surface">Auto-Retraining Models</span>
                  </div>
               </div>
               <Button variant="outline" size="sm" className="gap-2 border-primary-fixed/30 text-primary-fixed hover:bg-primary-fixed/10">
                 <Play className="w-4 h-4" /> Force Epoch Run
               </Button>
             </CardContent>
          </Card>
        </div>

        {/* Main Grid View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-surface-lowest border-outline-variant/30 h-[500px] flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <Button variant="ghost" size="icon" className="text-on-surface-variant hover:text-primary-fixed">
                   <Maximize className="w-4 h-4" />
                 </Button>
               </div>
               <CardHeader>
                 <CardTitle className="flex items-center gap-2 m-0 text-lg">
                   <Activity className="w-5 h-5 text-primary-fixed" /> 96-Block Dispatch Forecast Curve
                 </CardTitle>
               </CardHeader>
               <CardContent className="flex-1 flex items-end relative p-6">
                 {/* Fake Chart Implementation */}
                 <div className="absolute inset-x-6 top-6 bottom-6 border-b border-l border-outline-variant/20 flex flex-col justify-between pb-8">
                   {[8000, 6000, 4000, 2000, 0].map(val => (
                     <div key={val} className="w-full relative h-[1px] bg-outline-variant/10">
                       <span className="absolute -left-10 -top-2 text-xs font-mono text-on-surface-variant">{val}</span>
                     </div>
                   ))}
                 </div>
                 <div className="relative w-full h-[80%] flex items-end justify-between px-2 pt-8 z-10">
                   {Array.from({ length: 24 }).map((_, i) => {
                     const height = 40 + Math.sin(i * 0.4) * 30 + Math.random() * 10;
                     const isPeak = height > 75;
                     return (
                       <motion.div 
                         key={i} 
                         initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 1, delay: i * 0.05 }}
                         className={`w-3 rounded-t-sm relative group cursor-pointer ${isPeak ? 'bg-error' : 'bg-primary-fixed/60 hover:bg-primary-fixed'}`}
                       >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-outline-variant px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap z-20 transition-opacity">
                           Blk {i * 4}: {Math.floor(height * 80)} MW
                         </div>
                       </motion.div>
                     );
                   })}
                 </div>
                 <div className="absolute bottom-2 left-6 right-6 flex justify-between text-xs font-mono text-on-surface-variant/40 pl-2">
                   <span>00:00</span>
                   <span>06:00</span>
                   <span>12:00</span>
                   <span>18:00</span>
                   <span>24:00</span>
                 </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-surface-lowest border-outline-variant/30 h-[500px] flex flex-col">
              <CardHeader className="border-b border-outline-variant/10 pb-4">
                <CardTitle className="text-lg flex items-center gap-2 m-0">
                  <AlertTriangle className="w-5 h-5 text-error" /> Predicted Deviations
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-0">
                <div className="divide-y divide-outline-variant/10">
                  {[
                    { block: '42', time: '10:30', diff: '+120 MW', cost: '₹ 8.4L', type: 'Surge' },
                    { block: '55', time: '13:45', diff: '-85 MW', cost: '₹ 4.2L', type: 'Drop' },
                    { block: '71', time: '17:45', diff: '+210 MW', cost: '₹ 18.5L', type: 'Critical' },
                    { block: '88', time: '22:00', diff: '-40 MW', cost: '₹ 1.1L', type: 'Normal' },
                  ].map((dev, i) => (
                    <div key={i} className="p-4 hover:bg-surface/50 transition-colors cursor-pointer flex justify-between items-center group">
                      <div>
                        <div className="font-mono text-sm text-on-surface mb-1">Block {dev.block} <span className="text-on-surface-variant">({dev.time})</span></div>
                        <div className="text-xs uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                          <BarChart2 className="w-3 h-3" /> {dev.type}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-mono font-bold ${dev.type === 'Critical' ? 'text-error' : 'text-primary-fixed'}`}>{dev.diff}</div>
                        <div className="text-xs text-on-surface-variant mt-1">Risk: {dev.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Forecaster;
