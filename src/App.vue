<template>
    <div id="app">
        
        <SideBar />
        <router-view id="main_content" />
        
        <Footer/>
    </div>
</template>

<script>

import SideBar from "../src/components/SideBar.vue";
import Footer from "../src/components/Footer.vue";

export default {
    name: "App",
    components: {
        SideBar,Footer,
    }
};
</script>

<style lang="scss">
#app{
    background-color:white;
}
#main_content {
    grid-column-start: 2;
    grid-column-end: 6;
    
}

</style>