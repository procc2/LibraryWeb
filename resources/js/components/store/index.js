import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './module/account';
import { alert } from './module/alert';
import { cart } from './module/cart';
import { menu } from './module/menu';
// import { user } from './module/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    account, alert, cart, menu
  }
});
