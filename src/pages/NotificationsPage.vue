<script setup lang="ts">
import { ref } from 'vue';

const notifications = ref([
  { id: 1, title: 'Notification 1', message: 'This is the first notification' },
  { id: 2, title: 'Notification 2', message: 'This is the second notification' },
  { id: 3, title: 'Notification 3', message: 'This is the third notification' },
]);
const activeTabName = ref('general');
</script>

<template>
  <div class="px-4 mt-[-45px]">
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="General" name="general">
        <div class="px-4 py-6">
          <h1 class="mb-4 text-2xl font-bold text-center text-nanopore-dark-blue">Notifications</h1>
          <ul>
            <li v-for="notification in notifications" :key="notification.id" class="mb-2 text-nanopore-blue">
              <div class="p-4 bg-gray-100 rounded">
                <h2 class="text-lg font-bold">{{ notification.title }}</h2>
                <p>{{ notification.message }}</p>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Archived" name="archived">Archived</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
