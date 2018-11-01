<template>
	<div>商品详情页</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'商品详情页'
			}
		},
		mounted(){
			console.log(this.$route.query)
		}
	}
</script>

<style>
</style>