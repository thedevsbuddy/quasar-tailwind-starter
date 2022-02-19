import auth from "./middlewares/auth";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "Home",
        },
        component: () => import("pages/Index.vue"),
      },
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          title: "Dashboard",
          // middlewares: [auth],
        },
        component: () => import("pages/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/auth/Login.vue"),
    name: "login",
    meta: {
      title: "Login",
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
