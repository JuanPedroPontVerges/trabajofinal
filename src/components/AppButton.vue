<template>
    <v-btn v-bind="$attrs" :min-width=this.m_width :color=this.btnColor :elevation=this.btnElevation :class="this.alineacion">
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
        btnColor: {
            type:String,
        },
        btnElevation: {
            type:String,
        },
        icono_izq: {
            type:String,
        },
        icono_der: {
            type:String,
        },
        m_width: {
            type: String,
        },
        icono: {
            type:String,
        },
        img_color: {
            type:String,
        },
        alineacion: {
            type:String
        }
    }
}
</script>