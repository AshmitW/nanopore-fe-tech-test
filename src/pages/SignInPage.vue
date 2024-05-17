<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { ElNotification } from 'element-plus';

const email = ref<string>('');
const password = ref<string>('');
const authStore = useAuthStore();

const login = async () => {
  const result = await authStore.login(email.value, password.value);
  if (result) {
    ElNotification({
      title: 'Success',
      message: 'Login successful',
      type: 'success',
    });
  } else {
    ElNotification({
      title: 'Error',
      message: 'Invalid email',
      type: 'error',
    });
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-[#265b76]">
    <div class="w-[80%] p-6 bg-white rounded shadow xl:w-1/3">
      <h2 class="mb-4 text-2xl font-bold">Customer Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <el-input v-model="email" type="email" placeholder="Please enter email" aria-required="" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <el-input
            v-model="password"
            type="password"
            placeholder="Please enter password"
            show-password
            aria-required="" />
        </div>
        <div>
          <button type="submit" class="w-full px-4 py-2 text-white bg-[#265b76] rounded">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
