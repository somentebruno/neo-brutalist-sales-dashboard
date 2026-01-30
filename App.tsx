
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';
import { DollarSign, Calendar, Search, BrainCircuit, Zap } from 'lucide-react';
import { COLORS } from './constants';
import { getSalesInsights } from './services/geminiService';

const App: React.FC = () => {
  const [insight, setInsight] = useState<string>("Analyzing performance data...");

  useEffect(() => {
    const fetchInsight = async () => {
      const result = await getSalesInsights([{ label: 'Sales Growth', value: '+1400%' }]);
      setInsight(result);
    };
    fetchInsight();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F1EFE7] text-black selection:bg-pink-500 selection:text-white">
      <Sidebar />
      
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-black">
            <Zap className="text-yellow-400 fill-yellow-400" size={48} strokeWidth={3} />
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
              WHITE DASHBOARD
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            <div className="bg-black border-4 border-black text-white px-6 py-2 font-black text-xl uppercase italic">
              2026-2028 FISCAL PERIOD
            </div>
            <button className="bg-white border-4 border-black p-3 hover:bg-black hover:text-white transition-all group brutalist-shadow">
              <Search size={24} strokeWidth={4} />
            </button>
            
            <div className="ml-auto bg-white text-black px-6 py-3 border-4 border-black flex items-center gap-3 brutalist-shadow">
                <BrainCircuit size={24} className="text-pink-500 animate-pulse" />
                <span className="text-sm font-black uppercase tracking-tight italic">
                   {insight}
                </span>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Quick Insights - Left Side */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex justify-between items-end border-b-4 border-black pb-2">
               <h2 className="text-4xl font-black uppercase tracking-tighter">METRICS</h2>
               <span className="text-xs font-bold uppercase opacity-60">Real-time Feed</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StatCard 
                icon={<DollarSign size={32} strokeWidth={3} />}
                label="Gross Revenue"
                value="R$27.44M"
                bgColor={COLORS.yellow}
              />
              <StatCard 
                icon={<Calendar size={32} strokeWidth={3} />}
                label="Monthly Avg"
                value="R$1.14M"
                bgColor={COLORS.blue}
              />
              <div className="md:col-span-2">
                <StatCard 
                  icon={<div className="font-black text-2xl">🔥</div>}
                  label="Yearly Peak"
                  value="R$13.87M"
                  bgColor={COLORS.pink}
                  subValue="H2 2026 OUTPERFORMED ALL EXPECTATIONS"
                />
              </div>
            </div>
          </div>

          {/* Sales History - Right Side */}
          <div className="lg:col-span-7">
            <SalesChart />
          </div>

          {/* Table Section - Full Width */}
          <div className="lg:col-span-12">
             <div className="mb-6 flex items-center gap-4 text-black">
                <div className="h-1 flex-grow bg-black"></div>
                <h2 className="text-3xl font-black uppercase tracking-tighter whitespace-nowrap">DETAILED LOG</h2>
                <div className="h-1 flex-grow bg-black"></div>
             </div>
             <SalesTable />
          </div>
        </section>

        {/* Footer info */}
        <footer className="mt-20 py-8 border-t-4 border-black flex justify-between items-center text-black">
           <p className="font-black uppercase text-[10px] tracking-[0.3em]">SYSTEM STATUS: OPTIMAL</p>
           <p className="font-black uppercase text-[10px] tracking-[0.3em]">© 2026 NEO-BRUTALIST LABS</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
