export default {
	namespaced: true,
	state: {
		items: [
			{
				name: 'Камень',
				img: './img/Камень.png'
			},
			{
				name: 'Бумага',
				img: './img/Бумага.png'
			},
			{
				name: 'Ножницы',
				img: './img/Ножницы.png'
			}
		],
		historyGame: [],
		wins: 0,
		loses: 0
	},
	getters: {
		items(state){
			return state.items;
		},
		getHistoryGame(state){
			return state.historyGame;
		}
	},
	mutations: {
		checkResult(state, payload){
			if(payload.player == "Камень"){
  					switch(payload.comp){
  						case "Камень":
  							state.historyGame.push("Ничья");
  							break;
  						case "Бумага":
  							state.historyGame.push("Проигрыш");
  							break;
  						case "Ножницы":
  							state.historyGame.push("Победа");
  							break;
  					}
  				}

  				if(payload.player == "Бумага"){
  					switch(payload.comp){
  						case "Камень":
  							state.historyGame.push("Победа");
  							break;
  						case "Бумага":
  							state.historyGame.push("Ничья");
  							break;
  						case "Ножницы":
  							state.historyGame.push("Проигрыш");
  							break;
  					}
  				}

  				if(payload.player == "Ножницы"){
  					switch(payload.comp){
  						case "Камень":
  							state.historyGame.push("Проигрыш");
  							break;
  						case "Бумага":
  							state.historyGame.push("Победа");
  							break;
  						case "Ножницы":
  							state.historyGame.push("Ничья");
  							break;
  					}
  				}
		}
	},
	actions: {
		checkResult(store, payload){
			store.commit('checkResult', payload)
		}
	}
};