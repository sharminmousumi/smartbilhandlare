<template>
    <div class="container">
              
       <div class="grid-container">
        <div id="Json" v-for="Customer in ApiData" v-bind:key="Customer.id">
            
            <p id="imgName">
                <img
                    :src="getImgUrl(Customer.imgName)"
                    v-bind:alt="Customer.imgName"
                    style="width: 400px; height: 300px"
                    v-on:click="showResult = true"
                />
            </p>
            <p id="pris" class="btn btn-danger">Pris: {{ Customer.pris }}</p>
            <p id="model">Model: {{ Customer.model}}</p>
            <p id="fuel">Bränsle :{{ Customer.fuel}}</p>
            <p id="miles">Miles: {{ Customer.miles}}</p>
            <button id="deletebtn" v-on:click="deleteBtn(Customer.id)" class="btn btn-success">Delete</button>
            
        </div>
        </div>
     
 </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Billager",
    data() {
        return {
            
            ifCustomer:false,
            enable:false,
            
            ApiData: null,
            options: {
                headers: {
                    "Content-Type": "application/json",
                },
            }
           
        };
    },
      components: {
         
        
    },
    
    created(){
        this.getData();
    },
    watch: {
        // call again the method if the route changes
        $route: "getData",
    },
  
  
    methods: { 
        getImgUrl(pic) {
            return require("../assets/image/" + pic);
        },
        getData() {
            axios
                .get('/LagerBil')
                .then(response => (this.ApiData = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
      
        },

        //delete button

    deleteBtn(id){
       axios
      .delete('/bil/'+id)
      .then(response => {(this.ApiData = response.data)
      if(response!==null){
        this.getData();
        console.log(this.ApiData);
      }
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      
   },
       
      
    },
    
};
</script>
<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
#Json >p{
    font-family: Arial, Helvetica, sans-serif;
     font-weight: bold;
    margin-bottom: 10px;    
    color: black;
    
}
#pris{
    margin-left: 290px;
}
#deletebtn{
    width: 200px;
    margin-bottom: 10px;
}
#Json{
    margin-left: 60px;
}

</style>