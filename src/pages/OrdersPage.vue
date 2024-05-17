<script setup lang="ts">
import { ref } from 'vue';

const orders = ref([
  { id: 1, customerName: 'Customer 1', totalAmount: 200 },
  { id: 2, customerName: 'Customer 2', totalAmount: 300 },
  { id: 3, customerName: 'Customer 3', totalAmount: 400 },
]);
const activeTabName = ref('general');
</script>

<template>
  <div class="px-4 mt-[-45px]">
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="General" name="general">
        <div class="px-4 py-6">
          <h1 class="mb-4 text-2xl font-bold text-center text-nanopore-dark-blue">Orders</h1>
          <table class="min-w-full bg-white border border-gray-200">
            <thead class="text-center text-nanopore-blue">
              <tr>
                <th class="px-4 py-2 border-b">Order ID</th>
                <th class="px-4 py-2 border-b">Customer Name</th>
                <th class="px-4 py-2 border-b">Total Amount</th>
              </tr>
            </thead>
            <tbody class="text-center text-nanopore-blue">
              <tr v-for="order in orders" :key="order.id">
                <td class="px-4 py-2 border-b">{{ order.id }}</td>
                <td class="px-4 py-2 border-b">{{ order.customerName }}</td>
                <td class="px-4 py-2 border-b">{{ order.totalAmount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Cancelled" name="cancelled">Cancelled</el-tab-pane>
      <el-tab-pane label="Returned" name="returned">Returned</el-tab-pane>
      <el-tab-pane label="Completed" name="completed">Completed</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
