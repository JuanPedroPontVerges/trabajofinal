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
                icono: "mdi-calendar",
                id:2
            },
            {
                color: "verde",
                texto: "ASISTENCIA",
                icono: "mdi-account-check-outline",
                id: 3
            },
            {
                color: "violeta",
                texto: "MATERIAS",
                icono: "mdi-notebook-outline",
                id: 4
            },
            {
                color: "amarillo",
                texto: "TAREAS",
                icono: "mdi-file-document-edit-outline",
                id: 5
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