<template>
	<div class="container">
		<p class="text">Победы: {{ historyBO3.wins }} / Поражения: {{ historyBO3.loses }}</p>
		<p class="text resultBO3" ref="resultBO3">{{ resultBO3 }}</p>

		<app-game :show="show"
				  :srcImgPlayer="srcImgPlayer"
				  :scrImgEnemy="scrImgEnemy"
				  :showField="showField"
				  >
		</app-game>
		
		<div class="buttons">
			<button v-for="item in items" @click="pick(item)" v-if="!btnShow">
				{{ item.name }}
			</button>
		</div>
		<button @click="refrech" v-if="btnShow">Refresh</button>
		
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import AppGame from '../components/game.vue';

export default {
		data () {
			return {
				show: false,
				srcImgPlayer: '',
				scrImgEnemy: '',
				btnShow: false,
				showField: false,
				mode: 'BO3'
			}
		},
		mounted(){
			
		},
		methods: {
			...mapActions('logic', {
  				checkResult: 'checkResult',
  				RefreshScore: 'refrech'
  			}),
			randomInteger(min, max) {
		    	let rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			},
  			pick(item){
  				this.showField = false;
  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				setTimeout(() => {
  					this.srcImgPlayer = item.imgY;
  					this.scrImgEnemy = computedPick.imgC;
  					this.showField = true;

  					this.checkResult({
	  					mode: 'BO3',
	  					player: item.name,
	  					comp: computedPick.name
  					});
  				}, 100);

  				this.show = true;
  			},
  			refrech(){
  				this.RefreshScore();
  				this.btnShow = false;
  			}
		},
		computed: {
			...mapGetters('logic', {
				items: 'items',
				historyBO3: 'getHistoryBO3'
			}),
			lastResult(){
				return this.historyGame[this.historyGame.length - 1];
			},
			resultBO3(){
				if(this.historyBO3.wins >= 2){
					this.btnShow = true;
					this.$refs.resultBO3.style.opacity = 1;
					return "You won";
				}
				if(this.historyBO3.loses >= 2){
					this.btnShow = true;
					this.$refs.resultBO3.style.opacity = 1;
					return "You lose";
				}
			}
		},
		components: {
			AppGame
		}
	}

</script>

<style scoped>
	.resultBO3 {
		opacity: 0;
		height: 10px;
		width: 100%;
	}
</style>