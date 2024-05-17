<script setup lang="ts">
import { ref } from 'vue';

const totalOrders = ref(900);
const totalProducts = ref(1500);
const activeTabName = ref('general');
</script>

<template>
  <div class="px-4 mt-[-45px]">
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="General" name="general">
        <div class="px-4 py-6">
          <h1 class="mb-4 text-2xl font-bold text-center text-nanopore-dark-blue">Dashboard</h1>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 bg-white rounded shadow text-nanopore-blue">
              <h2 class="mb-2 text-lg font-semibold">Total Orders</h2>
              <p>{{ totalOrders }}</p>
            </div>
            <div class="p-4 bg-white rounded shadow text-nanopore-blue">
              <h2 class="mb-2 text-lg font-semibold">Total Products</h2>
              <p>{{ totalProducts }}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Statistics" name="stats">Statistics</el-tab-pane>
      <el-tab-pane label="Graphs" name="graphs">Graphs</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
