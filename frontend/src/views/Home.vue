<template>
  <b-container fluid class="p-2"  >
<b-row>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          class="mb-4 mx-auto imagenPortada  "
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          no-animation
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
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
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                  <router-link  :to="{ name: 'ProductDetails', params: product}">
                      Comprar

                  </router-link>

                  </b-card>

          </b-card-group>

      </b-row>
  </b-container>

</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";

import jsonp from 'jsonp';

export default {
  name: 'Home',
    data() {
        return {
            products: [],
            errors: []
        }
    },
    created() {


        jsonp('http://localhost/api/v1/products/', null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                // Get all products.
                // TODO get only some of them in rows

                this.products = data
                //debug
                console.log(this.products)
            }
        });
    },
    computed:{
        productsPerRow(){
            return this.products.reduce((c, n, i) => {
                if (i % 5 === 0) c.push([]);
                c[c.length - 1].push(n);
                return c;
            }, []);
        }
    },
    methods: {

    },
    components: {
      NavBar
  }

}
</script>
<style>
.imagenPortada{
    width: 100%;
    height: auto;
    max-height: 400px;
    overflow: hidden;
    object-fit: cover;
}
.carousel-item img {
    height:60vh!important ;
    object-fit: cover;
}
</style>
