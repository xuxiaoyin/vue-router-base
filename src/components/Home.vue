<template>
	<div id="home">
		<ul>
			<li v-for="item,key in list">
				<router-link :to="'/pdetail?id='+item.aid">
					{{key+1}}.{{item.title}}
				</router-link>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getData(){
				var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				this.$http.jsonp(api).then( (sucess)=>{
					this.list=sucess.body.result;
				},(err)=>{
					console.log(err)
				})
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
#home{ 
	padding: 0 1rem;
	font-size: 1.6rem;
	line-height: 2;
	a{
		color: #000;
		text-decoration: none;
	}
}
</style>