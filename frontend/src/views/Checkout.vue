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
                        <b-form-input id="address" required v-model="user.address"></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Ciudad:"
                        label-align-sm="right"
                        label-for="city"
                    >
                        <b-form-input id="city" required v-model="user.city"></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label-cols-sm="3"
                        label="Codigo postal:"
                        label-align-sm="right"
                        label-for="postal_code"
                    >
                        <b-form-input id="postal_code" required v-model="user.postal_code"></b-form-input>
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
                        <b-form-radio v-model="shipping_method" name="shipping" value=2>Correos Urgente +2€
                        </b-form-radio>
                        <b-form-radio v-model="shipping_method" name="shipping" value=0>Correos Normal - Gratis
                        </b-form-radio>
                        <b-form-radio v-model="shipping_method" name="shipping" value=3>Mensajería +3€</b-form-radio>

                    </b-form-radio-group>

                </b-form-group>

            </b-card>
        </div>
        <div class="mt-3">
            <b-card bg-variant="light">
                <b-form-group
                    label-cols-lg="3"
                    label="Selecciona el metodo de pago"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                >
                    <b-form-radio-group
                        class="pt-2">
                        <b-form-radio v-model="payment_method" name="payment" value=1>Contra reembolso</b-form-radio>
                        <b-form-radio disabled v-model="payment_method" name="payment" value=0>Paypal</b-form-radio>
                        <b-form-radio disabled v-model="payment_method" name="payment" value=3>Tarjeta de crédito
                        </b-form-radio>

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
                    Productos : {{ this.totalPrice() }} , Envío {{ this.shipping() }}
                    <h2>Total: {{ parseFloat(this.totalPrice()) + parseFloat(this.shipping()) }} €</h2>


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
                {{ message }}
                <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                ></b-progress>
            </b-alert>
        </div>

        <b-button v-if="this.$store.state.auth.status.loggedIn" v-on:click="checkout()" type="button" variant="outline-success"
                  class="btn btn-outline-success btn-block mt-3">Confirmar compra
        </b-button>
        <b-button v-else :to="{name: 'Register'}" type="button" variant="outline-success"
                  class="btn btn-outline-success btn-block mt-3">Registrate para finalizar la compra
        </b-button>

    </b-container>

</template>

<script>
import User from "@/models/User";
import axios from "axios";
import Cart from "@/views/Cart";

export default {
    name: "Checkout",
    components: {Cart},
    data() {
        return {
            user: new User(),
            products: [],
            shipping_method: "",
            payment_method: "",
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            message: ""
        }
    },
    created() {
        this.refreshProfile();
        this.products = this.$store.state.cart
    },

    methods: {
        refreshProfile() {
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/users/myuser';

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
        totalPrice() {
            let result = this.products.reduce((a, b) => a += Object.values(b)[2], 0);
            return result.toFixed(2)

        },
        shipping() {
            if (isNaN(this.shipping_method) || this.shipping_method == null || this.shipping_method === "") {
                return 0
            } else {
                return parseFloat(this.shipping_method).toFixed(2)
            }
        },
        checkout() {

            if (isNaN(this.shipping_method) || this.shipping_method == null || this.shipping_method === "") {
                this.message = "Debe seleccionar un método de envío"
                this.showAlert()
            } else if (isNaN(this.payment_method) || this.payment_method == null || this.payment_method === "") {
                this.message = "Debe seleccionar un método de pago"
                this.showAlert()
            } else {
                const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/orders/create';
                let data = {
                    'payment_method': this.payment_method,
                    'shipping_method': this.shipping_method
                }

                axios.post(API_URL, data, {headers: {'Authorization': 'Bearer ' + this.$store.state.auth.user.token}})
                    .then(response => {
                        console.log(response)
                        this.showMsgOk()
                    });
            }

        },
        showMsgOk() {
            this.message="Compra realizada correctamente, volviendo a la página principal"
            this.showAlert();
            this.$store.commit('emptyCart');
            this.$store.commit('refreshCart');
            setTimeout(() => { this.$router.push('/');}, 5000)


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
