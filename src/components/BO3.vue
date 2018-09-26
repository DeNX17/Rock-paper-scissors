<template>
	<div class="container">
		<p v-show="show">Победы: {{ resultObj.wins }} / Поражения: {{ resultObj.loses }}</p>
		<p>{{ resultBO3 }}</p>
		<div class="game" v-show="show">
			<div class="my">
				<img :src="srcImgPlayer" alt="Не загрузилось">
			</div>
			<div class="enemy">
				<img :src="scrImgEnemy" alt="Не загрузилось">
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
				resultObj: {
					wins: 0,
					loses: 0
				}
			}
		},
		mounted(){
			
		},
		methods: {
			...mapActions('funcs', {
  				checkResult: 'checkResult'
  			}),
			randomInteger(min, max) {
		    	var rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			},
  			pick(item){
  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				this.show = true;
  				this.srcImgPlayer = item.img;
  				this.scrImgEnemy = computedPick.img;

  				this.checkResult({
  					mode: 'BO3',
  					player: item.name,
  					comp: computedPick.name
  				});
  			}
		},
		computed: {
			...mapGetters('funcs', {
				items: 'items',
				historyBO3: 'getHistoryBO3'
			}),
			lastResult(){
				return this.historyGame[this.historyGame.length - 1];
			},
			resultBO3(){
				let wins = 0;
  				let loses = 0;
				for (let i = 0; i < this.historyBO3.length; i++){
  					if(this.historyBO3[i] == "Победа"){
  						wins++;
  					}
  					if(this.historyBO3[i] == "Проигрыш"){
  						loses++;
  					}

  					this.resultObj.wins = wins;
  					this.resultObj.loses = loses;

  					if(wins >= 2){
  						return "Win";
  					}
  					if(loses >= 2){
  						return "Lose";
  					}
  				}
			}
		}
	}

</script>

<style>
	
</style>