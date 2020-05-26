<template>
    <v-text-field
        :label= nombre
        :prepend-icon= icono
        :append-outer-icon= outer_icono
        >
    </v-text-field>
</template>
<script>
export default {
    props:{
        nombre: {
            type: String,
            required: true
        },
        icono:{
            type: String,
            required: true
        },
        outer_icono:{
            type: String,
            required:false
        }
    }
}
</script>