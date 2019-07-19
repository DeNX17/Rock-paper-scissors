<template>
	<div>
		<div class="game">
			<div class="my">
				<transition name="player">
					<img :src="srcImgs.Player" alt="Не загрузилось" v-show="showField"  class="imgGame">
				</transition>
			</div>
			<div class="enemy">
				<transition name="comp">
					<img :src="srcImgs.Bot" alt="Не загрузилось"  v-show="showField" class="imgGame">
				</transition>
			</div>
		</div>

		<div class="buttons">
			<button v-for="(button, index) in RPSArr"
							:key="index"
							@click="pick(button)" 
							v-show="!isRefreshBtnShow">
				{{ button.name }}
			</button>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		props: {
			srcImgs: null,
			showField: Boolean,
			mode: String,
			isRefreshBtnShow: Boolean
		},
		mounted () {
		},
		methods: {
			...mapActions('logic', {
				checkResult: 'checkResult'
			}),
      pick(item){
				// Генерация выбора "бота"
				let computedPick = this.RPSArr[randomInteger(1, 3) - 1];
				
        this.$emit('pick', {
          imgPlayer: item.imgY,
          imgComp: computedPick.imgC
        });
        
        // Проверка резултата игры
        this.checkResult({
          mode: this.mode,
          player: item.name,
          comp: computedPick.name
        });
			}
		},
		computed: {
			...mapGetters('logic', {
				RPSArr: 'RPSArr'
			})
		}
	}
</script>


<style scoped>
.game {
  display: flex;
  justify-content: space-around;
  padding: 0px 5px;
  height: 200px;
  width: 100%;
}
.game div {
  margin: 0px 10px;
}
.buttons {
  padding: 0px;
  margin: 0;
}
</style>