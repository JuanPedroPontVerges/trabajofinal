<template>
    <v-btn v-bind="$attrs" :min-width=this.m_width :color=this.btnColor :elevation=this.btnElevation class="d-flex justify-space-between text-left">
        <v-icon left v-show="this.icono_izq"> {{this.icono_izq}} </v-icon><span>{{texto}}</span> <v-icon right v-show="this.icono_der"> {{this.icono_der}}</v-icon>
    </v-btn>
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
            required:false
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
        },
        m_width: {
            type: String,
            required: false
        }
    }
}
</script>