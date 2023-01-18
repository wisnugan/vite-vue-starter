import AppLayout from "@/layouts/AppLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import Login from "@/views/auth/LoginView.vue";
import Dashboard from "@/views/DashboardView.vue";

const routes = [];

routes.push({
  path: "/",
  redirect: "/login",
});

routes.push({
  path: "/",
  component: AppLayout,
  children: [
    {
      path: "login",
      name: "Login",
      component: Login,
    },
  ],
});

routes.push({
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        auth: true,
      },
    },
  ],
});

routes.push({
  path: "/:catchAll(.*)*",
  component: () => import("@/views/ErrorView.vue"),
  meta: {
    title: "Error404",
  },
});

export default routes;
