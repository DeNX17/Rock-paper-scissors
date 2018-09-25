<template>
	<div>
		<div class="alert" v-show="win === 0">
			lose lose lose
		</div>
		<div class="alert" v-show="win === 1">
			win win win
		</div>
		<div class="game">
			
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			arrFields: [],
			win: 2,
			show: false
		}
	},
	created(){
		
	},
	methods: {

	},
	computed: {
		win(){
			return 
		}
	}
}
</script>
