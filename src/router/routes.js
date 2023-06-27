export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/NotFound.vue"),
  },
];
