<template>
	<div class="container">
		<div class="navigation">
			<ul class="menu">
				<li v-for="item in modes" @click="pickMode(item.value)" class="text">{{ item.name }}</li>
				<li @click="showSettings = true" class="text">Settings</li>
			</ul>
		</div>
		<app-type-standart v-if="show == 1"></app-type-standart>
		<app-type-bt v-if="show == 2"></app-type-bt>
		<app-setting v-show="showSettings" @closeSettings="onCloseSettings"></app-setting>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import AppTypeStandart from './components/standart.vue';
import AppTypeBt from './components/BO3.vue';
import AppSetting from './components/settings.vue';

export default {
		data () {
			return {
				show: 1,
				showSettings: false
			}
		},
		mounted(){
			if(window.localStorage.getItem("BGColor") !== null){
				let color = window.localStorage.getItem("BGColor");
				document.body.style.backgroundColor = color;
				
				this.changeColorBG(color);
			}
		},
		methods: {
			...mapActions('settings', {
				changeColorBG: 'changeColorBG'
			}),
			pickMode(value){
				this.show = value;
			},
			onCloseSettings(){
				this.showSettings = false;
			}
		},
		computed: {
			...mapGetters('logics', {
				modes: 'GameModes'
			})
		},
		components: {
			AppTypeStandart,
			AppTypeBt,
			AppSetting
		}
	}

</script>

<style>
	
</style>