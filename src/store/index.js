import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        logged: false,
        botones: [
            {
                color: "primary",
                texto: "CLASES",
                icono: "mdi-calendar"
            },
            {
                color: "verde",
                texto: "ASISTENCIA",
                icono: "mdi-account-check-outline"
            },
            {
                color: "violeta",
                texto: "MATERIAS",
                icono: "mdi-notebook-outline"
            },
            {
                color: "amarillo",
                texto: "TAREAS",
                icono: "mdi-file-document-edit-outline"
            }
        ],
        eventos: {
            fecha: "25 de Junio",
            evento: "Cata de OG Kush"
        }
    },
    mutations: {
        log(state) {
            state.logged=true;
        }
    }
})

export default store;