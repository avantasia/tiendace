<template>
    <b-container fluid>
        <b-row>
            {{ category.category }}
        </b-row>

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
                    <b-button class="mr-2 ml-2" variant="outline-success":to="{ name: 'ProductDetails', params: product}">
                        Ver detalles

                    </b-button>

                </b-card>

            </b-card-group>

        </b-row>

    </b-container>
</template>

<script>
import jsonp from 'jsonp';

export default {
    name: "ProductList",
    data() {
        return {
            products: [],
            category: this.$route.params

        }
    },
    created() {
        let $url;
        if (this.category.category == null) {
            $url = 'http://localhost/api/v1/products/'
        } else {
            $url = 'http://localhost/api/v1/categories/' + this.category.category + '/products'
        }

        jsonp($url, null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                // Get all products.
                // TODO get only some of them in rows with indexNumer api/do something to paginate
                this.products = data
            }
        });
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
    methods: {}
}
</script>

<style scoped>
.card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    height: 15rem;
    object-fit: cover;
}

</style>
