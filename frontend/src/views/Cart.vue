<template>
    <b-container fluid>
        <b-row>

            <b-card-group class="mx-auto mb-2 " deck v-for="row in productsPerRow" :key="products.index">

                <b-card v-for="product in row"
                        :key="product.index"
                        :title=product.name
                        :img-src=product.image
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"

                >
                    <b-card-text>
                        {{ product.description }}.
                    </b-card-text>
                    <b-button class="mr-2 ml-2" variant="outline-success" :to="{ name: 'ProductDetails', params: product}">
                        Ver Detalles
                    </b-button>
                    <b-button class="mr-2 ml-2 " variant="outline-danger"  v-on:click="removeFromCart(product)">
                        Eliminar
                    </b-button>

                </b-card>

            </b-card-group>

        </b-row>

    </b-container>
</template>

<script>
import jsonp from 'jsonp';
import axios from "axios";

export default {
    name: "Cart",
    data() {
        return {
            products: [],
            category: this.$route.params

        }
    },
    created() {
        this.products=this.$store.state.cart
        /*
        const API_URL = 'http://localhost/api/v1/cart/myproducts';

        axios.get(API_URL , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
            .then(response => {
                //this.products=response.data;
                this.$store.commit('refreshCart',response.data)
            });

         */
    },
    computed: {
        productsPerRow() {
            return this.products.reduce((c, n, i) => {
                if (i % 5 === 0) c.push([]);
                c[c.length - 1].push(n);
                return c;
            }, []);
        }
    },
    methods: {
        removeFromCart(){
            this.$store.commit('removeFromCart',this.product)
        }
    }
}
</script>

<style scoped>

</style>
