<template><b-navbar
    toggleable="md"
    type="dark"
    variant="info" id="top">
    <b-navbar-brand id="daj"><img class="mr-3" :src="require('../assets/image/logo.png')" height="40"/> </b-navbar-brand>
    <b-navbar-nav id="Nav">
        <router-link to="/" class="nav_el">Hem</router-link>
        <router-link to="/Billager" class="nav_el">Billager</router-link>
        <router-link to="/Värderadinbil" class="nav_el">Värderadinbil</router-link>
        <router-link to="/Kontaktaoss" class="nav_el">Kontakta oss</router-link>
    </b-navbar-nav>
  </b-navbar>
 
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style scoped>
.nav_el{
  margin-right: 50px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px;
  display:inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
 
}
.nav_el:hover{
  color:rgb(0, 255, 149);
}


#Nav{
  
    margin-left: 50px;
    
    
}
#daj{
  color: white;
  font-size: 40px;
  padding: 10px;

                    
}
#top{
  margin-bottom: 1px;
}




</style>