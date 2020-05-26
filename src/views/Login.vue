<template>
    <v-container
    class="fondo"
    fill-height
    align-content-space-around>
        <v-row 
        class="d-flex justify-start mb-5">
            <v-col 
            class="title text-center white--text"
            cols="12">
            <h1>Nombre</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            class="white--text title mb-5"
            cols="12">
            <h3 class="font-weight-bold">Login</h3>
            <p class=" subtitle-1 ">Porfavor inicie sesión para continuar</p>
            </v-col>
            <v-col 
            cols="12">
              <AppInput nombre="EMAIL" icono="mdi-email"></AppInput>
              <AppInput nombre="CONTRASEÑA" icono="mdi-lock" outer_icono="mdi-help"></AppInput>
            </v-col>
            <v-col
            cols="12">
            <router-link to="/home">
                <AppButton @click.native="logged" texto="Log In ->" btnColor="primary" btnElevation=15 absolute right rounded x-large ></AppButton>
            </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";

export default {
    components:{
        AppInput,
        AppButton
    },
    methods:{
        logged() {
            this.$store.commit("log")
        }
    }
}

</script>

<style scoped>
    .fondo {
        background-color:#1F1F1F;
    }
</style>