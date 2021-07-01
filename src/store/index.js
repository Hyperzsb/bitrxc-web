import Vue from 'vue'
import Vuex from 'vuex'
import {config} from './config'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        config,
        navItem: -1,
        theme: 'default'
    },
    mutations: {
        changeNavItem(state, index) {
            state.navItem = index;
        },
        changeTheme(state, theme) {
            state.theme = theme;
        }
    }
});

export default index;
