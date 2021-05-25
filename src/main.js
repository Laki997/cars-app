import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AppCars from "./components/AppCars.vue";
import AddCar from "./components/AddCar.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: AppCars },
  {
    path: "/cars",
    name: "cars",
    component: AppCars,
  },
  {
    path: "/add",
    component: AddCar,
  },
  {
    path: "/edit/:id",
    component: AddCar,
    props: true,
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
