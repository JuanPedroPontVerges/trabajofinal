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
            <h2>Nombre</h2>
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
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-email"
                ></v-text-field>
                 <v-text-field
                  label="Password"
                  prepend-icon="mdi-lock"
                  append-outer-icon="mdi-help"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        
    }
}

</script>

<style scoped>
    .fondo {
        background-color:#1F1F1F;
    }
</style>