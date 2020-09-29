<template>
    <b-container fluid class="p-2">
        <b-row>
            <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                class="mb-4 mx-auto imagenPortada  "
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                no-animation
            >
                <!-- Slides -->
                <b-carousel-slide
                    caption="Especial comida internacional"
                    text="Viaja por el mundo a través de sus sabores"
                    img-src="img/zahrin-lukman-VSNoQdimlQQ-unsplash.jpg"
                    class="imagenPortada"
                ></b-carousel-slide>

                <b-carousel-slide
                    caption="Especias especiales"
                    text="Especias y condimentos de importación"
                    img-src="img/hue12-photography-8rTwokBwz1w-unsplash.jpg"
                    class="imagenPortada"

                ></b-carousel-slide>

                <b-carousel-slide
                    caption="Especial herramientas para artesanos"
                    text="Fabrica tus propios quesos y tu propia cerveza"
                    img-src="img/annie-spratt-w5xpOP5z1Uw-unsplash.jpg"
                    class="imagenPortada"
                ></b-carousel-slide>
            </b-carousel>
        </b-row>
        <ProductList></ProductList>
    </b-container>

</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import ProductList from "@/views/ProductList";

export default {
    name: 'Home',
    data() {
        return {
            products: []
        }
    },
    created() {

    },
    methods: {},
    components: {
        ProductList,
        NavBar
    }

}
</script>
<style>
.imagenPortada {
    width: 100%;
    height: auto;
    max-height: 400px;
    overflow: hidden;
    object-fit: cover;
}

.carousel-item img {
    height: 60vh !important;
    object-fit: cover;
}
</style>
