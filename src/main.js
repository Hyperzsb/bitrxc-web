import Vue from 'vue';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import './assets/scss/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import VueCookies from 'vue-cookies';
import VueI18n from "vue-i18n";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueCookies);

let initialLang = Vue.$cookies.get('InitialLang') === null ? 'zh' : Vue.$cookies.get('InitialLang');
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: initialLang,
    fallbackLocale: 'zh',
    silentFallbackWarn: true,
    messages: {
        'zh': require('@/assets/lang/zh'),
        'en': require('@/assets/lang/en')
    }
})

let initialTheme = Vue.$cookies.get('InitialTheme') === null ? 'default' : Vue.$cookies.get('InitialTheme');
store.commit('changeTheme', initialTheme);

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
