<template>
    <v-btn v-bind="$attrs" 
    :class="this.estilos">
        <v-icon 
        left 
        v-show="this.icono_izq"
        :color="this.img_color">
        {{this.icono_izq}} 
        </v-icon>
        <span 
        v-show="this.texto">
        {{texto}}
        </span> 
        <v-icon 
        :color="this.img_color" 
        v-show="this.icono">
        {{this.icono}}
        </v-icon> 
        <v-icon 
        right 
        v-show="this.icono_der"
        :color="this.img_color" > 
        {{this.icono_der}}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    props:{
        texto:{
            type:String,
        },
        icono_izq: {
            type:String,
        },
        icono_der: {
            type:String,
        },
        icono: {
            type:String,
        },
        img_color: {
            type:String,
        },
        estilos: {
            type:String
        }
    }
}
</script>