<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useGeneralStore } from '../stores/general';

const props = defineProps<{
  isSideBarTransitionDone?: boolean;
}>();
const router = useRouter();
const authStore = useAuthStore();
const generalStore = useGeneralStore();
const isSideBarTransitionDone = ref(props.isSideBarTransitionDone);

const getActivePageTitle = computed(() => {
  return router.currentRoute.value.name;
});
</script>

<template>
  <div class="h-[20vh]">
    <div class="flex items-center p-2 bg-[#265972]">
      <div class="px-2 border-r-2 border-gray-500">
        <el-icon :size="40" color="white" class="cursor-pointer" @click="generalStore.toggleSidebar">
          <template v-if="generalStore.isSidebarOpen">
            <i-ep-fold />
          </template>
          <template v-else>
            <i-ep-expand />
          </template>
        </el-icon>
      </div>
      <div class="px-2">
        <a href="https://nanoporetech.com" rel="noopener" target="_blank">
          <img src="../assets/logo.svg" class="text-white" width="200px" alt="Logo for Oxford Nanopore Technologies" />
        </a>
      </div>
      <div class="ml-auto">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              :size="40"
              src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
            <el-icon :size="20" color="white" class="el-icon--right"><i-ep-arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="authStore.logout">
                <el-icon :size="15" color="#265972">
                  <i-ep-switch-button />
                </el-icon>
                Logout
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="w-full px-8 mt-0 md:mt-4">
      <div class="grid grid-cols-4 gap-4">
        <div v-if="generalStore.isSidebarOpen"></div>
        <div class="col-span-4 px-4 sm:col-span-3" :class="isSideBarTransitionDone ? 'col-span-3' : 'col-span-4'">
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-left text-nanopore-light-blue">{{ getActivePageTitle }}</h1>
            <h2 class="text-xl font-bold text-left text-white">
              {{ authStore.currentAccount.organisation_name }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
