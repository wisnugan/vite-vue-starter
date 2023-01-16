import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/views/auth/LoginView.vue";

const routes = [];

routes.push({
  path: "/",
  redirect: "/login",
});

routes.push({
  path: "/",
  component: DefaultLayout,
  children: [
    {
      path: "login",
      name: "Login",
      component: Login,
    },
  ],
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
