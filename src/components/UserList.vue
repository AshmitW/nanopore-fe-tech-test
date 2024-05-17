<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const imageUrl =
  'https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed';

interface UserData {
  id: number;
  name: string;
  image: string;
  email: string;
  lastAccessed: string;
  role: string;
}

interface RoleData {
  id: string;
  name: string;
}

interface toggleData {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggles: any;
}

const users = ref<UserData[]>([
  {
    id: 1,
    name: 'Mathew Bourne',
    image: imageUrl,
    email: 'mathew.bourne@nanopore.tech.com',
    lastAccessed: '14/03/2022',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Rod Steward',
    image: imageUrl,
    email: 'row.steward@nanopore.tech.com',
    lastAccessed: '23/01/2022',
    role: 'leader',
  },
  {
    id: 3,
    name: 'Freddie Mercury',
    image: imageUrl,
    email: 'freddie.mercury@nanopore.tech.com',
    lastAccessed: '29/11/2022',
    role: 'member',
  },
  {
    id: 4,
    name: 'Elvis Prestley',
    image: imageUrl,
    email: 'elvis.prestley@nanopore.tech.com',
    lastAccessed: '08/06/2022',
    role: 'member',
  },
  {
    id: 5,
    name: 'ABC XYZ',
    image: imageUrl,
    email: 'abc.xyz@nanopore.tech.com',
    lastAccessed: '22/09/1997',
    role: 'admin',
  },
]);

const roles = ref<RoleData[]>([
  {
    id: 'member',
    name: 'Member',
  },
  {
    id: 'admin',
    name: 'Admin',
  },
  {
    id: 'leader',
    name: 'Leader',
  },
]);

const toggles = ref<toggleData[]>([
  {
    title: 'Products',
    toggles: [
      {
        id: 'warranties',
        name: 'Warranties',
        value: true,
      },
      {
        id: 'makeReturns',
        name: 'Make Returns',
        value: false,
      },
    ],
  },
  {
    title: 'Orders',
    toggles: [
      {
        id: 'placeOrders',
        name: 'Place Orders',
        value: true,
      },
      {
        id: 'invoicing',
        name: 'Invoicing',
        value: false,
      },
    ],
  },
  {
    title: 'Deliveries',
    toggles: [
      {
        id: 'arrageDeliveries',
        name: 'Arrange Deliveries',
        value: true,
      },
    ],
  },
  {
    title: 'Billing',
    toggles: [
      {
        id: 'makePurchases',
        name: 'Make Purchases',
        value: false,
      },
      {
        id: 'invoiceAccess',
        name: 'Invoice Access',
        value: false,
      },
    ],
  },
  {
    title: 'Accounts',
    toggles: [
      {
        id: 'addNewMembers',
        name: 'Add New Members',
        value: false,
      },
      {
        id: 'removeMembers',
        name: 'Remove Members',
        value: false,
      },
      {
        id: 'createAnAccount',
        name: 'Create An Account',
        value: false,
      },
    ],
  },
  {
    title: 'Community',
    toggles: [
      {
        id: 'fullAccess',
        name: 'Full Access',
        value: false,
      },
      {
        id: 'publicAccess',
        name: 'Public Access',
        value: true,
      },
      {
        id: 'registeredGuest',
        name: 'Registered Guest',
        value: true,
      },
    ],
  },
]);

const authStore = useAuthStore();

// this is terrible way of doing this, need to find a better way
const isDisabled = (userRole: string): boolean => {
  switch (authStore.currentAccount.role) {
    case 'admin':
      switch (userRole) {
        case 'admin':
          return false;
        case 'leader':
          return true;
        case 'member':
          return false;
        default:
          return true;
      }
    case 'leader':
      switch (userRole) {
        case 'admin':
          return false;
        case 'leader':
          return false;
        case 'member':
          return false;
        default:
          return false;
      }
    case 'member':
      switch (userRole) {
        case 'admin':
          return true;
        case 'leader':
          return true;
        case 'member':
          return true;
        default:
          return true;
      }
    default:
      return true;
  }
};
</script>

<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item v-for="user in users" :key="user.id" :name="user.name" :disabled="isDisabled(user.role)">
        <template #title>
          <div class="grid items-center w-full grid-cols-2 gap-4 p-0 align-middle md:p-4 md:grid-cols-4 shadow-custom">
            <div class="flex items-center align-middle">
              <el-avatar
                class="mr-3"
                :size="50"
                src="https://firebasestorage.googleapis.com/v0/b/oxford-nanopore-fe-tech-test.appspot.com/o/avatar.webp?alt=media&token=f8d4f7ed-554e-4110-8419-3a7f2033c3e8" />
              <p class="text-sm font-bold text-gray-600">{{ user.name }}</p>
            </div>
            <div class="hidden md:block">
              <p class="text-sm text-gray-600">{{ user.email }}</p>
            </div>
            <div class="hidden md:block">
              <p class="text-sm text-gray-600">{{ user.lastAccessed }}</p>
            </div>
            <div class="flex flex-wrap items-center align-middle">
              <el-select
                v-model="user.role"
                :disabled="isDisabled(user.role)"
                placeholder="Select"
                size="large"
                class="w-full rounded-xl border-nanopore-blue">
                <el-option
                  v-for="role in roles"
                  :key="role.id"
                  :label="role.name"
                  :value="role.id"
                  :disabled="isDisabled(role.id)" />
              </el-select>
            </div>
          </div>
        </template>
        <div>
          <div class="px-4 py-8">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-6">
              <div v-for="toggle in toggles" :key="toggle.title">
                <p class="font-bold">{{ toggle.title }}</p>
                <div v-for="switches in toggle.toggles" :key="switches.id">
                  <el-switch v-model="switches.value" :active-text="switches.name" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap px-6">
            <div class="md:hidden">
              <div>
                <p class="text-sm text-gray-600">{{ user.email }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">{{ user.lastAccessed }}</p>
              </div>
            </div>
            <div class="ml-auto">
              <el-icon :size="30" color="#414c4e">
                <i-ep-delete-filled />
              </el-icon>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped></style>
