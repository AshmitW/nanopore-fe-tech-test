import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

// get the type from the Vue Router
const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    // Lazy load the component
    component: () => import('../pages/DashboardPage.vue'),
    alias: '/dashboard',
  },
  {
    path: '/orders',
    name: 'Orders',
    // Lazy load the component
    component: () => import('../pages/OrdersPage.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    // Lazy load the component
    component: () => import('../pages/ProductsPage.vue'),
  },
  {
    path: '/accounts',
    name: 'Accounts',
    // Lazy load the component
    component: () => import('../pages/AccountsPage.vue'),
  },
  {
    path: '/notifications',
    name: 'Notifications',
    // Lazy load the component
    component: () => import('../pages/NotificationsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
