<template>
	<div>
		<p class="interfaceText" >Games: {{ historyGame.length }} 
		<br> 
		VICTORIES: {{ countStats.wins }} | DEFEATS: {{ countStats.loses }} </p>
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
			// Сохранение истории в локальное хранилеще
			if(window.localStorage.getItem("history") !== null){
				this.writeHistory(window.localStorage.getItem("history").split(','));
			}
		},
		methods: {
  			pick(item){
  				this.showField = false;
					// Плавная анимация появления картинок
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
				// Получение последнего результата игры
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