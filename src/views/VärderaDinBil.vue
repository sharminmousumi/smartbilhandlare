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
                    <input v-model="bil.model" type="text" required />
                    <div
                        v-if="
                            !$v.bil.model.required && $v.bil.model.$dirty
                        "
                        class="error-class"
                    >
                        Field is required
                    </div>
                    <div v-if="!$v.bil.model.minLength" class="error-class">
                        At least 3 characters
                    </div>
                </div>

                <div class="form-group">
                    <label>Pris</label>
                    <input id="pris" v-model="bil.pris" type="number" required />
                    
                </div>

                <div class="form-group">
                    <label>Miles</label>
                    <input id ="miles" v-model="bil.miles" type="number" required />
                    
                </div>

                <div class="form-group">
                    <label>Fuel</label>
                    <input  id="fuel" v-model="bil.fuel" type="text" required />
                    <div
                        v-if="
                            !$v.bil.fuel.required &&
                            $v.bil.fuel.$dirty
                        "
                        class="error-class"
                    >
                        Field is required
                    </div >
                    <div v-if="!$v.bil.fuel.minLength" class="error-class">
                        At least 3 characters
                    </div>
                </div>

                <div class="form-group">
                    <label>Img url</label>
                    <input id="img" v-model="bil.imgName" type="url" required />
                    <div
                        v-if="!$v.bil.imgName.required && $v.bil.imgName.$dirty"
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
                    Din bil har sparat
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
            bil: {
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
        bil: {
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
                    .post("/upload", this.bil, this.options)
                    .then((response) => {
                        console.log("Response", response);
                        if (response.status === 200) {
                            this.isLoading = false;
                            this.success = true;
                            this.bil.model = "";
                            this.bil.pris = 0;
                            this.bil.miles = "";
                            this.bil.fuel = "";
                            this.bil.imgName= "";
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