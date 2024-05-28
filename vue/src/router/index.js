// routes.js
import { createRouter, createWebHistory } from "vue-router";
import ManageProduct from "@/Pages/ManageProduct.vue";
import ManageUser from "@/Pages/ManageUser.vue";
import HomeView from "../Pages/HomeView.vue";
import LoginPage from "../Pages/LoginPage.vue";
import RegisterPage from "@/Pages/RegisterPage.vue";

const routes = [
  { path: "/", component: HomeView, name: "HomeView" },
  { path: "/manageproduct", component: ManageProduct, name: "ManageProduct" },
  { path: "/manageuser", component: ManageUser, name: "ManageUser" },
  { path: "/signin", component: LoginPage, name: "LoginPage" },
  { path: "/register", component: RegisterPage, name: "RegisterPage" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// const routes = [
//   //   {
//   //     path: "/",
//   //     component: LoginPage,
//   //     name: "login",
//   //     beforeEnter: (to, from, next) => {
//   //       if (!localStorage.getItem("token")) {
//   //         next();
//   //       } else {
//   //         next("/home");
//   //       }
//   //     },
//   //   },
//   { path: "/home", component: HomeView, name: "HomeView" },
//   //   {
//   //     path: "/home",
//   //     component: HomePage,
//   //     name: "home",
//   //     beforeEnter: (to, from, next) => {
//   //       if (localStorage.getItem("token")) {
//   //         next();
//   //       } else {
//   //         next("/");
//   //       }
//   //     },
//   //   },
//   //   {
//   //     path: "/mypost",
//   //     component: MyPostPage,
//   //     name: "mypost",
//   //     beforeEnter: (to, from, next) => {
//   //       // check if user is logged in and redirect to login page if not
//   //       if (localStorage.getItem("token")) {
//   //         next();
//   //       } else {
//   //         next("/");
//   //       }
//   //     },
//   //   },
//   //   {
//   //     path: "/createpost",
//   //     component: CreatePost,
//   //     name: "createpost",
//   //     beforeEnter: (to, from, next) => {
//   //       // check if user is logged in and redirect to login page if not
//   //       if (localStorage.getItem("token")) {
//   //         next();
//   //       } else {
//   //         next("/");
//   //       }
//   //     },
//   //   },
//   //   {
//   //     path: "/viewpost",
//   //     component: ViewPost,
//   //     name: "ViewPost",
//   //     beforeEnter: (to, from, next) => {
//   //       // check if user is logged in and redirect to login page if not
//   //       if (localStorage.getItem("token")) {
//   //         next();
//   //       } else {
//   //         next("/");
//   //       }
//   //     },
//   //   },
//   //   {
//   //     path: "/logout",
//   //     name: "logout",
//   //     component: LoginPage,
//   //     beforeEnter: (to, from, next) => {
//   //       console.log("logout");
//   //       localStorage.removeItem("token");
//   //       localStorage.removeItem("user");
//   //       window.location.reload();
//   //       next("/");
//   //     },
//   //   },
// ];
