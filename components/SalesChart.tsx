
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_SALES_DATA } from '../constants';

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 h-[380px] flex flex-col">
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter border-b-4 border-black pb-2 text-black">Sales History</h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOCK_SALES_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="black" strokeWidth={1} />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: 'black', strokeWidth: 3 }} 
              tickLine={{ stroke: 'black', strokeWidth: 2 }}
              tick={{ fontWeight: 'bold', fontSize: 10, fill: 'black' }}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              contentStyle={{ background: 'white', border: '4px solid black', borderRadius: '0', fontWeight: '900', color: 'black' }}
            />
            <Bar dataKey="value" stroke="black" strokeWidth={2}>
              {MOCK_SALES_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
