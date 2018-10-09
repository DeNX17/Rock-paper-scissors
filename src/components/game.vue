<template>
	<div>
		<div class="game" v-show="show">
			<div class="my">
				<transition name="player">
					<img :src="srcImgPlayer" alt="Не загрузилось"  v-show="showField" class="imgGame">
				</transition>
			</div>
			<div class="enemy">
				<transition name="comp">
					<img :src="scrImgEnemy" alt="Не загрузилось"  v-show="showField" class="imgGame">
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		props: {
			show: Boolean,
			srcImgPlayer: null,
			scrImgEnemy: null,
			showField: Boolean,
		},
		data(){
			return {

			}
		},
		methods: {
			...mapActions('logic', {
				checkResult: 'checkResult'
			}),
			randomInteger(min, max) {
		    	let rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			}
		},
		computed: {
			...mapGetters('logic', {
				items: 'items'
			})
		}
	}
</script>