import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../modules/authmodule'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart:[],
        userIsAdmin:false,
        products:[],
        visibleProducts:[]
    },
    mutations: {
        setProducts(products,newproducts){
            this.state.products=newproducts;
            this.state.visibleProducts=newproducts;
        },
        setVisibleProducts(visibleProducts,newproducts){
            this.state.visibleProducts=newproducts;
        },
        addToCart(cart,item){
            this.state.cart.push(item)

            if(this.state.auth.status.loggedIn){
                const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/cart/addtocart';
                console.log(item)
                axios.post(API_URL , {'id':item.id},{headers: {'Authorization': 'Bearer '+this.state.auth.user.token} })
                    .then(response => {
                        console.log(response.data);
                        this.commit('refreshCart');
                    });
            }
        },
        addToCartNoRefresh(cart,item){
            this.state.cart.push(item)

            if(this.state.auth.status.loggedIn){
                const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/cart/addtocart';
                console.log(item)
                axios.post(API_URL , {'id':item.id},{headers: {'Authorization': 'Bearer '+this.state.auth.user.token} })
                    .then(response => {
                        console.log(response.data);
                    });
            }
        },
        refreshCart(){
            const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/cart/myproducts';

            axios.get(API_URL , {headers: {'Authorization': 'Bearer '+this.state.auth.user.token} })
                .then(response => {
                    this.state.cart=response.data
                });
        },
        persistCart(){
            this.state.cart.each(
                function ($product){
                    this.addToCart('addToCartNoRefresh',$product)
                }
            )
        },
        removeFromCart(cart,item){
            console.log(item);
            this.state.cart.splice(this.state.cart.indexOf(item), 1);

            if(this.state.auth.status.loggedIn){
                const API_URL = process.env.VUE_APP_API_HOST+'/api/v1/cart/removefromcart';
                console.log(item)
                axios.post(API_URL , {'id':item.id},{headers: {'Authorization': 'Bearer '+this.state.auth.user.token} })
                    .then(response => {
                        //TODO check if the item actually got deleted
                        //this.products=response.data;
                        this.commit('refreshCart');
                    });
            }
        },
        emptyCart(){
            this.state.cart=[]
        }
        ,setAdmin(userIsAdmin,state){
            this.state.userIsAdmin=state;
        }
    },
    actions: {},
    modules: {
        auth
    }
})
