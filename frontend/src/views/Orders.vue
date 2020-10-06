<template>
    <b-container >
        <b-row class="just
        ify-content-center">
            <h1 >Estado de los pedidos</h1>
        </b-row>
        <b-row class="justify-content-center">
                <b-card v-for="order in this.orders" :bg-variant="getColor(order)" :header="getTitle(order)" class="text-center mt-3 mr-3"
                        body-bg-variant="white"
                        header-class="card-title text-xl-center"
                        :key="order.index"
                    >
                    <b-card-text>Pedido del usuario {{order.user.email}}</b-card-text>
                    <b-card-text>Dirección de envío : {{order.user.address}} . {{order.user.city}}</b-card-text>
                    <b-card-text>Realizado el dia {{order.created_at}}</b-card-text>
                    <b-card-text v-if="order.sent_date">Enviado el dia {{order.sent_date}}</b-card-text>
                    <b-card-text v-if="order.received_date">Recibido el dia {{order.received_date}}</b-card-text>
                    <b-button v-if="!order.received_date" v-on:click="markAsReceived(order)" class="mr-2 ml-2" variant="outline-success">
                        Marcar como recibido
                    </b-button>
                    <b-button v-if="!order.sent_date" v-on:click="cancelOrder(order)"  class="mr-2 ml-2" variant="outline-danger">
                        Anular pedido
                    </b-button>
                </b-card>

        </b-row>

    </b-container>
</template>

<script>

import axios from "axios";

export default {
    name: "Orders",
    data() {
        return {
            orders: [],
        }
    },
    created() {
        this.refreshOrders();

    },
    computed: {

    },
    methods: {
        refreshOrders(){
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/orders'

            axios.get(API_URL , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    this.orders = response.data
                })
                .catch(error=>console.log(error))
        },
        getColor(order){
            if(order.sent_date==null){
                return "danger"
            }else{
                if(order.received_date==null) {
                    return "warning"
                }else{
                    return "success"
                }
            }
        },
        getTitle(order){
            if(order.sent_date==null){
                return "Pedido #"+order.id+" - Pendiente de envio"
            }else{
                if(order.received_date==null){
                    return "Pedido #"+order.id+" - Enviado"
                }else{
                    return "Pedido #"+order.id+" - Recibido"
                }
            }
        },
        markAsReceived(order){
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/orders'

            axios.get(API_URL+'/'+order.id+'/receive' , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    this.orders = response.data
                    this.refreshOrders();
                })
                .catch(error=>console.log(error))

        },
        cancelOrder(order){
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/orders'

            axios.get(API_URL+'/'+order.id+'/cancel' , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    this.orders = response.data
                    this.refreshOrders();
                })
                .catch(error=>console.log(error))
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

</style>
