<template>
  <div v-fondo>
    <v-container
    class="contenedor">
      <v-row class="align-center">
        <v-col
        cols="2">
          <v-avatar
          size=70>
            <img
            src="../assets/avatar.png">
          </v-avatar>
        </v-col>
        <v-col>
        <h2 class="white--text mx-2">{{this.nombre}}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-menu
        offset-y>
          <template
          v-slot:activator="{ on }"
          >
            <AppButton
            class="mx-auto"
            v-on="on"
            dark 
            rounded 
            xl-large 
            texto="Escuela de Diseño La Metro" 
            icono_izq="mdi-school" 
            icono_der="mdi-arrow-right"
            m_width="90%">
            </AppButton>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Hola</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu>
          <template
          cols=12
          v-slot:activator="{ onn }"
          >
            <AppButton 
              v-on="onn"
              class="my-3 mx-auto"
              dark rounded 
              xl-large 
              texto="Independencia 400" 
              icono_izq="mdi-map-marker" 
              icono_der="mdi-crosshairs-gps"
              m_width="90%">
            </AppButton>
          </template>
        </v-menu>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  import AppButton from "../components/AppButton"

export default {
  name: "Home",
  data(){
    return {
      nombre:"Fasito 420"
    }
  },
  components:{
    AppButton
  },
  directives: {
    fondo: {
      bind: function (el) {
        el.style.backgroundColor = "#1F1F1F";
      }
    }
  }
};
</script>

<style>
  .contenedor{
    background-color:#373737;
    -webkit-border-bottom-right-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-radius-bottomright: 30px;
    -moz-border-radius-bottomleft: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }

</style>
