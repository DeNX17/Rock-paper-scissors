import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AppGame from './components/game';
import E404 from './components/404';
import AppRouter from './components/router.vue';

const routes = [
	{
		path: '*',
		component: E404
	},
	{
		path: '/game',
		component: AppGame
	},
	{
		path: '/',
		component: AppRouter
	}

];

export const router = new VueRouter({
	routes: routes,
	mode: 'history'
})