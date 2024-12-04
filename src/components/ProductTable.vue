<template>
  <div class="product-table-container">
    <table class="product-table">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in paginatedProducts" :key="product.ProductID">
          <td>{{ product.ProductID }}</td>
          <td>{{ product.ProductName }}</td>
          <td>${{ product.Price.toFixed(2) }}</td>
          <td>${{ product.VentsParProduit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container">
      <div class="pagination-info">
        <p>
          Showing
          <span>{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
          to
          <span>{{ Math.min(currentPage * itemsPerPage, totalProducts) }}</span>
          of
          <span>{{ totalProducts }}</span>
          results
        </p>
      </div>
      <nav class="pagination-nav" aria-label="Pagination">
        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
          <ChevronLeftIcon class="icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </button>
        <button 
          v-for="page in displayedPages" 
          :key="page" 
          @click="goToPage(page)" 
          :class="['pagination-button', { active: page === currentPage }]"
        >
          {{ page }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">
          <ChevronRightIcon class="icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';

interface Product {
  ProductID: number;
  ProductName: string;
  Price: number;
  VentsParProduit: number;
}

const props = defineProps<{
  products: Product[];
}>();

const itemsPerPage = 15;
const currentPage = ref(1);

const totalProducts = computed(() => props.products.length);
const totalPages = computed(() => Math.ceil(totalProducts.value / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.products.slice(start, end);
});

const displayedPages = computed(() => {
  const pages = [];
  const maxDisplayedPages = 5;
  const halfMaxPages = Math.floor(maxDisplayedPages / 2);

  let start = Math.max(1, currentPage.value - halfMaxPages);
  let end = Math.min(totalPages.value, start + maxDisplayedPages - 1);

  if (end - start + 1 < maxDisplayedPages) {
    start = Math.max(1, end - maxDisplayedPages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped>
.product-table-container {
  background-color: var(--card-background);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  overflow: hidden;
}

.product-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.product-table thead {
  background-color: var(--table-header-bg, #f9fafb);
}

.product-table th,
.product-table td {
  padding: 1rem;
  text-align: left;
}

.product-table th {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--table-header-text, #374151);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-table tbody tr {
  transition: background-color 0.2s ease;
}

.product-table tbody tr:hover {
  background-color: var(--table-row-hover, #f3f4f6);
}

.product-table tbody td {
  font-size: 0.875rem;
  color: var(--table-cell-text, #4b5563);
  border-top: 1px solid var(--table-border, #e5e7eb);
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid var(--table-border, #e5e7eb);
}

.pagination-info p {
  font-size: 0.875rem;
  color: var(--text-secondary, #6b7280);
}

.pagination-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid var(--button-border, #d1d5db);
  border-radius: 0.375rem;
  background-color: var(--button-bg, white);
  color: var(--button-text, #374151);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  background-color: var(--button-hover-bg, #f3f4f6);
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button.active {
  background-color: var(--button-active-bg, #e0e7ff);
  border-color: var(--button-active-border, #6366f1);
  color: var(--button-active-text, #4f46e5);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 640px) {
  .product-table th,
  .product-table td {
    padding: 0.75rem 0.5rem;
  }

  .pagination-container {
    flex-direction: column;
    gap: 1rem;
  }

  .pagination-info {
    text-align: center;
  }
}
</style>

