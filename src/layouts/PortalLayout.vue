<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import HeaderBar from '../components/HeaderBar.vue';
import SideBar from '../components/SideBar.vue';
import { useGeneralStore } from '../stores/general';

const generalStore = useGeneralStore();
const isSideBarTransitionDone = ref(generalStore.isSidebarOpen);
</script>

<template>
  <div class="bg-[#265b76] min-h-[100vh]">
    <HeaderBar :is-side-bar-transition-done="isSideBarTransitionDone" />
    <main class="bg-white min-h-[80vh] px-4 md:px-8">
      <div class="grid grid-cols-4 gap-4">
        <Transition
          name="slide-fade"
          @before-enter="isSideBarTransitionDone = true"
          @after-leave="isSideBarTransitionDone = false">
          <template v-if="generalStore.isSidebarOpen">
            <div>
              <SideBar />
            </div>
          </template>
        </Transition>
        <div class="col-span-4 sm:col-span-3" :class="isSideBarTransitionDone ? 'col-span-3' : 'col-span-4'">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
