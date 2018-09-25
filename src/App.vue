<template>
	<div class="container">
		<p>Игры: {{ historyGame.length }} | Победы: {{ countWin }} | Поражения: {{ countLose}}</p>
		<p class="lastResult">{{ lastResult }}</p>
		<div class="game" v-show="show">
			<div class="my">
				<img src="" alt="Не загрузилось" ref="MyImg">
			</div>
			<div class="enemy">
				<img src="" alt="Не загрузилось" ref="EnemyImg">
			</div>
		</div>
		<div class="buttons">
			<button v-for="item in items" @click="pick(item)">{{ item.name }}</button>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
		data () {
			return {
				historyGame: [],
				show: false,
				wins: 0,
				lose: 0
			}
		},
		mounted(){
			
		},
		methods: {
			randomInteger(min, max) {
		    	var rand = min - 0.5 + Math.random() * (max - min + 1)
		    	rand = Math.round(rand);
		    	return rand;
  			},
  			pushHistory(value){
  				this.historyGame.push(value);
  			},
  			pick(item){
  				let computedPick = this.items[this.randomInteger(1, 3) - 1];

  				this.show = true;
  				this.$refs.MyImg.src = item.img;
  				this.$refs.EnemyImg.src = computedPick.img;

  				if(item.name == "Камень"){
  					switch(computedPick.name){
  						case "Камень":
  							this.pushHistory("Ничья");
  							break;
  						case "Бумага":
  							this.pushHistory("Проигрыш");
  							break;
  						case "Ножницы":
  							this.pushHistory("Победа");
  							break;
  					}
  				}

  				if(item.name == "Бумага"){
  					switch(computedPick.name){
  						case "Камень":
  							this.pushHistory("Победа");
  							break;
  						case "Бумага":
  							this.pushHistory("Ничья");
  							break;
  						case "Ножницы":
  							this.pushHistory("Проигрыш");
  							break;
  					}
  				}

  				if(item.name == "Ножницы"){
  					switch(computedPick.name){
  						case "Камень":
  							this.pushHistory("Проигрыш");
  							break;
  						case "Бумага":
  							this.pushHistory("Победа");
  							break;
  						case "Ножницы":
  							this.pushHistory("Ничья");
  							break;
  					}
  				}
  			},
		},
		computed: {
			...mapGetters('some', {
				items: 'items'
			}),
			history(){
				return this.historyGame;
			},
			countWin(){
				let end = 0;
				for (let i = 0; i < this.historyGame.length; i++){
					if(this.historyGame[i] == "Победа"){
						end++;
					}
				}
				return end;
			},
			countLose(){
				let end = 0;

				for (let i = 0; i < this.historyGame.length; i++){
					if(this.historyGame[i] == "Проигрыш"){
						end++;
					}
				}
				return end;
			},
			lastResult(){
				return this.historyGame[this.historyGame.length - 1];
			}
		}
	}

</script>

<style>
	
</style>