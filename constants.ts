
import { SaleRecord } from './types';

export const COLORS = {
  yellow: '#FFD700',
  blue: '#1E90FF',
  pink: '#FF69B4',
  green: '#32CD32',
  white: '#FFFFFF',
  black: '#000000',
  background: '#F1EFE7'
};

export const MOCK_SALES_DATA: SaleRecord[] = [
  { month: 'Feb/2026', value: 27446475.50, lastYearValue: 1875.50, color: COLORS.yellow },
  { month: 'Jul/2026', value: 1140435.27, lastYearValue: 1638.29, color: COLORS.blue },
  { month: 'Dec/2026', value: 13875295.79, lastYearValue: 13875.79, color: COLORS.pink },
  { month: 'May/2027', value: 18450000.00, lastYearValue: 12400.00, color: COLORS.blue },
  { month: 'Oct/2027', value: 21200000.00, lastYearValue: 19500.00, color: COLORS.pink },
  { month: 'Jan/2028', value: 25800000.00, lastYearValue: 22000.00, color: COLORS.yellow }
];
