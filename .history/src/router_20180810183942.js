import Vue from "vue";
import Router from "vue-router";
import Search from "./views/Search.vue";
import Secret from "./views/Secret.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Search",
      component: Search
    },
    {
      path: "/secret",
      name: "Secret",
      component: Secret
    }
  ]
});
