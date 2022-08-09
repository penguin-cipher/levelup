import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/About",
      name: "about",
      component: AboutView,
    },
    {
      path: "/Services",
      name: "services",
      component: ServiceView,
    },
    {
      path: "/Contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
