<template>
	<div>新闻详情页</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'新闻详情页'
			}
		},
		mounted(){
			console.log(this.$route.params)
		}
	}
</script>