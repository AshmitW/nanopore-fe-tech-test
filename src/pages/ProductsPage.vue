<script setup lang="ts">
import { ref } from 'vue';

const orders = ref([
  { id: 1, productName: 'Product 1', stockLeft: 500 },
  { id: 2, productName: 'Product 2', stockLeft: 500 },
  { id: 3, productName: 'Product 3', stockLeft: 500 },
]);
const activeTabName = ref('general');
</script>

<template>
  <div class="px-4 mt-[-45px]">
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="General" name="general">
        <div class="px-4 py-6">
          <h1 class="mb-4 text-2xl font-bold text-center text-nanopore-dark-blue">Products</h1>
          <table class="min-w-full bg-white border border-gray-200">
            <thead class="text-center text-nanopore-blue">
              <tr>
                <th class="px-4 py-2 border-b">Product ID</th>
                <th class="px-4 py-2 border-b">Product Name</th>
                <th class="px-4 py-2 border-b">Stock Left</th>
              </tr>
            </thead>
            <tbody class="text-center text-nanopore-blue">
              <tr v-for="order in orders" :key="order.id">
                <td class="px-4 py-2 border-b">{{ order.id }}</td>
                <td class="px-4 py-2 border-b">{{ order.productName }}</td>
                <td class="px-4 py-2 border-b">{{ order.stockLeft }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Unreleased" name="unreleased">Unreleased</el-tab-pane>
      <el-tab-pane label="Prototypes" name="prototypes">Prototypes</el-tab-pane>
      <el-tab-pane label="Discarded" name="discarded">Discarded</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
