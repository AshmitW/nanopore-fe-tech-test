<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useGeneralStore } from '../stores/general';

const router = useRouter();
const authStore = useAuthStore();
const generalStore = useGeneralStore();
const selectedAccount = ref(authStore.currentAccount.id);

const routeTo = (route: string, mobile: boolean) => {
  if (mobile) {
    generalStore.toggleSidebar();
  }
  router.push(route);
};

const activeIndex = computed((): string => {
  switch (router.currentRoute.value.path) {
    case '/':
      return '1';
    case '/dashboard':
      return '1';
    case '/orders':
      return '2';
    case '/products':
      return '3';
    case '/accounts':
      return '4';
    case '/notifications':
      return '5';
    default:
      return '1';
  }
});
</script>
<template>
  <div class="bg-white rounded-xl mt-[-120px] min-h-[80vh] py-4 px-6 hidden sm:block">
    <div class="flex items-center">
      <el-avatar
        class="mr-3"
        :size="60"
        src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
      <div class="text-nanopore-blue">
        <p class="text-xl font-bold">Welcome {{ authStore.getFullName }}</p>
        <p class="text-lg capitalize">{{ authStore.currentAccount.role }}</p>
      </div>
    </div>
    <div class="my-4">
      <el-select
        v-model="selectedAccount"
        placeholder="Select"
        size="large"
        class="w-full rounded-xl border-nanopore-blue"
        @change="(value: number) => authStore.setCurrentAccount(value)">
        <el-option
          v-for="item in authStore.authAccounts"
          :key="item.id"
          :label="item.organisation_name"
          :value="item.id" />
      </el-select>
    </div>
    <div class="px-6 py-8">
      <el-menu
        :default-active="activeIndex"
        active-text-color="#265972"
        background-color="#ffffff"
        class="!border-r-0 el-menu-vertical-demo">
        <el-menu-item index="1" @click="routeTo('/', false)">
          <el-icon><i-ep-picture-filled /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="2" @click="routeTo('/orders', false)">
          <el-icon><i-ep-wallet-filled /></el-icon>
          <span>Orders</span>
        </el-menu-item>
        <el-menu-item index="3" @click="routeTo('/products', false)">
          <el-icon><i-ep-goods-filled /></el-icon>
          <span>Products</span>
        </el-menu-item>
        <hr class="mx-6 my-2" />
        <el-menu-item index="4" @click="routeTo('/accounts', false)">
          <el-icon><i-ep-user-filled /></el-icon>
          <span>Accounts</span>
        </el-menu-item>
        <el-menu-item index="5" @click="routeTo('/notifications', false)">
          <el-icon><i-ep-info-filled /></el-icon>
          <span>Notifications</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
  <div class="sm:hidden">
    <el-drawer v-model="generalStore.isSidebarOpen" direction="ltr" size="90%">
      <div class="demo-drawer__content">
        <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="60"
            src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
          <div class="text-nanopore-blue">
            <p class="text-xl font-bold">Welcome {{ authStore.getFullName }}</p>
            <p class="text-lg capitalize">{{ authStore.currentAccount.role }}</p>
          </div>
        </div>
        <div class="my-4">
          <el-select
            v-model="selectedAccount"
            placeholder="Select"
            size="large"
            class="w-full rounded-xl border-nanopore-blue"
            @change="(value: number) => authStore.setCurrentAccount(value)">
            <el-option
              v-for="item in authStore.authAccounts"
              :key="item.id"
              :label="item.organisation_name"
              :value="item.id" />
          </el-select>
        </div>
        <div class="px-6 py-8">
          <el-menu
            :default-active="activeIndex"
            active-text-color="#265972"
            background-color="#ffffff"
            class="!border-r-0 el-menu-vertical-demo">
            <el-menu-item index="1" @click="routeTo('/', true)">
              <el-icon><i-ep-picture-filled /></el-icon>
              <span>Dashboard</span>
            </el-menu-item>
            <el-menu-item index="2" @click="routeTo('/orders', true)">
              <el-icon><i-ep-wallet-filled /></el-icon>
              <span>Orders</span>
            </el-menu-item>
            <el-menu-item index="3" @click="routeTo('/products', true)">
              <el-icon><i-ep-goods-filled /></el-icon>
              <span>Products</span>
            </el-menu-item>
            <hr class="mx-6 my-2" />
            <el-menu-item index="4" @click="routeTo('/accounts', true)">
              <el-icon><i-ep-user-filled /></el-icon>
              <span>Accounts</span>
            </el-menu-item>
            <el-menu-item index="5" @click="routeTo('/notifications', true)">
              <el-icon><i-ep-info-filled /></el-icon>
              <span>Notifications</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style scoped></style>
