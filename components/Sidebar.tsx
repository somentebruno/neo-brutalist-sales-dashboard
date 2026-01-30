
import React from 'react';
import { LayoutDashboard, BarChart3, Users, ShoppingCart, Settings } from 'lucide-react';

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center justify-center p-4 w-full cursor-pointer border-b-4 border-black transition-colors ${active ? 'bg-black text-white' : 'hover:bg-gray-200 text-black'}`}>
    {icon}
    <span className="text-[10px] font-black uppercase mt-1 tracking-tighter">{label}</span>
  </div>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="w-24 bg-white border-r-4 border-black flex flex-col items-center min-h-screen sticky top-0">
      <div className="p-4 mb-4 border-b-4 border-black w-full flex justify-center">
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-none">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-white"></div>
            <div className="w-3 h-3 bg-white"></div>
            <div className="w-3 h-3 bg-white"></div>
            <div className="w-3 h-3 bg-white"></div>
          </div>
        </div>
      </div>
      <SidebarItem icon={<LayoutDashboard size={28} strokeWidth={3} />} label="Dashboard" active />
      <SidebarItem icon={<BarChart3 size={28} strokeWidth={3} />} label="Reports" />
      <SidebarItem icon={<Users size={28} strokeWidth={3} />} label="Customers" />
      <SidebarItem icon={<ShoppingCart size={28} strokeWidth={3} />} label="Orders" />
      <div className="mt-auto w-full">
         <SidebarItem icon={<Settings size={28} strokeWidth={3} />} label="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;
