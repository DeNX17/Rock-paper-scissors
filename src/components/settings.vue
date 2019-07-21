<template>
	<div class="Wrapper">
		<div class="overlay" @click="closeSettings"></div>
		<div class="blockSettings">
			<span class="close_button" @click="closeSettings">X</span>
			<ul class="settings">
				<li @click="resetHistory">Reset history</li>
				<li>
					<label>Backgroung Color</label>
					<select @change="changeColorBG($event.target.value)" :value="colorBG">
						<option v-for="(color,index) in arrColorBG"
										:key="index"
										:value="color.value">
							{{ color.name }}
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
.Wrapper {
	position: relative;
}

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
	top: 50%;
  left: 50%;
	margin: 0;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	z-index: 111;
	background-color: #2980b9;
	width: 78vw; 
	height: 70vh;
	padding: 25px;
}

.close_button {
	width: 21px;
	height: 21px;
	position: absolute;
	top: 25px;
	right: 2%;
	cursor: pointer;
	display: block;
}
ul.settings li {
	cursor: pointer;
	font-size: 19px;
	padding: 7px;
	margin: 17px 0px;
}

/*
	@media screen and (max-width: 750px) {
		.blockSettings {
			position: fixed;
			width: 80vw; 
			height: 350px;
			top: 45px;
			left: 9%;
			background-color: #2980b9;
			opacity: 1;
			padding: 25px;
			z-index: 11;
		}
	}*/
</style>