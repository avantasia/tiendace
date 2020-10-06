<template>
    <b-container>
        <div>
            <b-alert
                :show="dismissCountDown"
                dismissible
                :variant=level
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
            >
                {{ message }}
                <b-progress
                    :variant=level
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                ></b-progress>
            </b-alert>
        </div>
        <b-card bg-variant="light">
        <b-form >

            <b-form-group id="input-group-2" label="Nombre Completo" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Correo electrónico:"
                label-for="input-1"
                description="El correo electrónico debe ser válido, no lo usaremos para enviar correo no deseado."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Correo electrónico"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Contraseña" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    required
                    placeholder="Contraseña"
                    type="password"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Confirmar contraseña" label-for="input-2">
                <b-form-input
                    id="input-4"
                    v-model="form.password_confirmation"
                    required
                    placeholder="Confirmar contraseña"
                    type="password"
                ></b-form-input>
            </b-form-group>






            <b-button v-on:click="register()" type="button" variant="outline-success" class="btn btn-outline-success btn-block mt-3" >Registrarse</b-button>

        </b-form>
        </b-card>
    </b-container>
</template>

<script>
import User from "@/models/User";
import axios from "axios";

export default {
    name:"Register",
    data() {
        return {
            user: new User(),
            form: {
                email: '',
                name: '',
                password:'',
                password_confirmation:''
            }
            ,
            level:"warning",
            show: true,
            message:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    methods: {
        register() {
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/users/register';


            axios.post(API_URL, this.form)
                .then(response => {
                    this.message="Usuario creado correctamente"
                    this.level="success"
                    this.showAlert()

                })
                .catch(error =>{
                   if(error.response) {
                        //TODO Change language of validation errors, here or at the backend
                       let errors=""
                       for (let k in error.response.data){
                           errors+=error.response.data[k][0]+"\n"
                       }
                       this.level="warning"
                       this.message=errors
                       this.showAlert()
                   }

                });

        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },

    }
}
</script>

<style scoped>

</style>
