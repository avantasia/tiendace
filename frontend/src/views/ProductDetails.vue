<template>

    <b-container class="p-2">
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
                                    product.price
                                }}
                            </span>
                            €
                        </b-card-text>

                    </b-card-body>
                    <b-button>Añadir a la cesta</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-container>

</template>

<script>
import Product from "@/components/Product";

export default {
    name: "ProductDetails",
    components: {Product},
    data() {
        return {
            product: this.$route.params
        }
    },
}
</script>

<style scoped>

</style>
