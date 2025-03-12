import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue"; // Directly use App.vue since we have no views

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
  ],
});

export default router;
