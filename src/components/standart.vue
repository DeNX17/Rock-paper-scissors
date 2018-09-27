<template>
	<div class="container">
		<p>Игры: {{ historyGame.length }} | Победы: {{ countStats.wins }} | Поражения: {{ countStats.loses }} </p>
		<p class="lastResult">{{ lastResult }}</p>
		<div class="game" v-show="show">
			<div class="my">
				<img :src="srcImgPlayer" alt="Не загрузилось" ref="MyImg">
			</div>
			<div class="enemy">
				<img :src="scrImgEnemy" alt="Не загрузилось" ref="EnemyImg">
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
				scrImgEnemy: ''
			}
		},
		mounted(){
			
		},
		methods: {
			randomInteger(min, max) {
		    	let rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			},
  			pick(item){
  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				this.show = true;
  				this.srcImgPlayer = item.imgY;
  				this.scrImgEnemy = computedPick.imgC;

  				this.checkResult({
  					mode: 'Standart',
  					player: item.name,
  					comp: computedPick.name
  				});
  			},
  			...mapActions('funcs', {
  				checkResult: 'checkResult'
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