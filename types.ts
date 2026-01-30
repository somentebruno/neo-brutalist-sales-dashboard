
export interface SaleRecord {
  month: string;
  value: number;
  lastYearValue: number;
  color: string;
}

export interface DashboardStats {
  totalValue: number;
  monthlyAverage: number;
  yearlyAverage: number;
}
