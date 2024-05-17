<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import UserList from '../components/UserList.vue';

const authStore = useAuthStore();
const activeTabName = ref('general');
</script>

<template>
  <div class="px-0 md:px-4 mt-[-45px]">
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="General" name="general">
        <div class="px-0 py-6 md:px-4 text-nanopore-blue">
          <h1 class="mb-4 text-2xl text-left text-nanopore-dark-blue">
            {{ authStore.currentAccount.organisation_name }}
          </h1>
          <div class="flex flex-wrap">
            <div class="flex flex-wrap">
              <div class="text-sm text-gray-600">
                <p>C071336</p>
                <p>Charlotte Mathews</p>
              </div>
              <div class="ml-6">
                <el-avatar
                  :size="40"
                  src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
                <el-avatar
                  :size="40"
                  src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
                <el-avatar
                  :size="40"
                  src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
                <el-avatar
                  :size="40"
                  src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
                <el-avatar
                  :size="40"
                  src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
              </div>
            </div>
            <div class="ml-auto">
              <el-button color="#265b76" class="text-nanopore-blue">Create new account</el-button>
            </div>
          </div>
          <div class="mt-8">
            <p v-if="authStore.currentAccount.role === 'leader'" class="text-nanopore-blue">
              <el-icon :size="20">
                <i-ep-plus />
              </el-icon>
              <span> Add new member</span>
            </p>
          </div>
          <div class="mt-4">
            <UserList />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Billing & Tax Info" name="billing">Billing & Tax Info</el-tab-pane>
      <el-tab-pane label="Currency" name="curreny">Currency</el-tab-pane>
      <el-tab-pane label="Payment" name="payment">Payment</el-tab-pane>
      <el-tab-pane label="FAQs" name="faqs">FAQs</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
