<template>
  <div class="card">
    <h3 class="card-title">Top 5 Products</h3>

    <table class="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Total Amount</th>
          <th>Total Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in topProducts" :key="product.productId" class="product-item">
          <td class="product-name">{{ product.name }}</td>
          <td class="product-sales">{{ product.totalAmount }}</td>
          <td class="product-quantity">{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  topProducts: any[];
}>();
</script>

<style scoped>
.card {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  padding: 0.5rem;
  text-align: left;
  font-size: 1rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
}

.product-table th {
  font-weight: 600;
}
</style>
