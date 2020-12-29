<template>
<div>

<div class="customer">

</div>
 <div class="container">
    <div class="row justify-content-around">
      <div class="col-4 rounded shadow">
        <h1 class="py-1">Värdera Din Bil</h1>
        <div id="signup-form">
 <div id="form">
   
        <form v-on:submit="submitBtn" action="#" method="post">
          <div class="form-group">
           
      <label for="id">Registration No:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span></span>
      <input id="name" v-model="id" required class="form-control" placeholder="Registration No">
      </div>
      
  </div>
      <br>
      <div class="form-group">
        
      <label for="name">Bil Model:</label><br>
      <div class="input-group">
        <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span></span>
      <input id="name" type="text" required v-model="name"  placeholder="Model" class="form-control"/>
       </div> 
      
       </div>     
      <br>
      <div class="form-group">
        
      <label for="fuel">Fuel:</label><br>
      <div class="input-group">
        <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span></span>
      <input type="fuel" id="fuel" name="fuel" required v-model="fuel"  placeholder="Fuel" class="form-control" />
      </div>
      
      </div>
      <br>
      <div class="form-group">
        
      <label for="pris">Pris:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span></span>
      <input id="contentForm"  type="number" required v-model="pris" min=0 placeholder="Pris" class="from-control"/>
      </div>
      
      </div>
      <br>
      <div class="form-group">
        
      <label for="miles">Miles:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span></span>
      <input id="contentForm"  type="number" required v-model="phone"  placeholder="Miles" class="from-control"/>
      </div>
      
      </div>
      <br>
      <div class="form-group">
      <button id="submitbtn"  type='submit' class="btn-block btn-lg btn-primary">Submit</button><h2 v-if="Added">Added  to the list!</h2>
      </div>
    </form>
    
    </div>
      </div>
    </div>
  </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
 

export default {
    name: "VärderaDinBil",
     data () {
        
    return {
       name:"", 
       id:"",
       fuel:"",
       pris:"",
       Added:false,
       options: {
                headers: {
                    "Content-Type": "application/json",
                },
            },

           
    }
    
     },
    
     
    methods:{
        submitBtn(event){  
       event.preventDefault();
       
       
       this.Added="";
         axios
        .post('http://localhost:3000/details',
        {name:this.name,id:this.id,fuel:this.fuel,pris:this.pris})
        .then(response => {(response.data)
          if(response !==null){
        this.Added=true;
        console.log(response);
          }
        }) 
        .catch(error => {
        console.log(error)
        this.errored = true
      })
      
        }
        
    }
          
    
}
</script>
<style lang="scss">
.form-group>label{
  margin-bottom:-20px;
}
.py-1{
  font-family: Arial, Helvetica, sans-serif;
}








</style>