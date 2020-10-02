<template>
    <b-container>

    <div class="mt-3">
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="3"
                label="Confirma la direccion de envío"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    label-cols-sm="3"
                    label="Dirección:"
                    label-align-sm="right"
                    label-for="address"
                >
                    <b-form-input id="address" v-model="user.address"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Ciudad:"
                    label-align-sm="right"
                    label-for="city"
                >
                    <b-form-input id="city" v-model="user.city"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Codigo postal:"
                    label-align-sm="right"
                    label-for="postal_code"
                >
                    <b-form-input id="postal_code" v-model="user.postal_code"></b-form-input>
                </b-form-group>

            </b-form-group>
        </b-card>
    </div>
        <div class="mt-3">
            <b-card bg-variant="light">
                <b-form-group
                    label-cols-lg="3"
                    label="Selecciona el metodo de envio"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                >
                    <b-form-radio-group
                        class="pt-2">
                        <b-form-radio v-model="selected" name="shipping" value=2 >Correos Urgente  +2€</b-form-radio>
                        <b-form-radio v-model="selected" name="shipping" value=0 >Correos Normal - Gratis</b-form-radio>
                        <b-form-radio v-model="selected" name="shipping" value=3 >Mensajería  +3€</b-form-radio>

                    </b-form-radio-group>

                </b-form-group>

            </b-card>
        </div>
        <div class="mt-3">
            <b-card class="mt-3" bg-variant="light">
                <b-form-group
                    label-cols-lg="3"
                    label="Total a pagar"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                >
                    Productos : {{this.totalPrice()}} , Envío {{this.shipping()}}
                    <h2>Total: {{parseFloat(this.totalPrice())+parseFloat(this.shipping())}} €</h2>


                </b-form-group>

            </b-card>
        </div>
        <div>
            <b-alert
                :show="dismissCountDown"
                dismissible
                variant="error"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
            >
                Debe seleccionar un método de envío
                <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                ></b-progress>
            </b-alert>
        </div>
        <b-button v-on:click="checkout()" type="button" variant="outline-success" class="btn btn-outline-success btn-block mt-3" >Confirmar compra</b-button>

    </b-container>

</template>

<script>
import User from "@/models/User";
import axios from "axios";
import Cart from "@/views/Cart";

export default {
name: "Checkout",
    components: {Cart},
    data(){
        return{
            user:new User(),
            products: [],
            selected:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    created(){
        this.refreshProfile();
        this.products = this.$store.state.cart
    },

    methods : {
        refreshProfile() {
            const API_URL = 'http://localhost/api/v1/users/myuser';

            axios.get(API_URL, {headers: {'Authorization': 'Bearer ' + this.$store.state.auth.user.token}})
                .then(response => {
                    this.user.email = response.data.user.email;
                    this.user.name = response.data.user.name;
                    this.user.address = response.data.user.address;
                    this.user.city = response.data.user.city;
                    this.user.postal_code = response.data.user.postal_code;
                    this.user.profile_picture = response.data.user.picture;
                });
        },
        totalPrice(){
            let result = this.products.reduce((a, b) => a += Object.values(b)[2], 0);
            return result.toFixed(2)

        },
        shipping(){
            if (this.selected==NaN || this.selected==null || this.selected==""){
                return 0
            }else{
                return parseFloat(this.selected).toFixed(2)
            }
        },
        checkout(){

            if(this.selected==NaN || this.selected==null || this.selected==""){
                this.showAlert()
            }
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
