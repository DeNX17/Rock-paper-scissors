<template>
	<div>
		<p class="interfaceText">Победы: {{ historyBO3.wins }} / Поражения: {{ historyBO3.loses }}</p>
		<p class="text resultBO3" ref="resultBO3">{{ resultBO3 }}</p>

		<app-game :show="show"
				  :srcImgPlayer="srcImgPlayer"
				  :scrImgEnemy="scrImgEnemy"
				  :showField="showField"
				  :mode="mode"
				  :btnShow="btnShow"
				  @pick="pick"
				  >
		</app-game>

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
  			pick(item){
  				this.showField = false;

  				setTimeout(() => {
  					this.srcImgPlayer = item.imgPlayer;
  					this.scrImgEnemy = item.imgComp;
  					this.showField = true;
  				}, 100)

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