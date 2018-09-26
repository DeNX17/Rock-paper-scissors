<template>
	<div class="container">
		<div class="navigation">
			<ul>
				<li v-for="item in modes" @click="pickMode(item.value)">{{ item.name }}</li>
			</ul>
		</div>
		<app-type-standart v-if="show == 1"></app-type-standart>
		<app-type-bt v-if="show == 2"></app-type-bt>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

import AppTypeStandart from './components/standart.vue';
import AppTypeBt from './components/BO3.vue';

export default {
		data () {
			return {
				show: 0
			}
		},
		mounted(){
	
		},
		methods: {
			pickMode(value){
				this.show = value;
			}
		},
		computed: {
			...mapGetters('funcs', {
				modes: 'GameModes'
			})
		},
		components: {
			AppTypeStandart,
			AppTypeBt
		}
	}

</script>

<style>
	
</style>