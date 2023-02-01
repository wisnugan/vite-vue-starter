import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

import routes from "./routes.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const waitForStorageToBeReady = async (to) => {
  const auth = await useAuthStore();

  if (to.meta.auth && !auth.loggedIn) return "/login";
};

router.beforeEach(waitForStorageToBeReady);

export default router;
