<template>
    <div class="container">
        <div id="navbar" >
            
    
        </div>
        
       <div class="grid-container">
        <div id="Json" class="container" v-for="Customer in ApiData" v-bind:key="Customer.id">
            <p><img :src="image" style="width: 500px; height:400px"/></p>
            <p id="id">ID: {{ Customer.id }}</p>
            <p id="name">Name: {{ Customer.name}}</p>
            <p id="fuel">Fuel:{{ Customer.fuel}}</p>
            <p id="miles">Miles: {{ Customer.miles}}</p>
            <p id="pris">Pris: {{ Customer.pris }} sek</p>
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
                .get('http://localhost:3000/details')
                .then(response => (this.ApiData = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
      
        },
        deleteBtn(id){
       axios
      .delete('http://localhost:3000/details/'+id)
      .then(response => {(this.ApiData = response.data)
      if(response!==null){
        this.getData();
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
#Json{
    
    font-family:  'Times New Roman', serif;
    
    margin-bottom: 10px;    
    color: black;
    
}

.pajbank{
  
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
}

#deletebtn{
    width: 200px;
}
#navbar > h1{
    text-align: center;
    
}

</style>
