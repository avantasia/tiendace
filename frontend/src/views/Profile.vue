<template>
<b-container>

    <div>
        <b-card bg-variant="light" class="mb-3">

            <b-img :src="getProfilePic()"
                   thumbnail
                   center
                   fluid
                   rounded="circle"
                   class="mb-3"
                   style="max-height: 200px;max-width: 200px"
            ></b-img>
            <b-form-group label="Imagen de perfil" label-for="form-image" label-cols-lg="2">
                <b-input-group>
                    <b-input-group-prepend is-text>
                        <b-icon icon="image-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-file id="profile_picture"
                                 placeholder="Elige un fichero o arrástralo aquí"
                                 accept="image/*"
                                 browse-text="Seleccionar"
                                 capture
                                 v-model="profilepic"
                    ></b-form-file>
                </b-input-group>
            </b-form-group>
        </b-card>
        <b-card bg-variant="light" class="mb-3">

            <b-form-group
                label-cols-lg="3"
                label="Datos del usuario"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    label-cols-sm="3"
                    label="Nombre:"
                    label-align-sm="right"
                    label-for="name"
                >
                    <b-form-input v-model="user.name" id="name"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Email:"
                    label-align-sm="right"
                    label-for="email"

                >
                    <b-form-input v-model="user.email" id="email"></b-form-input>
                </b-form-group>


            </b-form-group>
        </b-card>
    </div>

    <div>
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="3"
                label="Direccion de envío"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    label-cols-sm="3"
                    label="Dirección:"
                    label-align-sm="right"
                    label-for="address"
                >
                    <b-form-input id="address" v-model="user.address"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Ciudad:"
                    label-align-sm="right"
                    label-for="city"
                >
                    <b-form-input id="city" v-model="user.city"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Codigo postal:"
                    label-align-sm="right"
                    label-for="postal_code"
                >
                    <b-form-input id="postal_code" v-model="user.postal_code"></b-form-input>
                </b-form-group>


            </b-form-group>
        </b-card>

    </div>
    <b-row class="mt-3" align-h="center">
    <b-button v-on:click="updateUser" type="button" variant="outline-success" class="btn btn-outline-success btn-block" >Actualizar datos</b-button>
    </b-row>

</b-container>
</template>

<script>
import axios from "axios";
import User from "@/models/User";

export default {
name: "Profile.vue",
    data(){
        return{
            user:new User(),
            profilepic:undefined
        }
    },
    created(){

        this.refreshProfile();

    },
    methods :{
        refreshProfile(){
            const API_URL = 'http://localhost/api/v1/users/myuser';

            axios.get(API_URL , {headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    //this.products=response.data;
                    console.log(response.data.user.email)
                    this.user.email=response.data.user.email;
                    this.user.name=response.data.user.name;
                    this.user.address=response.data.user.address;
                    this.user.city=response.data.user.city;
                    this.user.postal_code=response.data.user.postal_code;
                    this.user.profile_picture=response.data.user.picture;


                });
        },
        updateUser(){
            const API_URL = 'http://localhost/api/v1/users/update';
            let data = new FormData()


            data.append('email',this.user.email)
            data.append('name',this.user.name)
            data.append('address',this.user.address)
            data.append('city',this.user.city)
            data.append('postal_code',this.user.postal_code)
            data.append("profile_picture",this.profilepic)


            axios.post(API_URL , data,{headers: {'Authorization': 'Bearer '+this.$store.state.auth.user.token} })
                .then(response => {
                    //this.products=response.data;
                    console.log(response)
                }).catch(function (error){
                    console.log(error);
                })

            this.refreshProfile();
        },
        getProfilePic() {
            if (this.user.profile_picture == "" || this.user.profile_picture == null) {
                return "https://picsum.photos/id/20/250/250"
            }else{
                return "img/users/"+this.user.profile_picture;
            }

        }

    }
}
</script>

<style scoped>

</style>
