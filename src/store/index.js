import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        logged: false
    },
    mutations: {
        log(state) {
            state.logged=true;
        }
    }
})

export default store;