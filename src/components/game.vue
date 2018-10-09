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

		<div class="buttons">
			<button v-for="item in items" @click="pick(item)" v-show="!btnShow">
				{{ item.name }}
			</button>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		props: {
			show: Boolean,
			srcImgPlayer: String,
			scrImgEnemy: String,
			showField: Boolean,
			mode: String,
			btnShow: Boolean
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
  			},
  			pick(item){
  				let computedPick = this.items[this.randomInteger(1, 3) - 1];
  	
  				this.$emit('pick', {
  					imgPlayer: item.imgY,
  					imgComp: computedPick.imgC
  				});

  				this.checkResult({
  					mode: this.mode,
  					player: item.name,
  					comp: computedPick.name
				});
  			}
		},
		computed: {
			...mapGetters('logic', {
				items: 'items'
			})
		}
	}
</script>