import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import logics from './modules/file.js';
import settings from './modules/settings.js';

export const store = new Vuex.Store({
	modules: {
		logics,
		settings
	},
	strict: process.env.NODE_ENV !== 'production'
});