<template>
    <div class="wrapper-page">
            <div class="panel panel-color panel-primary panel-pages">
                <div class="panel-heading bg-img"> 
                    <div class="bg-overlay"></div>
                    <h3 class="text-center m-t-10 text-white"> Sign In to <strong>Moltran</strong> </h3>
                </div> 


                <div class="panel-body">
                <form class="form-horizontal m-t-20" @submit.prevent="login" >
                    
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <input type="email" v-model="form.email" class="form-control input-lg " required="" placeholder="E-mail">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control input-lg" type="password" v-model="form.password" required="" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-group ">
                        <div class="col-xs-12">
                            <div class="checkbox checkbox-primary">
                                <input id="checkbox-signup" type="checkbox">
                                <label for="checkbox-signup">
                                    Remember me
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="form-group text-center m-t-40">
                        <div class="col-xs-12">
                            <button class="btn btn-primary btn-lg w-lg waves-effect waves-light" type="submit">Log In</button>
                        </div>
                    </div>

                    <div class="form-group m-t-30">
                        <div class="col-sm-7">
                            <router-link to="/forgot">Forgot your password?</router-link>
                            
                        </div>
                        <div class="col-sm-5 text-right">
                            <router-link to="/register">Create an account</router-link>
                            
                        </div>
                    </div>
                </form> 
                </div>                                 
                
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import { error } from 'jquery';

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
        axios.post('/api/auth/login',this.form)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error.response.data))
      // Replace alert with your desired login logic
     // alert(`Email: ${this.form.email}\nPassword: ${this.form.password}`);
    },
  },
};
</script>


<style scoped>

</style>