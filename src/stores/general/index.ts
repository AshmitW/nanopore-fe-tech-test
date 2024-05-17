import { defineStore } from 'pinia';

export const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    // sidebar should be open by default on desktop
    isSidebarOpen: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? (false as boolean)
      : (true as boolean),
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },
  getters: {},
});
