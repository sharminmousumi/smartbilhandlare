<template>
    <div class="template-div">
    <div class="container">
    <div class="row justify-content-around">
      <div class="col-6 rounded shadow">
        <h2 class="py-1">Upload a new Bil!</h2>
        
        <div class="form">
            <form @submit="submitForm">
                <div class="form-group">
                    <label>Model</label>
                    <input v-model="hamster.model" type="text" required />
                    <div
                        v-if="
                            !$v.hamster.model.required && $v.hamster.model.$dirty
                        "
                        class="error-class"
                    >
                        Field is required
                    </div>
                    <div v-if="!$v.hamster.model.minLength" class="error-class">
                        At least 3 characters
                    </div>
                </div>

                <div class="form-group">
                    <label>Pris</label>
                    <input id="pris" v-model="hamster.pris" type="number" required />
                    
                </div>

                <div class="form-group">
                    <label>Miles</label>
                    <input id ="miles" v-model="hamster.miles" type="number" required />
                    
                </div>

                <div class="form-group">
                    <label>Fuel</label>
                    <input  id="fuel" v-model="hamster.fuel" type="text" required />
                    <div
                        v-if="
                            !$v.hamster.fuel.required &&
                            $v.hamster.fuel.$dirty
                        "
                        class="error-class"
                    >
                        Field is required
                    </div >
                    <div v-if="!$v.hamster.fuel.minLength" class="error-class">
                        At least 3 characters
                    </div>
                </div>

                <div class="form-group">
                    <label>Img url</label>
                    <input id="img" v-model="hamster.imgName" type="url" required />
                    <div
                        v-if="!$v.hamster.imgName.required && $v.hamster.imgName.$dirty"
                        class="error-class"
                    >
                        Field is required
                    </div>
                    
                </div>

                <button
                    :disabled="isLoading"
                    @click.prevent="submitForm()"
                    type="submit" id="submitbtn" class="btn btn-primary"
                >
                    <span>Submit</span>
                </button>

                <div v-show="isLoading">Loading...</div>
                <div v-show="success">
                    Your hamster is now ready for battle!
                </div>
            </form>
        </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import { required, minLength, url } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            hamster: {
                model: "",
                pris: 0,
                miles: 0,
                fuel: "",
                imgName: "",
            },
            options: {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            isLoading: false,
            success: false,
        };
    },
    validations: {
        hamster: {
            model: {
                required,
                minLength: minLength(3),
            },
            pris: {
                required,
                
            },
            miles: {
                required,
                minLength: minLength(3),
            },
            fuel: {
                required,
                minLength: minLength(2),
            },
            imgName: {
                required,
                url,
            },
        },
    },
    methods: {
        submitForm: function () {
            //Validation
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log("You entered a valid form!");
                this.isLoading = true;
                
                axios
                    .post("/upload", this.hamster, this.options)
                    .then((response) => {
                        console.log("Response", response);
                        if (response.status === 200) {
                            this.isLoading = false;
                            this.success = true;
                            this.hamster.model = "";
                            this.hamster.pris = 0;
                            this.hamster.miles = "";
                            this.hamster.fuel = "";
                            this.hamster.imgName= "";
                            //Resets the form
                            this.$v.$reset();
                        }
                    })
                    .catch((error) => {
                        console.log("Error", error.message);
                        this.error = true;
                    });
            }
        },
    },
};
</script>

<style scoped>
.template-div{
  text-align: center;
  background-color:antiquewhite ;
  font-family: 'Times New Roman', Times, serif;
}
#submitbtn{
  width: 150px;
  margin-bottom: 30px;
  margin-left: 50px;
}
.form-group >input{
  margin-left: 32px;
  font-family: 'Times New Roman', Times, serif;
}
.form-group > #pris{
  margin-left: 49px;
}
.form-group > #fuel{
  margin-left: 48px;
}
.form-group > #miles{
  margin-left: 42px;
}
.form-group > #img{
  margin-left: 28px;
}
.error-class{
    font-family: 'Times New Roman', Times, serif;
}
</style>