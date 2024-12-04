<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Sales by Product</h3>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';
import { ProductSales } from '@/types';

const props = defineProps<{
  data: ProductSales[];
}>();

const chartRef = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;

const createChart = () => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d');
    if (ctx) {
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: props.data.map(item => item.name),
          datasets: [{
            label: 'Sales',
            data: props.data.map(item => item.sales),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Sales'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Products'
              }
            }
          }
        }
      });
    }
  }
};

onMounted(createChart);

watch(() => props.data, () => {
  if (chart) {
    chart.data.labels = props.data.map(item => item.name);
    chart.data.datasets[0].data = props.data.map(item => item.sales);
    chart.update();
  }
}, { deep: true });
</script>

