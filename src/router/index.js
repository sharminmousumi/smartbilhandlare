import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue";
import LagerBil from "../views/LagerBil.vue";
import Becomecustomer from "../views/Becomecustomer.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus
    
  },
  {
    path: "/LagerBil",
    name: "LagerBil",
    component: LagerBil
  },
  {
    path: "/becomecustomer",
    name: "Becomecustomer",
    component: Becomecustomer
  },
  
 

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;