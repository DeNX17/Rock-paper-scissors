<template>
	<div>
		<div class="overlay" @click="closeSettings"></div>
		<div class="blockSettings">
			<span class="close_button" @click="closeSettings">X</span>
			<ul class="settings">
				<li @click="reset">Reset history</li>
				<li>
					<label>Цвет фона</label>
					<select ref="select" @change="logs">
						<option value="black">Черный</option>
	 					<option value="white">Белый</option>
	 					<option value="#EEEEEE">Серый</option>
					</select>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		mounted(){
			
		},
		methods: {
			reset(){
				window.localStorage.removeItem("history");
				window.location.reload();
			},
			closeSettings(){
				this.$emit('closeSettings');
			},
			logs(){
				document.body.style.backgroundColor = this.$refs.select.value;
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
	}

	.blockSettings {
		position: fixed;
		width: 70%;
		height: 100%;
		top: 45px;
		left: 15%;
		background-color: #34ace0;
		opacity: 1;
		padding: 25px;
	}

	.close_button {
		width: 21px;
		height: 21px;
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		display: block;
	}

	ul.settings {

	}

	ul.settings li {
		cursor: pointer;
		font-size: 19px;
	}
</style>