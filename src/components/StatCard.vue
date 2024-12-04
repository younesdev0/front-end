<template>
  <div class="stat-card">
    <h3 class="stat-card-title">{{ title }}</h3>
    <p class="stat-card-value">{{ value }} {{suffix}}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  value: string | number;
  suffix:sting
}>();
</script>

<style scoped>
.stat-card {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s;
}

.stat-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
}

.stat-card-value {
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
  color: black;
}
</style>