import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import some from './modules/file.js';

export const store = new Vuex.Store({
	modules: {
		some
	},
	strict: process.env.NODE_ENV !== 'production'
});