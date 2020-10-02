<template>
    <b-container>
        <b-card  v-for="product in groupedProducts"
                    :key="product[0].index"
                    :title=product[0].name
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="overflow-hidden mt-1 border rounded-sm "

            >
                <b-row no-gutters>
                    <b-col class="col-md-4" align-self="center">
                        <b-card-img :src="product[0].image" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>

                    <b-col align-self="center">
                        Cantidad
                        <b-icon-dash-circle role="button" class="nosel ml-1" v-on:click="removeFromCart(product[0])"></b-icon-dash-circle>
                        {{ product.length }}
                        <b-icon-plus-circle role="button" class="nosel" v-on:click="addToCart(product[0])"></b-icon-plus-circle>

                    </b-col>
                    <b-col align-self="center">
                        Precio
                        {{ product[0].price.toFixed(2) }}
                    </b-col>

                    <b-col align-self="center">
                        <b-button class="mr-2 ml-2" variant="outline-success"
                                  :to="{ name: 'ProductDetails', params: product[0]}">
                            Ver Detalles
                        </b-button>
                    </b-col>
                    <b-col align-self="center">
                        <b-button class="mr-2 ml-2 " variant="outline-danger" v-on:click="emptyCart(product[0])">
                            Eliminar
                        </b-button>
                    </b-col>
                    <b-col align-self="center">
                        Total {{ product.map(product => product.price).reduce((plus, price) => price + plus).toFixed(2)}}
                    </b-col>
                </b-row>
            </b-card>

        <b-card  title="Total de la compra"
                 tag="article"
                 class="overflow-hidden mt-1 border rounded-sm "

        >
            Total {{ this.totalPrice}}
            </b-card>

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
            groupedProducts: [],
            category: this.$route.params

        }
    },
    created() {
        this.products = this.$store.state.cart
        this.groupedProducts = _.groupBy(this.products, "id")
    },
    computed: {
        totalPrice(){
            let result = this.products.reduce((a, b) => a += Object.values(b)[2], 0);
            return result.toFixed(2)

        },
        productsPerRow() {
            return this.products.reduce((c, n, i) => {
                if (i % 5 === 0) c.push([]);
                c[c.length - 1].push(n);
                return c;
            }, []);
        }
    },
    methods: {
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item)
            this.products = this.$store.state.cart
            this.groupedProducts = _.groupBy(this.products, "id")
        },
        addToCart(item) {
            this.$store.commit('addToCart', item)
            this.products = this.$store.state.cart
            this.groupedProducts = _.groupBy(this.products, "id")
        },
        emptyCart(item){
            this.$bvModal.msgBoxConfirm('¿Desea eliminar todos los productos del carro?.', {
                title: 'Por favor confirme la eliminación',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'SI',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            })
                .then(value => {
                    if(value){
                    this.products
                        .filter(p => p.id==item.id)
                        .forEach(p => this.removeFromCart(p))
                    }
                })
                .catch(err => {
                    console.log(err)
                })


        }
    }
}
</script>

<style scoped>

.card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    height: 15rem;
    object-fit: cover;
}
.nosel{
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
</style>
