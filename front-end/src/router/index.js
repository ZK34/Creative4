import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from '../views/Categories.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
      path: '/Categories',
      name: 'Categories',
      component: Categories,
  },
  {
      path: '/Product',
      name: 'Product',
      component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
