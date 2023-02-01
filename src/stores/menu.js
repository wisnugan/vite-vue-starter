import { defineStore } from "pinia";

export const useMenuStore = defineStore("useMenuStore", {
  state: () => {
    return {
      sidebar: false,
      backdrop: false,
    };
  },

  getters: {
    isSidebar(state) {
      return state.sidebar;
    },
  },

  actions: {
    setSidebar() {
      this.sidebar = !this.sidebar;
      if (this.sidebar) this.backdrop = true;
    },
    hideSide() {
      this.sidebar = false;
      this.backdrop = false;
    },
  },

  persist: {
    enabled: true,

    strategies: [{ key: "menu", storage: localStorage }],
  },
});
