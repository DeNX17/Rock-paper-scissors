export default {
	namespaced: true,
	state: {
		items: [
			{
				name: 'Rock',
				imgY: './img/YRock.png',
				imgC: './img/CRock.png'
			},
			{
				name: 'Paper',
				imgY: './img/YPaper.png',
				imgC: './img/CPaper.png'
			},
			{
				name: 'Scissors',
				imgY: './img/YScissors.png',
				imgC: './img/CScissors.png'
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
		historyBO3: []
	},
	getters: {
		items(state) {
			return state.items;
		},
		getHistoryGame(state) {
			return state.historyGame;
		},
		GameModes(state) {
			return state.modes;
		},
		getHistoryBO3(state) {
			let obj = {
				wins: 0,
				loses: 0
			}

			for (let i = 0; i < state.historyBO3.length; i++){
				if(state.historyBO3[i] == "Victory"){
					obj.wins++;
				}
				if(state.historyBO3[i] == "Defeat"){
					obj.loses++;
				}
			}
			return obj;
		}
	},
	mutations: {
		checkResult(state, payload) {
			let result = '';

			if(payload.player == "Rock"){
				switch(payload.comp){
					case "Rock":
						result = "Draw";
						break;
					case "Paper":
						result = "Defeat";
						break;
					case "Scissors":
						result = "Victory";
						break;
				}
			}

			if(payload.player == "Paper"){
				switch(payload.comp){
					case "Rock":
						result = "Victory";
						break;
					case "Paper":
						result = "Draw";
						break;
					case "Scissors":
						result = "Defeat";
						break;
				}
			}

			if(payload.player == "Scissors"){
				switch(payload.comp){
					case "Rock":
						result = "Defeat";
						break;
					case "Paper":
						result = "Victory";
						break;
					case "Scissors":
						result = "Draw";
						break;
				}
			}

  			if(payload.mode === "BO3") {
  				state.historyBO3.push(result);
  			}
  			if(payload.mode === 'Standart') {
  				state.historyGame.push(result);
  				window.localStorage.setItem("history", state.historyGame);
  			}
		},
		refresh(state) {
			state.historyBO3 = [];
		},
		writeHistory(state, payload) {
			state.historyGame = payload;
		}
	},
	actions: {
		checkResult(store, payload) {
			store.commit('checkResult', payload)
		},
		refresh(store) {
			store.commit('refresh');
		},
		writeHistory(store, payload) {
			store.commit('writeHistory', payload);
		}
	}
};