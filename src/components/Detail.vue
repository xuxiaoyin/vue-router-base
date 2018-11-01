<template>
	<div id="detail">新闻详情页</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'新闻详情页'
			}
		},
		methods:{
			getData(id){
				var api='http://www.gd-info.gov.cn/ApiFindToArticleById.action?artid='+id;//api不允许跨域
				this.$http.get(api).then(response=>{
					console.log(response)
				},err=>{
					console.log(err)
				})
			}
		},
		mounted(){
			var id=this.$route.params.aid;
			console.log(id)
			this.getData(id);
		}
	}
</script>

<style lang="scss" scoped>
#detail{ 
	padding: 0 1rem;
	font-size: 1.6rem;
	line-height: 2;
	a{
		color: #000;
		text-decoration: none;
	}
}
</style>