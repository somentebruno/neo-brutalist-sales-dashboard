
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { MOCK_SALES_DATA } from '../constants';

const SalesTable: React.FC = () => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-4 font-black uppercase text-xs border-r-4 border-white">Month</th>
            <th className="p-4 font-black uppercase text-xs border-r-4 border-white">Value</th>
            <th className="p-4 font-black uppercase text-xs border-r-4 border-white">Evo</th>
            <th className="p-4 font-black uppercase text-xs border-r-4 border-white">Last Year</th>
            <th className="p-4 font-black uppercase text-xs">YoY</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {MOCK_SALES_DATA.slice(0, 4).map((item, idx) => (
            <tr key={idx} className="border-t-4 border-black">
              <td className="p-4 font-black border-r-4 border-black text-black" style={{ backgroundColor: item.color }}>{item.month}</td>
              <td className="p-4 font-black border-r-4 border-black">{formatCurrency(item.value)}</td>
              <td className="p-4 border-r-4 border-black text-center">
                <div className="flex justify-center">
                  {idx % 2 === 0 ? <ArrowUp strokeWidth={4} className="text-green-600" /> : <ArrowDown strokeWidth={4} className="text-red-600" />}
                </div>
              </td>
              <td className="p-4 font-bold border-r-4 border-black">{formatCurrency(item.lastYearValue)}</td>
              <td className="p-4 text-center">
                 <div className="flex justify-center">
                  {idx === 1 ? <ArrowDown strokeWidth={4} className="text-red-600" /> : <ArrowUp strokeWidth={4} className="text-green-600" />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
