export default {
	namespaced: true,
	state: {
		colorBG: "url('./img/background.jpg')",
		arrColorBG: [
			{
				name: 'Image',
				value: "url('./img/background.jpg')"
			},
			{
				name: 'White',
				value: '#ffffff'
			},
			{
				name: 'Grey',
				value: '#EEEEEE'
			},
			{
				name: 'Dark grey',
				value: '#57606f'
			}
		]
	},
	getters: {
		colorBG(state){
			return state.colorBG;
		},
		arrColorBG(state){
			return state.arrColorBG;
		}
	},
	mutations: {
		changeColorBG(state, payload){
			state.colorBG = payload;
			if(payload[0] === "#"){
				document.body.style.backgroundImage = "";
				document.body.style.backgroundColor = payload;
			} else {
				document.body.style.backgroundImage = payload;
			}

			window.localStorage.setItem("BGColor", payload);
		}
	},
	actions: {
		changeColorBG(store, payload){
			store.commit('changeColorBG', payload);
		},
		resetHistory(store){ 
			// Удаление истории игр из локального хранилища
			window.localStorage.removeItem("history");
			window.location.reload();
		}
	}
};