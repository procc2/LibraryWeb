/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// BootstrapVue add
import BootstrapVue from 'bootstrap-vue';

import vSelect from "vue-select";

import VueI18n from 'vue-i18n';

// Multi Language Add
import vi from './locales/vi.json';
import en from './locales/en.json';
import es from './locales/es.json';


Vue.component('admin-app', require('./components/admin/AdminApp.vue').default);
Vue.component('app', require('./App.vue').default);
Vue.component("v-select", vSelect);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import { store } from './components/store';
import router from './router';
import VModal from 'vue-js-modal';
import VuejsDialog from 'vuejs-dialog';
// Breadcrumb Component Add
import Breadcrumb from './components/Common/Breadcrumb';
// Colxx Component Add
import Colxx from './components/Common/Colxx';


Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-colxx', Colxx);
Vue.use(VModal);
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(require('vue-shortkey'));

const messages = { vi, en, es };
const locale = localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0 ? localStorage.getItem('currentLanguage') : 'vi';
const i18n = new VueI18n({
  locale,
  fallbackLocale: 'vi',
  messages
});
Vue.use(VuejsDialog);

const app = new Vue({
    i18n,
    data: {
        imageUrl: 'http://dmgxmuhskmu5e.cloudfront.net/book/image/'
    },
    router,
    store,
}).$mount('#app');
