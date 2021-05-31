<template>
	<div class="suggest">
		<van-nav-bar 
		title="新增团课" 
		left-text=""
		left-arrow
		@click-left="back"
		/>
	</div>
</template>	
<script>
export default {
	
	methods:{
		back(){
		this.$router.go(-1);
		},
	}
}
</script>