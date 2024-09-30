import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface ISalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

export interface IPurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercengate?: number;
  date: string;
}

export interface IExpenseSummary {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
}

export interface IExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

export interface IDashboardMetrics {
  popularProducts: IProduct[];
  salesSummary: ISalesSummary[];
  purchaseSummary: IPurchaseSummary[];
  expenseSummary: IExpenseSummary[];
  expenseByCategorySummary: IExpenseByCategorySummary[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  }),
  reducerPath: 'api',
  tagTypes: ['DashboardMetrics'],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<IDashboardMetrics, void>({
      query: () => '/dashboard',
      providesTags: ['DashboardMetrics']
    })
  }),
});

export const {
  useGetDashboardMetricsQuery,
} = api;