<template>
    <v-btn v-bind="$attrs" :color=this.btnColor :elevation=this.btnElevation>{{texto}}</v-btn>
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
            type:Number,
            required:false
        }
    }
}
</script>