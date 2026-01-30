
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
  subValue?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, bgColor, subValue }) => {
  return (
    <div className={`brutalist-border brutalist-shadow p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[180px] text-black`} style={{ backgroundColor: bgColor }}>
      <div className="p-2 border-2 border-black rounded-none bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tighter uppercase leading-tight">{value}</span>
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      {subValue && (
        <div className="mt-2 text-[10px] font-black uppercase bg-black text-white px-2 py-0.5">
          {subValue}
        </div>
      )}
    </div>
  );
};

export default StatCard;
