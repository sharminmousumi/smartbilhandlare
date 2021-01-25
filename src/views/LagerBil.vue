<template>
    <div class="container">
        <div id="navbar" >
            
    
        </div>
        
       <div class="grid-container">
        <div id="Json" class="container" v-for="Customer in ApiData" v-bind:key="Customer.id">
            <p><img :src="image" style="width: 500px; height:400px"/></p>
            <p id="pris" class="btn btn-danger">Pris: {{ Customer.pris }}</p>
            <p id="model">Model: {{ Customer.model}}</p>
            <p id="fuel">Fuel:{{ Customer.fuel}}</p>
            <p id="miles">Miles: {{ Customer.miles}}</p>
            <button id="deletebtn" v-on:click="deleteBtn(Customer.id)" class="btn btn-success">Delete</button>
            
        </div>
        </div>
     
 </div>
</template>

<script>
import axios from "axios";
import image from "../assets/image/car1.jpeg";
export default {
    name: "LagerBil",
    data() {
        return {
            
            ifCustomer:false,
            enable:false,
             image: image,
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
  
  
    methods: { 
        getData() {
            axios
                .get('/LagerBil')
                .then(response => (this.ApiData = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
      
        },
        deleteBtn(id){
       axios
      .delete('/deleteBil',{delete:'',id: id})
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
}
#navbar > h1{
    text-align: center;
    
}
</style>