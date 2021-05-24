import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AppCars from "./components/AppCars.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: AppCars },
  {
    path: "/cars",
    component: AppCars,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
