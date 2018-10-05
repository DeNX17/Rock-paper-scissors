export default {
	namespaced: true,
	state: {
		colorBG: 'white',
		arrColorBG: [
			{
				name: 'Белый',
				value: 'white'
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
			return state.colorBG;
		},
		arrColorBG(state){
			return state.arrColorBG;
		}
	},
	mutations: {
		changeColorBG(state, payload){
			document.body.style.backgroundColor = payload;
		}
	},
	actions: {
		changeColorBG(store, payload){
			store.commit('changeColorBG', payload.target.value);
		},
		resetHistory(store){
			window.localStorage.removeItem("history");
			window.location.reload();
		}
	}
};