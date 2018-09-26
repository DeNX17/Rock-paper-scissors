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
		modes: [
			{
				name: 'Standart',
				value: 1
			},
			{
				name: 'Best of 3',
				value: 2
			}
		],
		historyGame: [],
		historyBO3: [],
		wins: 0,
		loses: 0
	},
	getters: {
		items(state){
			return state.items;
		},
		getHistoryGame(state){
			return state.historyGame;
		},
		GameModes(state){
			return state.modes;
		},
		getHistoryBO3(state){
			return state.historyBO3;
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

  			if(payload.mode == "BO3"){
  				state.historyBO3.push(state.historyGame[state.historyGame.length - 1]);
  			}
		}
	},
	actions: {
		checkResult(store, payload){
			store.commit('checkResult', payload)
		}
	}
};