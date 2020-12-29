import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import KontaktaOss from "../views/KontaktaOss.vue";
import LagerBil from "../views/LagerBil.vue";
import VärderaDinBil from "../views/VärderaDinBil.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/KontaktaOss",
    name: "KontaktaOss",
    component: KontaktaOss
    
  },
  {
    path: "/LagerBil",
    name: "LagerBil",
    component: LagerBil
  },
  {
    path: "/VärderaDinBil",
    name: "VärderaDinBil",
    component: VärderaDinBil
  },
  
 

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;