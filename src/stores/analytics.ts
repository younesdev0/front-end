import { defineStore } from 'pinia';
import { fetchTotalSales, fetchTrendingProducts, fetchCategorySales } from '@/services/api';

import type { TotalSales, TrendingProduct, CategorySales } from '@/types';

export const useAnalyticsStore = defineStore('analytics', {
  state: () => ({
    totalSales: 0,
    trendingProducts: [] as TrendingProduct[],
    categorySales: [] as CategorySales[],
  }),
  actions: {
    async fetchTotalSales() {
      const data = await fetchTotalSales();

      console.log("data :",data.totalSales)

      this.totalSales = data.totalSales;
    },
    async fetchTrendingProducts() {
      const data = await fetchTrendingProducts();
      console.log("data  fetchTrendingProducts :",data)
      this.trendingProducts = data
    },
    async fetchCategorySales() {
      const data = await fetchCategorySales();
      console.log("data  fetchCategorySales :",data)
      this.categorySales = data
    },
  },
});

