<template>
	<div class="container">
		<p>Игры: {{ historyGame.length }} | Победы: {{ countStats.wins }} | Поражения: {{ countStats.loses }} </p>
		<p class="lastResult" v-show="show">{{ lastResult }}</p>
		<div class="game" v-show="show">
			<div class="my">
				<transition name="player">
					<img :src="srcImgPlayer" alt="Не загрузилось"  v-show="showField">
				</transition>
			</div>
			<div class="enemy">
				<transition name="comp">
					<img :src="scrImgEnemy" alt="Не загрузилось"  v-show="showField">
				</transition>
			</div>
		</div>
		<div class="buttons">
			<button v-for="item in items" @click="pick(item)">{{ item.name }}</button>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
		data () {
			return {
				show: false,
				srcImgPlayer: '',
				scrImgEnemy: '',
				showField: false
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

  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				setTimeout(() => {
  					this.srcImgPlayer = item.imgY;
  					this.scrImgEnemy = computedPick.imgC;
  					this.showField = true;

  					this.checkResult({
	  					mode: 'Standart',
	  					player: item.name,
	  					comp: computedPick.name
  					});
  				}, 100);

  				this.show = true;
  			},
  			...mapActions('funcs', {
  				checkResult: 'checkResult',
  				writeHistory: 'writeHistory'
  			})
		},
		computed: {
			...mapGetters('funcs', {
				items: 'items',
				historyGame: 'getHistoryGame'
			}),
			countStats(){		
				let stats = {
					wins: 0,
					loses: 0
				};

				for (let i = 0; i < this.historyGame.length; i++){
					if(this.historyGame[i] == "Победа"){
						stats.wins++;
					}
					if(this.historyGame[i] == "Проигрыш"){
						stats.loses++;
					}
				}
				return stats;
			},
			lastResult(){
				return this.historyGame[this.historyGame.length - 1];
			}
		}
	}

</script>

<style>
	
</style>