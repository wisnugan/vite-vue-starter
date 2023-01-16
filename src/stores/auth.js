import { defineStore } from "pinia";

export const useCatalog = defineStore("catalog-store", {
  state: () => {
    return {
      newArrivals: [],
      fetching: false,
    };
  },

  getters: {
    results(state) {
      return state.newArrivals;
    },

    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async fetchUsers() {
      this.fetching = true;

      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
      this.fetching = false;
    },
  },
});
