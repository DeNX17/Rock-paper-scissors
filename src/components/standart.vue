<template>
	<div class="container">
		<p class="text" >Игры: {{ historyGame.length }} | Победы: {{ countStats.wins }} | Поражения: {{ countStats.loses }} </p>
		<p class="lastResult" v-show="show">{{ lastResult }}</p>
		
		<app-game :show="show"
				  :srcImgPlayer="srcImgPlayer"
				  :scrImgEnemy="scrImgEnemy"
				  :showField="showField"
				  :mode="mode"
				  @pick="pick"
				  >
		</app-game>
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
				showField: false,
				mode: 'Standart'
			}
		},
		mounted(){
			if(window.localStorage.getItem("history") !== null){
				this.writeHistory(window.localStorage.getItem("history").split(','));
			}
		},
		methods: {
			randomInteger(min, max) {
		    	let rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			},
  			pick(item){
  				this.showField = false;

  				setTimeout(() => {
  					this.srcImgPlayer = item.imgPlayer;
  					this.scrImgEnemy = item.imgComp;
  					this.showField = true;
  				}, 100)

  				this.show = true;
  			},
  			...mapActions('logic', {
  				checkResult: 'checkResult',
  				writeHistory: 'writeHistory'
  			})
		},
		computed: {
			...mapGetters('logic', {
				items: 'items',
				historyGame: 'getHistoryGame'
			}),
			countStats(){		
				let stats = {
					wins: 0,
					loses: 0
				};

				for (let i = 0; i < this.historyGame.length; i++){
					if(this.historyGame[i] == "Victory"){
						stats.wins++;
					}
					if(this.historyGame[i] == "Defeat"){
						stats.loses++;
					}
				}
				return stats;
			},
			lastResult(){
				return this.historyGame[this.historyGame.length - 1];
			}
		},
		components: {
			AppGame
		}
	}

</script>

<style>
	
</style>