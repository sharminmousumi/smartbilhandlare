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
                    
                    <input  v-model="bil.model" type="text" required />
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
                    <input id ="pris" v-model="bil.pris" type="number" required />
                </div>

                <div class="form-group">
                    <label>Fuel</label>
                    <input  id ="fuel" v-model="bil.fuel" type="text" required />
                    <div
                        v-if="
                            !$v.bil.fuel.required && $v.bil.fuel.$dirty
                        "
                        class="error-class"
                    >
                        
                    </div>
                    <div v-if="!$v.bil.fuel.minLength" class="error-class">
                        
                    </div>
                </div>

                <div class="form-group">
                    <label>Miles</label>
                    <input  id ="miles" v-model="bil.miles" type=number required />
                    <div
                        v-if="
                            !$v.bil.miles.required &&
                            $v.bil.miles.$dirty
                        "
                        class="error-class"
                    >
                        Field is required
                    </div>
                    <div v-if="!$v.bil.miles.minLength" class="error-class">
                        Field is required
                    </div>
                </div>

                <div class="form-group">
                    <label>Img url</label>
                    <input id ="img" v-model="bil.url" type="url" required />
                    <div
                        v-if="!$v.bil.url.required && $v.bil.url.$dirty"
                        class="error-class"
                    >
                        Field is required
                    </div>
                    <div v-if="!$v.bil.url.url" class="error-class">
                        Please enter a valid url
                    </div>
                </div>

                <button
                    :disabled="isLoading"
                    @click.prevent="submitForm()"
                    type="submit" class="btn btn-primary" button id="submitbtn"
                >
                    <span>Submit</span>
                </button>

                <div v-show="isLoading">Loading...</div>
                <div v-show="success">
                   
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
import { required, minLength, between, url } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            bil: {
                model: "",
                pris: 0,
                fuel: "",
                miles: "",
                url: "",
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
                between: between(0, 100),
            },
            fuel: {
                required,
                minLength: minLength(3),
            },
            miles: {
                required,
                between: between(0, 100),
            },
            url: {
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
                this.bil.pris = Number(this.bil.pris);
                axios
                    .post("/upload", this.bil, this.options)
                    .then((response) => {
                        console.log("Response", response);
                        if (response.status === 200) {
                            this.isLoading = false;
                            this.success = true;
                            this.bil.model = "";
                            this.bil.pris= 0;
                            this.bil.fuel = "";
                            this.bil.miles = "";
                            this.bil.url = "";
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
}
#submitbtn{
  width: 150px;
  margin-bottom: 30px;
}
.form-group >input{
  margin-left: 32px;
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
</style>