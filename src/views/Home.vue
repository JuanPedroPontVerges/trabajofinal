<template>
  <div v-fondo class="fill-height">
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
            alineacion="d-flex justify-space-between"
            class="mx-auto"
            v-on.native="on"
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
              alineacion="d-flex justify-space-between"
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
    
    <v-container>
      <v-row align="center" class="mx-auto">
        <v-col cols="9">
          <v-sheet width="100%" class="py-2" color="secondary white--text" elevation="15">
            <h3 class="mx-2 body-1">Horario de Hoy</h3>
          </v-sheet>
        </v-col>
        <v-col>
          <v-btn color="secondary" fab small>
            <v-icon color="primary">mdi-calendar</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" class="mx-auto">
        <v-col cols="9">
          <v-sheet width="100%" class="py-2" color="secondary white--text" elevation="15">
            <h3 class="mx-2 body-1">Nueva Tarea</h3>
          </v-sheet>
        </v-col>
        <v-col>
          <v-btn color="secondary" fab small>
            <v-icon color="primary">mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col
        v-for="n in botones" :key="n"
        cols="6">
        <AppButton
        alineacion="d-flex justify-space-around white--text font-weight-black subtitle-1"
        min-height="60px"
        :texto=n.texto
        :btnColor=n.color
        :icono_izq=n.icono
        xl-large
        block>
        </AppButton>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row >
        <v-col>
          <v-card color="secondary" class="carta">
            <v-list-item>
              <v-list-item-avatar color="white">
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline white--text title">Proximas tareas</v-list-item-title>
                <v-list-item-subtitle class="primary--text">{{this.eventos.fecha}} | {{this.eventos.evento}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-card-actions>
                <v-btn icon>
                  <v-icon right color="white">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card color="secondary" class="carta">
            <v-list-item>
              <v-list-item-avatar color="white">
                <v-icon>mdi-account-check-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline white--text title my-2">Asistencia general</v-list-item-title>
                <v-progress-linear value="12"
                buffer-value="80"></v-progress-linear>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
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
      nombre:"Fasito 420",
      botones:[
        {
          color:"primary",
          texto:"CLASES",
          icono:"mdi-calendar"
        },
        {
          color:"verde",
          texto:"ASISTENCIA",
          icono:"mdi-account-check-outline"
        },
        {
          color:"violeta",
          texto:"MATERIAS",
          icono:"mdi-notebook-outline"
        },
        {
          color:"amarillo",
          texto:"TAREAS",
          icono:"mdi-file-document-edit-outline"
        }
      ],
      eventos:{
        fecha:"25 de Junio",
        evento:"Cata de OG Kush"
      }
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
