<script setup lang="ts">
import PortalLayout from './layouts/PortalLayout.vue';
import SignInPage from './pages/SignInPage.vue';
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
</script>

<template class="bg-[#265b76]">
  <el-scrollbar max-height="100vh">
    <template v-if="authStore.isLoggedIn">
      <PortalLayout />
    </template>
    <template v-else>
      <SignInPage />
    </template>
  </el-scrollbar>
</template>

<style scoped></style>
