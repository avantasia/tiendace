<template>
    <div>
        <b-navbar toggleable="lg" >
            <router-link to="/">

            <b-navbar-brand >TiendaEspecial</b-navbar-brand>
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <router-link to="/">

                    <b-nav-item href="#">Inicio</b-nav-item>
                    </router-link>

                    <b-nav-item href="#" >Especias</b-nav-item>
                    <b-nav-item-dropdown text="Ingredientes" >
                        <b-dropdown-item href="#">Frescos</b-dropdown-item>
                        <b-dropdown-item href="#">Conservas</b-dropdown-item>
                        <b-dropdown-item href="#">Pastas y arroces</b-dropdown-item>
                        <b-dropdown-item href="#">De temporada</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="md" class="mr-sm-2"  type="search" placeholder="Buscar"></b-form-input>
                        <b-button  size="md" class="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3" variant ="light">Buscar</b-button>
                        <b-button  size="md" class="btn btn-outline-success my-2 my-sm-0"  variant="light" href="#" >Cesta 🛒</b-button>
                    </b-nav-form>




                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>Usuario</em>
                        </template>

                        <b-dropdown-item href="#">Perfil</b-dropdown-item>
                        <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>
