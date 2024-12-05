<template>
  <div class="dashboard-container">
    <div class="main-content">
      <div class="content-padding">
        <h1 class="dashboard-title">Sales Dashboard</h1>

        <div class="statistics-grid">
          <StatCard v-if="totalSales" title="Total Sales" :value="totalSales" suffix="$" />
          <Cards v-if="topProduct" :topProducts="topProduct" />
          <StatCard v-if="categoryCount" title="Sales Distribution by Category" :value="categoryCount" suffix="%" />
        </div>
        
        <div class="charts-grid">
          <CategorySalesChart v-if="categorySales?.length" :data="categorySales" />
          <ProductSalesHistogram v-if="productSales?.length" :data="productSales" />
        </div>

        <div v-if="loading" class="loader-container">
          <div class="loader"></div>
        </div>

        <div class="filter-container" v-else :products="products?.length">
          <label for="time-period" class="filter-label">Select Time Period</label>
          <select
            id="time-period"
            v-model="selectedTimePeriod"
            @change="updateDashboard"
            class="filter-select"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="365">Last 12 months</option>
          </select>
        </div>
        <ProductTable v-else :products="products" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useAnalyticsStore } from '@/stores/analytics';
import { useProductStore } from '@/stores/product';
import Sidebar from '@/components/Sidebar.vue';
import StatCard from '@/components/StatCard.vue';
import Cards from '@/components/Cards.vue';
import CategorySalesChart from '@/components/CategorySalesChart.vue';
import ProductSalesHistogram from '@/components/ProductSalesHistogram.vue';
import ProductTable from '@/components/ProductTable.vue';

import type { ProductSales } from '@/types';
import type { CategorySales } from '@/types';
import type { Product } from '@/types';
import type { TrendingProduct } from '@/types';

const analyticsStore = useAnalyticsStore();
const productStore = useProductStore();

const selectedTimePeriod = ref('30');

const totalSales = ref(0);
const topProduct = ref<TrendingProduct | null>(null);
const categoryCount = ref(0);
const categorySales = ref<CategorySales[]>([]);
const productSales = ref<ProductSales[]>([]);
const products = ref<Product[]>([]);
const loading = ref(false);

const updateDashboard = async () => {
  loading.value = true;
  await analyticsStore.fetchTotalSales();
  await analyticsStore.fetchTrendingProducts();
  await analyticsStore.fetchCategorySales();
  await productStore.fetchProducts();

  console.log("analyticsStore.categorySales :", analyticsStore.categorySales.length);
  totalSales.value = parseFloat(analyticsStore.totalSales.toFixed(2));
  topProduct.value = analyticsStore.trendingProducts[0] || null; // Ensure topProduct is a single object or null
  categorySales.value = analyticsStore.categorySales;
  categoryCount.value = analyticsStore.categorySales.length;
  productSales.value = productStore.products.map(p => ({ name: p.ProductName, sales: p.VentsParProduit } as ProductSales));
  products.value = productStore.products;

  loading.value = false;
};

onMounted(updateDashboard);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #5a67d8;
  --secondary-color: #4a5568;
  --background-color: #f7fafc;
  --card-background: #ffffff;
  --text-color: #2d3748;
  --border-color: #e2e8f0;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.5;
}

.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--background-color);
}

.main-content {
  flex: 1;
  overflow: auto;
}

.content-padding {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.filter-container {
  margin-bottom: 2rem;
}

.filter-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.filter-select {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s ease;
  background-color: var(--card-background);
}

.filter-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(90, 103, 216, 0.1);
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.charts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .charts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.loader {
  border: 4px solid rgba(90, 103, 216, 0.1);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add these utility classes for better spacing and layout */
.mb-4 { margin-bottom: 1rem; }
.mb-8 { margin-bottom: 2rem; }
.p-4 { padding: 1rem; }
.rounded-lg { border-radius: 0.5rem; }
.shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
.bg-white { background-color: var(--card-background); }
</style>
