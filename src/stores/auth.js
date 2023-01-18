import { defineStore } from "pinia";
import api from "../services/api";

export const authStore = defineStore("authStore", {
  state: () => {
    return {
      user: {},
      loggedIn: false,
      fetching: false,
    };
  },

  getters: {
    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async signin(params) {
      this.fetching = true;
      this.loggedIn = false;

      try {
        const res = await api.signin(params);

        this.user = res.data ? res.data.data : {};
        this.loggedIn = true;
      } catch (error) {
        console.log(error.message);
      }

      this.fetching = false;
      return this.loggedIn;
    },
  },

  persist: {
    enabled: true,
  },
});
