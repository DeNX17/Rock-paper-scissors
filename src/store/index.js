import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import funcs from './modules/file.js';

export const store = new Vuex.Store({
	modules: {
		funcs
	},
	strict: process.env.NODE_ENV !== 'production'
});