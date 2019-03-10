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
				name: 'Белый',
				value: '#ffffff'
			},
			{
				name: 'Серый',
				value: '#EEEEEE'
			},
			{
				name: 'Темно-серый',
				value: '#57606f'
			}
		]
	},
	getters: {
		colorBG(state){
			// Получение текующего цвета
			return state.colorBG;
		},
		arrColorBG(state){
			// Получение списка всех цветов
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
		resetHistory(store){ // Удаление истории игр из локального хранилища
			window.localStorage.removeItem("history");
			window.location.reload();
		}
	}
};