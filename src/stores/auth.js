import { defineStore } from "pinia";
import api from "../services/api";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      user: {},
      accessToken: null,
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
        this.user = res.data.data;
        this.accessToken = res.data.data.access_token;
        this.loggedIn = true;
      } catch (error) {
        console.log(error.message);
      }

      this.fetching = false;
    },
    async me() {
      try {
        const res = await api.me();

        this.user = res.data.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    async signout() {
      try {
        await api.signout();
      } catch (error) {
        console.log(error.message);
      }

      this.loggedIn = false;
      this.accessToken = null;
      this.user = {};
    },
  },

  persist: {
    enabled: true,

    strategies: [
      { key: "auth", storage: localStorage, paths: ["accessToken"] },
      { key: "user", storage: localStorage, paths: ["loggedIn", "user"] },
    ],
  },
});
