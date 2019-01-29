<template>
	<div>
		<div class="overlay" @click="closeSettings"></div>
		<div class="blockSettings">
			<span class="close_button" @click="closeSettings">X</span>
			<ul class="settings">
				<li @click="resetHistory">Reset history</li>
				<li>
					<label>Цвет фона</label>
					<select @change="changeColorBG($event.target.value)" :value="colorBG">
						<option v-for="item in arrColorBG" :value="item.value">
							{{ item.name }}
						</option>
					</select>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

	export default {
		data(){
			return {

			}
		},
		mounted(){
			
		},
		methods: {
			...mapActions('settings', {
				changeColorBG: 'changeColorBG',
				resetHistory: 'resetHistory'
			}),
			closeSettings(){
				this.$emit('closeSettings');
			}
		},
		computed: {
			...mapGetters('settings', {
				arrColorBG: 'arrColorBG'
			}),
			colorBG(){
				return window.localStorage.getItem("BGColor");
			}
		}

	}
</script>

<style scoped>
	.overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.7;
		z-index: 10;
	}

	.blockSettings {
		position: fixed;
		width: 250px; 
    	height: 350px;
		top: 45px;
		left: 9%;
		background-color: #2980b9;
		opacity: 1;
		padding: 25px;
		z-index: 11;
	}

	.close_button {
		width: 21px;
		height: 21px;
		position: absolute;
		top: 25px;
		right: 10%;
		cursor: pointer;
		display: block;

	}

	ul.settings li {
		cursor: pointer;
		font-size: 19px;
		padding: 7px;
		margin: 17px 0px;
	}

	.example {
		width: 100%;
	}
</style>