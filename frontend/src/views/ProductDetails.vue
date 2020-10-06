<template>

    <b-container class="p-2">
        <div>
            <b-alert
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
            >
                Añadido a la cesta correctamente
                <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                ></b-progress>
            </b-alert>
        </div>
        <b-card class="overflow-hidden">
            <b-row>
                <b-col md="6">
                    <b-card-img :src=product.image alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title=product.name>
                        <b-card-text>
                            {{
                                product.description
                            }}
                        </b-card-text>
                        <b-card-text class="alert-info text-xl-center text-dark">
                            Precio
                            <b-icon-box-arrow-in-right></b-icon-box-arrow-in-right>
                            <span class="font-weight-bold">
                            {{
                                    product.price.toFixed(2)
                                }}
                            </span>
                            €
                        </b-card-text>

                    </b-card-body>
                    <b-button class="mr-2 ml-2" variant="outline-success" v-on:click="addToCart()">Añadir a la cesta</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-container>

</template>

<script>
import Product from "@/components/Product";
import axios from "axios";


export default {
    name: "ProductDetails",
    components: {Product},
    data() {
        return {
            product: this.$route.params,
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false

        }
    },
    methods: {
        addToCart(){
            this.$store.commit('addToCart',this.product)
            this.showAlert()
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        refreshCart() {
            const API_URL = 'http://'+process.env.VUE_APP_API_HOST+'/api/v1/cart/myproducts';

            axios.get(API_URL , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    this.$store.commit('refreshCart',response.data)
                    this.products=this.$store.state.cart
                }).catch(error =>{
                    if(error.response.status==500){
                        console.log(error.response)
                    }
            });
        }
    }
}
</script>

<style scoped>

</style>
