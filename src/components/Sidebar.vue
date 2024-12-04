<template>
  <div class="w-64 bg-gray-800 text-white h-full">
    <div class="p-4">
      <h2 class="text-2xl font-semibold">Sales Dashboard</h2>
    </div>
    <nav class="mt-6">
      <router-link
        to="/"
        class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
        active-class="bg-gray-900 text-white"
      >
        Dashboard
      </router-link>
      <router-link
        to="/products"
        class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
        active-class="bg-gray-900 text-white"
      >
        Products
      </router-link>
      <router-link
        to="/categories"
        class="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
        active-class="bg-gray-900 text-white"
      >
        Categories
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts" setup>
// No additional logic needed
</script>

