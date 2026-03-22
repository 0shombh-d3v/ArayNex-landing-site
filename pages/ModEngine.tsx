import { motion } from 'framer-motion';
import { Database, TrendingUp, RefreshCcw, DollarSign, Activity, Settings, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { H1, H2, P } from '../components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ModEngine = () => {
  return (
    <div className="min-h-screen bg-[#05070A] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-fixed/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-outline-variant/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded bg-secondary-fixed/10 flex items-center justify-center border border-secondary-fixed/20 shadow-[0_0_15px_rgba(183,234,255,0.1)]">
                <Database className="w-5 h-5 text-secondary-fixed" />
              </div>
              <H1 className="text-3xl font-mono tracking-tight m-0">Financial MOD Engine</H1>
            </div>
            <P className="text-on-surface-variant font-mono text-sm">REAL-TIME MARKET (RTM) TRADING &bull; ZERO-INTERVENTION MODE</P>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
             <Button variant="outline" className="border-secondary-fixed/30 text-secondary-fixed hover:bg-secondary-fixed/10 font-mono gap-2">
                <Settings className="w-4 h-4" /> Trading Config
             </Button>
             <Button className="font-mono font-bold bg-secondary-fixed hover:bg-secondary text-on-surface gap-2 shadow-[0_0_20px_rgba(183,234,255,0.2)]">
                <Activity className="w-4 h-4" /> Auto-Execute RTM
             </Button>
          </div>
        </div>

        {/* Global Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <Card className="bg-surface-lowest border-outline-variant/20">
             <CardContent className="p-6">
               <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Total Sunk Cost Recaptured (YTD)</P>
               <div className="flex items-center gap-3">
                 <DollarSign className="w-8 h-8 text-secondary-fixed" />
                 <H2 className="text-4xl font-mono m-0">₹142.8 Cr</H2>
               </div>
             </CardContent>
           </Card>
           <Card className="bg-surface-lowest border-outline-variant/20">
             <CardContent className="p-6">
               <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Current URS (Un-Requisitioned Surplus)</P>
               <div className="flex items-center gap-3">
                 <Database className="w-8 h-8 text-on-surface" />
                 <H2 className="text-4xl font-mono m-0">485 MW</H2>
               </div>
             </CardContent>
           </Card>
           <Card className="bg-surface-lowest border-outline-variant/20">
             <CardContent className="p-6">
               <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Average RTM Clearing Price</P>
               <div className="flex items-center gap-3">
                 <TrendingUp className="w-8 h-8 text-primary-fixed" />
                 <H2 className="text-4xl font-mono m-0">₹5.14<span className="text-xl text-on-surface-variant">/kWh</span></H2>
               </div>
             </CardContent>
           </Card>
        </div>

        {/* Trade Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
           <div className="lg:col-span-3">
             <Card className="bg-surface-lowest border-outline-variant/20 h-full">
               <CardHeader className="border-b border-outline-variant/10 pb-4 flex flex-row items-center justify-between">
                 <CardTitle className="text-lg flex items-center gap-2 m-0 font-mono tracking-tight">
                    <RefreshCcw className="w-5 h-5 text-on-surface-variant" /> Live Trading Ledger (IEX / PXIL)
                 </CardTitle>
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
                   <span className="text-xs font-mono text-primary-fixed uppercase">Market Open</span>
                 </div>
               </CardHeader>
               <CardContent className="p-0">
                 <table className="w-full text-left border-collapse font-mono text-sm">
                   <thead>
                     <tr className="border-b border-outline-variant/10 bg-surface/50 text-xs text-on-surface-variant uppercase tracking-widest">
                       <th className="p-4 font-normal">Block</th>
                       <th className="p-4 font-normal">Plant ID</th>
                       <th className="p-4 font-normal">URS Vol.</th>
                       <th className="p-4 font-normal">Action</th>
                       <th className="p-4 font-normal text-right">Settlement (₹)</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[
                       { blk: '51 (12:45)', plant: 'TPS-KORBA-1', vol: '120 MW', action: 'SELL_RTM', price: '+ ₹1.54 L', side: 'sell' },
                       { blk: '52 (13:00)', plant: 'TPS-VINDHYA', vol: '85 MW', action: 'SELL_RTM', price: '+ ₹1.12 L', side: 'sell' },
                       { blk: '53 (13:15)', plant: 'HYDRO-BHAKRA', vol: '25 MW', action: 'BUY_DAM', price: '- ₹0.34 L', side: 'buy' },
                       { blk: '54 (13:30)', plant: 'TPS-KORBA-2', vol: '150 MW', action: 'SELL_RTM', price: '+ ₹2.40 L', side: 'sell' },
                       { blk: '55 (13:45)', plant: 'TPS-KORBA-1', vol: '120 MW', action: 'EX_PENDING', price: '...', side: 'pending' },
                     ].map((trade, i) => (
                       <motion.tr key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="border-b border-outline-variant/5 hover:bg-surface/30">
                         <td className="p-4 text-on-surface">{trade.blk}</td>
                         <td className="p-4 text-on-surface-variant">{trade.plant}</td>
                         <td className="p-4">{trade.vol}</td>
                         <td className="p-4">
                           <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${
                             trade.side === 'sell' ? 'bg-primary-fixed/10 text-primary-fixed' : 
                             trade.side === 'buy' ? 'bg-error/10 text-error' : 'bg-outline-variant/20 text-on-surface-variant'
                           }`}>
                             {trade.side === 'sell' ? <ArrowUpRight className="w-3 h-3" /> : trade.side === 'buy' ? <ArrowDownRight className="w-3 h-3" /> : <RefreshCcw className="w-3 h-3 animate-spin" />}
                             {trade.action}
                           </span>
                         </td>
                         <td className={`p-4 text-right font-bold ${trade.side === 'buy' ? 'text-error' : 'text-primary-fixed'}`}>{trade.price}</td>
                       </motion.tr>
                     ))}
                   </tbody>
                 </table>
               </CardContent>
             </Card>
           </div>
           
           <div className="lg:col-span-1 space-y-6">
             <Card className="bg-surface-lowest border-outline-variant/20">
               <CardHeader>
                 <CardTitle className="text-sm uppercase tracking-widest m-0">Thermal Plant Status</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 {[
                   { name: 'TPS-KORBA-1', cap: '500', running: '380', color: 'bg-primary-fixed' },
                   { name: 'TPS-VINDHYA', cap: '1000', running: '915', color: 'bg-primary-fixed' },
                   { name: 'TPS-SIMHADRI', cap: '500', running: '200', color: 'bg-secondary-fixed' },
                 ].map(plant => (
                   <div key={plant.name} className="space-y-2">
                     <div className="flex justify-between text-xs font-mono">
                       <span className="text-on-surface">{plant.name}</span>
                       <span className="text-on-surface-variant">{plant.running} / {plant.cap} MW</span>
                     </div>
                     <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                       <div className={`h-full ${plant.color}`} style={{ width: `${(parseInt(plant.running) / parseInt(plant.cap)) * 100}%` }} />
                     </div>
                   </div>
                 ))}
               </CardContent>
             </Card>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ModEngine;
