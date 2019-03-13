import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import logic from './modules/logic.js';
import settings from './modules/settings.js';

export const store = new Vuex.Store({
	modules: {
		logic,
		settings
	},
	strict: process.env.NODE_ENV !== 'production'
});