<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Sales by Category</h3>
    <div class="h-64">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

import type { CategorySales } from '@/types';

const props = defineProps<{
  data: CategorySales[];
}>();

const chartRef = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;

const createChart = () => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d');
    if (ctx) {
      chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: props.data.map(item => item.category),
          datasets: [{
            data: props.data.map(item => item.sales),
            backgroundColor: [
              '#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6366F1',
              '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#06B6D4'
            ],
            borderColor: '#FFFFFF',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const item = props.data[context.dataIndex];
                  return `${item.category}: ${item.percentage.toFixed(2)}% ($${item.sales.toLocaleString()})`;
                }
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
    chart.data.labels = props.data.map(item => item.category);
    chart.data.datasets[0].data = props.data.map(item => item.sales);
    chart.update();
  }
}, { deep: true });
</script>

