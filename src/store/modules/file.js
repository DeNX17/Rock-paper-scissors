export default {
	namespaced: true,
	state: {
		items: [
			{
				name: 'Камень',
				imgY: './img/YКамень.png',
				imgC: './img/CКамень.png'
			},
			{
				name: 'Бумага',
				imgY: './img/YБумага.png',
				imgC: './img/CБумага.png'
			},
			{
				name: 'Ножницы',
				imgY: './img/YНожницы.png',
				imgC: './img/CНожницы.png'
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
			let obj = {
				wins: 0,
				loses: 0
			}

			for (let i = 0; i < state.historyBO3.length; i++){
				if(state.historyBO3[i] == "Победа"){
					obj.wins++;
				}
				if(state.historyBO3[i] == "Проигрыш"){
					obj.loses++;
				}
			}
			return obj;
		}
	},
	mutations: {
		checkResult(state, payload){
			let result = '';

			if(payload.player == "Камень"){
				switch(payload.comp){
					case "Камень":
						result = "Ничья";
						break;
					case "Бумага":
						result = "Проигрыш";
						break;
					case "Ножницы":
						result = "Победа";
						break;
				}
			}

			if(payload.player == "Бумага"){
				switch(payload.comp){
					case "Камень":
						result = "Победа";
						break;
					case "Бумага":
						result = "Ничья";
						break;
					case "Ножницы":
						result = "Проигрыш";
						break;
				}
			}

			if(payload.player == "Ножницы"){
				switch(payload.comp){
					case "Камень":
						result = "Проигрыш";
						break;
					case "Бумага":
						result = "Победа";
						break;
					case "Ножницы":
						result = "Ничья";
						break;
				}
			}

  			if(payload.mode == "BO3"){
  				state.historyBO3.push(result);
  			}
  			if(payload.mode == 'Standart'){
  				state.historyGame.push(result);
  				window.localStorage.setItem("history", state.historyGame);
  			}
		},
		refrech(state){
			state.historyBO3 = [];
		},
		writeHistory(state, payload){
			state.historyGame = payload;
		}
	},
	actions: {
		checkResult(store, payload){
			store.commit('checkResult', payload)
		},
		refrech(store){
			store.commit('refrech');
		},
		writeHistory(store, payload){
			store.commit('writeHistory', payload);
		}
	}
};