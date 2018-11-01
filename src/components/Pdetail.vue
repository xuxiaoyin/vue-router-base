<template>
	<div id="pdetail">
		<h1>{{list.title}}</h1>
		<div v-html="list.content"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'商品详情页',
				list:[]
			}
		},
		methods:{
			getData(id){
				var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+id;
				this.$http.get(api).then(response=>{
					this.list=response.body.result[0]
				},err=>{
					console.log(err)
				})
			}
		},
		mounted(){
			var id=this.$route.query.id
			//console.log(id.id)
			this.getData(id);
		}
	}
</script>

<style lang="scss">
#pdetail{ 
	padding: 0 1rem;
	font-size: 1.6rem;
	line-height: 2;
	width: 100%;
	box-sizing: border-box;
	a{
		color: #000;
		text-decoration: none;
	}
	img{
		display: block;
        max-width:100%;
    }
}
h1{
	font-size: 2rem;
	text-align: center;
	font-weight: normal;
	
}
</style>