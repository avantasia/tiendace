<template>
    <div>
        <b-navbar toggleable="lg">
            <router-link to="/">

                <b-navbar-brand>TiendaEspecial</b-navbar-brand>
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>


                    <b-nav-item to="/">Inicio</b-nav-item>


                    <b-nav-item :to="{ name: 'ProductList', params: {'category':1}}">
                        Especias
                    </b-nav-item>


                    <b-nav-item-dropdown text="Ingredientes">
                        <b-dropdown-item href="#">Frescos</b-dropdown-item>
                        <b-dropdown-item href="#">Conservas</b-dropdown-item>
                        <b-dropdown-item href="#">Pastas y arroces</b-dropdown-item>
                        <b-dropdown-item href="#">De temporada</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="md" class="mr-sm-2" type="search" placeholder="Buscar"></b-form-input>
                        <b-button size="md" class="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3" variant="light">
                            Buscar
                        </b-button>

                    </b-nav-form>



                    <b-nav-form v-if="!loggedIn" name="loginform">
                        <b-input-group>
                            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                                <b-input
                                    id="inline-form-input-username"
                                    placeholder="Correo"
                                    v-model="user.email"
                                ></b-input>
                            </b-input-group>
                            <b-input
                                class="mb-2 mr-sm-2 mb-sm-0"
                                type="password"
                                placeholder="Clave"
                                v-model="user.password"
                            >
                            </b-input>
                        </b-input-group>
                        <b-button v-on:click="login" class="mb-2 mr-sm-2 mb-sm-0">
                            Iniciar sesión
                        </b-button >
                        <b-button :to="{name: 'Register'}" class="mb-2 mr-sm-2 mb-sm-0">
                            Registro
                        </b-button>
                    </b-nav-form>

                    <b-button :to="{ name: 'Cart'}" size="md" class="btn btn-outline-success my-2 my-sm-0" variant="light" href="#">Cesta
                        🛒
                        <b-badge variant="primary">{{ Object.keys(this.$store.state.cart).length == 0 ? "" : Object.keys(this.$store.state.cart).length }}</b-badge>

                    </b-button>
                    <b-nav-item-dropdown v-if="loggedIn" right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>Usuario</em>
                        </template>

                        <b-dropdown-item v-on:click="profile">Perfil</b-dropdown-item>
                        <b-dropdown-item :to="{name:'Orders'}">Pedidos</b-dropdown-item>
                        <b-dropdown-item :to="{name:'AdminOrders'}"  v-if="this.$store.state.userIsAdmin">Administracion</b-dropdown-item>
                        <b-dropdown-item v-on:click="logout">Cerrar sesión</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div>
            <b-alert
                v-model="showAlertUserPass"
                dismissible
                variant="warning"
            >
                Usuario o contraseña incorrecta: {{UserPassError}}}
            </b-alert>
        </div>
    </div>
</template>

<script>
import User from "@/models/User";
import axios from 'axios';

export default {
    name: "NavBar",
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    data() {
        return {
            user: new User('', ''),
            loading: false,
            message: '',
            showAlertUserPass: false,
            UserPassError: ""
        };
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/');
        }
    },
    methods: {
        prueba(){
            console.log(this.$store.state.userIsAdmin)
        },
        login() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                    this.loading = false;
                    return;
                }

                if (this.user.email && this.user.password) {
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.checkAdmin()
                            if(this.$router.currentRoute.path!='/'){
                                this.$router.push('/');
                            }
                        },
                        error => {
                            this.loading = false;
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                            console.log(this.message)
                            this.showAlertUserPass=true
                            // TODO Parse response data and don't show raw error
                            this.UserPassError=this.message.message
                        }
                    );
                }
            });

        },
        checkAdmin(){
            const API_URL = 'http://localhost/api/v1/users/';

            axios.get(API_URL+'isadmin',{headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response=>
                     //console.log(response.data.admin)
                    this.$store.commit("setAdmin",response.data.admin)
                )

        },
        logout(){
            this.$store.dispatch('auth/logout')
        },
        profile(){
            const API_URL = 'http://localhost/api/v1/users/';

            axios.get(API_URL + 'profile', {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    this.$router.push({path:'/profile',params:{user:response.data.user}});
            });
        },
        cart(){

        }


    }
}
</script>

<style scoped>

</style>
