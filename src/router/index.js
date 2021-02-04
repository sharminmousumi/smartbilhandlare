import Vue from "vue";
import VueRouter from "vue-router";
import Hem from "../views/Hem.vue";
import Kontaktaoss from "../views/Kontaktaoss.vue";
import Billager from "../views/Billager.vue";
import Värderadinbil from "../views/Värderadinbil.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hem",
    component: Hem
  },
  {
    path: "/Kontaktaoss",
    name: "Kontaktaoss",
    component: Kontaktaoss
    
  },
  {
    path: "/Billager",
    name: "Billager",
    component: Billager
  },
  {
    path: "/Värderadinbil",
    name: "Värderadinbil",
    component: Värderadinbil
  },
  
 

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;