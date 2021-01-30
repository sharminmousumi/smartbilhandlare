import Vue from "vue";
import VueRouter from "vue-router";
import Hem from "../views/Hem.vue";
import KontaktaOss from "../views/KontaktaOss.vue";
import BilLager from "../views/BilLager.vue";
import VärderaDinBil from "../views/VärderaDinBil.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hem",
    component: Hem
  },
  {
    path: "/KontaktaOss",
    name: "KontaktaOss",
    component: KontaktaOss
    
  },
  {
    path: "/BilLager",
    name: "BilLager",
    component: BilLager
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