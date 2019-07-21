<template>
	<div>
		<p class="interfaceText">VICTORIES: {{ historyBO3.wins }} &nbsp; &nbsp; / &nbsp; &nbsp; DEFEATS: {{ historyBO3.loses }}</p>
		<hr>
		<p :class="'text resultBO3 '+resultBO3" ref="resultBO3"></p>

		<app-game :isRefreshBtnShow="isRefreshBtnShow"
				  :srcImgs="srcImgs"
				  :showField="showField"
				  :mode="mode"
				  @pick="pick"
				  >
		</app-game>

		<button @click="refresh" v-if="isRefreshBtnShow">Restart</button>
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
				srcImgs: {
					Player: '',
					Bot: ''
				},
				isRefreshBtnShow: false,
				showField: false,
				mode: 'BO3'
			}
		},
		methods: {
			...mapActions('logic', {
  				checkResult: 'checkResult',
  				RefreshScore: 'restartBO3'
  			}),
  			pick(item){
  				this.showField = false;
  				setTimeout(() => {
  					this.srcImgs.Player = item.imgPlayer;
  					this.srcImgs.Bot = item.imgComp;
  					this.showField = true;
  				}, 100)
  			},
  			refresh() {
          // Обновление счета
  				this.RefreshScore();
					this.isRefreshBtnShow = false;
  			}
		},
		computed: {
			...mapGetters('logic', {
				historyBO3: 'getHistoryBO3'
			}),
			resultBO3(){
        // Определение победителя в игре
				if(this.historyBO3.wins >= 2){
					this.isRefreshBtnShow = true;
					this.$refs.resultBO3.style.opacity = 1;
					return "resultWin";
				}
				if(this.historyBO3.loses >= 2){
					this.isRefreshBtnShow = true;
					this.$refs.resultBO3.style.opacity = 1;
					return "resultLose";
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
		font-size: 26px;
		font-weight: 600;
		text-align: center;
	}

	.resultLose::before {
		content: "YOU LOSE";
		color:red;
	}

	.resultWin::before {
		content: "YOU WIN";
		color:lime;
	}
</style>