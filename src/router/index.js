import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Issues from "@/views/Issues.vue";
import Issue from "@/components/Issue.vue";
import PageNotFound from "@/components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/issues/:type",
    component: Issues,
    children: [{ path: "", component: Issue }],
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
