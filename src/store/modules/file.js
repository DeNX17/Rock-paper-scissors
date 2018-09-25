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
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	},
	mutations: {
		
	},
	actions: {
	
	}
};