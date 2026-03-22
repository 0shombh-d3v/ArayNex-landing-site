import { Leaf, ArrowRightLeft, ShieldCheck, FileCheck, Anchor, TrendingUp, Zap } from 'lucide-react';
import { H1, H2, H3, P } from '../components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Vppa = () => {
  return (
    <div className="min-h-screen bg-[#05070A] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[1000px] h-[600px] bg-primary-fixed/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-outline-variant/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded bg-primary-fixed/10 flex items-center justify-center border border-primary-fixed/20 shadow-[0_0_15px_rgba(58,255,194,0.1)]">
                <Leaf className="w-5 h-5 text-primary-fixed" />
              </div>
              <H1 className="text-3xl font-mono tracking-tight m-0">VPPA Settlement Engine</H1>
            </div>
            <P className="text-on-surface-variant font-mono text-sm">ENVIRONMENTAL ATTRIBUTE TRADING &bull; RPO COMPLIANCE</P>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
             <Button variant="outline" className="border-primary-fixed/30 text-primary-fixed hover:bg-primary-fixed/10 font-mono gap-2">
                <FileCheck className="w-4 h-4" /> Export RPO Audit
             </Button>
             <Button className="font-mono font-bold bg-primary-fixed hover:bg-primary text-on-surface gap-2 shadow-[0_0_20px_rgba(58,255,194,0.2)]">
                <ArrowRightLeft className="w-4 h-4" /> Execute Swap
             </Button>
          </div>
        </div>

        {/* Global Compliance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
           <Card className="bg-surface-lowest border-outline-variant/20 md:col-span-2">
             <CardContent className="p-6 flex items-center justify-between">
               <div>
                 <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">FY26 RPO Compliance Target</P>
                 <div className="flex items-baseline gap-2">
                   <H2 className="text-4xl font-mono m-0">84.5%</H2>
                   <span className="text-sm text-primary-fixed font-semibold tracking-wide flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +12.4% YoY</span>
                 </div>
               </div>
               <div className="w-24 h-24 rounded-full border-4 border-surface border-t-primary-fixed border-r-primary-fixed border-b-primary-fixed flex items-center justify-center relative shadow-[0_0_30px_rgba(58,255,194,0.15)]">
                 <span className="font-bold font-mono text-xl text-on-surface">84%</span>
               </div>
             </CardContent>
           </Card>
           <Card className="bg-surface-lowest border-outline-variant/20">
             <CardContent className="p-6">
               <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Active REC Inventory</P>
               <div className="flex items-center gap-3">
                 <ShieldCheck className="w-8 h-8 text-on-surface" />
                 <H2 className="text-4xl font-mono m-0">1.2M</H2>
               </div>
               <P className="text-xs mt-2 text-on-surface-variant">Un-redeemed Certificates</P>
             </CardContent>
           </Card>
           <Card className="bg-surface-lowest border-outline-variant/20">
             <CardContent className="p-6">
               <P className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Strike Price Δ</P>
               <div className="flex items-center gap-3">
                 <TrendingUp className="w-8 h-8 text-secondary-fixed" />
                 <H2 className="text-4xl font-mono m-0 text-secondary-fixed">+₹0.42</H2>
               </div>
               <P className="text-xs mt-2 text-on-surface-variant">Avg Net Financial Swap</P>
             </CardContent>
           </Card>
        </div>

        {/* Active VPPA Contracts & Settlement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <Card className="bg-surface-lowest border-outline-variant/20 h-full">
             <CardHeader className="border-b border-outline-variant/10 pb-4">
               <CardTitle className="text-lg flex items-center gap-2 m-0 font-mono tracking-tight">
                  <Anchor className="w-5 h-5 text-on-surface-variant" /> Active Contract Portfolio
               </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
               <div className="divide-y divide-outline-variant/10">
                 {[
                   { name: 'Adani Green - Solar Park IV', mw: '300 MW', strike: '₹2.45/kWh', type: 'Solar Fixed', status: 'Active', mtm: '+₹14.2 Cr' },
                   { name: 'ReNew Power - Wind Farm Alpha', mw: '150 MW', strike: '₹2.90/kWh', type: 'Wind Fixed', status: 'Active', mtm: '-₹2.1 Cr' },
                   { name: 'Tata Power - Hybrid Solar-Wind', mw: '450 MW', strike: '₹2.65/kWh', type: 'Hybrid', status: 'Pending NTP', mtm: '₹0.0 Cr' },
                 ].map((contract, i) => (
                   <div key={i} className="p-6 hover:bg-surface/30 transition-colors">
                     <div className="flex justify-between items-start mb-4">
                       <div>
                         <h4 className="text-lg font-bold text-on-surface mb-1">{contract.name}</h4>
                         <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-on-surface-variant">
                           <span>{contract.type}</span> &bull; <span>{contract.mw}</span> &bull; <span className="text-primary-fixed font-bold">{contract.status}</span>
                         </div>
                       </div>
                       <div className="text-right">
                         <div className="text-sm text-on-surface-variant mb-1">Contract Strike</div>
                         <div className="font-mono font-bold text-lg">{contract.strike}</div>
                       </div>
                     </div>
                     <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                       <span className="text-sm text-on-surface-variant">Mark-to-Market (MTM) P&L</span>
                       <span className={`font-mono font-bold text-lg ${contract.mtm.startsWith('+') ? 'text-primary-fixed' : contract.mtm.startsWith('-') ? 'text-error' : 'text-on-surface-variant'}`}>
                         {contract.mtm}
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card className="bg-surface-lowest border-outline-variant/20 h-full">
             <CardHeader className="border-b border-outline-variant/10 pb-4">
               <CardTitle className="text-lg flex items-center gap-2 m-0 font-mono tracking-tight">
                  <Zap className="w-5 h-5 text-on-surface-variant" /> Hourly Swap Settlement (Today)
               </CardTitle>
             </CardHeader>
             <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-surface border border-outline-variant/20 rounded-xl p-4 flex justify-between items-center group cursor-pointer hover:border-primary-fixed/30 transition-colors">
                    <div>
                      <div className="font-mono text-sm text-on-surface-variant mb-1">Total Generation Volume</div>
                      <div className="text-2xl font-bold font-mono">14,250 MWh</div>
                    </div>
                    <ArrowRightLeft className="w-6 h-6 text-on-surface-variant group-hover:text-primary-fixed transition-colors" />
                  </div>
                  
                  <div className="bg-surface border border-outline-variant/20 rounded-xl p-4 flex justify-between items-center group cursor-pointer hover:border-secondary-fixed/30 transition-colors">
                    <div>
                      <div className="font-mono text-sm text-on-surface-variant mb-1">DAM Clearing Price Avg</div>
                      <div className="text-2xl font-bold font-mono text-secondary-fixed">₹5.20/kWh</div>
                    </div>
                    <ArrowRightLeft className="w-6 h-6 text-on-surface-variant group-hover:text-secondary-fixed transition-colors" />
                  </div>

                  <div className="mt-8 pt-6 border-t border-outline-variant/20">
                    <H3 className="text-xl mb-4 text-on-surface font-mono">Net Financial Settlement</H3>
                    <div className="flex justify-between items-end">
                      <div className="text-4xl font-bold font-mono text-primary-fixed">+ ₹3.91 Cr</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest">Invoiced to Counterparty</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <P className="text-xs text-on-surface-variant leading-relaxed">
                     Calculated dynamically: (Spot Price - Strike Price) × Generated Volume. A positive settlement indicates the spot price closed higher than the PPA strike, meaning ArayNex algorithms execute an invoice to the renewable generator for the difference.
                  </P>
                </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default Vppa;
