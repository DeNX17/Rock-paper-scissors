<template>
	<div class="container">
		<p >Победы: {{ historyBO3.wins }} / Поражения: {{ historyBO3.loses }}</p>
		<p>{{ resultBO3 }}</p>

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
		<button @click="refrech" v-if="btnShow">Refresh</button>
		<div class="buttons" v-if="!btnShow">
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
				btnShow: false,
				showField: false

			}
		},
		mounted(){
			
		},
		methods: {
			...mapActions('funcs', {
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

  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				this.show = true;
  			},
  			refrech(){
  				this.RefreshScore();
  				this.btnShow = false;
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
				if(this.historyBO3.wins >= 2){
					this.btnShow = true;
					return "You won";
				}
				if(this.historyBO3.loses >= 2){
					this.btnShow = true;
					return "You lose";
				}
			}
		}
	}

</script>

<style>

</style>