<template>
    <v-btn v-bind="$attrs" :color=this.btnColor :elevation=this.btnElevation>
        <v-icon class="mr-4" left v-show="this.icono_izq"> {{this.icono_izq}} </v-icon>{{texto}} <v-icon class="ml-4" right v-show="this.icono_der"> {{this.icono_der}}</v-icon></v-btn>
</template>

<script>
export default {
    props:{
        texto:{
            type:String,
            required:true
        },
        btnColor: {
            type:String,
            required:true
        },
        btnElevation: {
            type:String,
            required:false
        },
        icono_izq: {
            type:String,
            required:false
        },
        icono_der: {
            type:String,
            required:false
        }
    }
}
</script>