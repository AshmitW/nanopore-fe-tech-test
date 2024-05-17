import { defineStore } from 'pinia';
import axios from 'axios';

interface customerData {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  start_date: Date;
  account_roles: Array<object>;
}
interface accountData {
  id: number;
  organisation_name: string;
  address_line_1: string;
  address_line_2: string;
  region: number;
  country: string;
  duns_number: string;
  create_date: Date;
  account_roles: Array<object>;
}

interface authAccountData {
  id: number | undefined;
  organisation_name: string | undefined;
  address_line_1: string | undefined;
  address_line_2: string | undefined;
  region: number | undefined;
  country: string | undefined;
  duns_number: string | undefined;
  create_date: Date | undefined;
  role: string;
}

interface roleData {
  id: number;
  role: string;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false as boolean,
    customersData: [] as customerData[],
    accountsData: [] as accountData[],
    authCustomer: {} as customerData,
    authAccounts: [] as authAccountData[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentAccount: {} as authAccountData | any,
  }),
  actions: {
    // @ts-expect-error password parameter is not used in this function right now as we don't have password data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async login(email: string, password: string): Promise<boolean> {
      try {
        // Fetch customer data from JSON file and find the customer with the email
        // Password is not checked in this function as we don't have password data
        const customersResponse = await axios.get('../data/customers.json');
        // Save the customer data in a constant
        const tempCustomData = customersResponse.data.customers;

        const authCustomer = tempCustomData.find((customer: customerData) => customer.email === email);
        if (authCustomer) {
          // once the customer is found, save data in the store and fetch accounts data
          this.customersData = customersResponse.data.customers;
          const accountsResponse = await axios.get('../data/accounts.json');
          this.accountsData = accountsResponse.data.accounts;
          this.authCustomer = authCustomer;
          // get the accounts data of the authenticated customer account roles and accounts data and save it in the store
          const accountRoles = this.authCustomer.account_roles;
          const accountsData = this.accountsData;
          this.authAccounts = accountRoles
            .map((role) => role as roleData)
            .map((role) => {
              const account = accountsData.find((account) => account.id === role.id);
              return {
                id: account?.id,
                organisation_name: account?.organisation_name,
                address_line_1: account?.address_line_1,
                address_line_2: account?.address_line_2,
                region: account?.region,
                country: account?.country,
                duns_number: account?.duns_number,
                create_date: account?.create_date,
                role: role.role,
              };
            });
          this.currentAccount = this.authAccounts[0];
          this.isLoggedIn = true;
          return true;
        }
        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.authCustomer = {} as customerData;
    },
    setCurrentAccount(account: number) {
      const authStore = useAuthStore();
      this.currentAccount = authStore.authAccounts.find((acc) => acc.id === account);
    },
  },
  getters: {
    getFullName: (state): string => {
      return `${state.authCustomer.first_name} ${state.authCustomer.last_name}`;
    },
  },
});
