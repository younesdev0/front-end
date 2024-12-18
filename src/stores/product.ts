import { defineStore } from 'pinia';
import { fetchProducts } from '@/services/api';
import type { Product } from '@/types';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      this.products = await fetchProducts();
    },
  },
});
