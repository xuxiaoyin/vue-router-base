<template>
	<div id="news">
		<ul>
			<li v-for="item,key in list">
				<router-link :to="'/detail/'+item.ID">
					{{key+1}}.{{item.TITLE}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		methods:{
			getData(){
				var api='http://www.gd-info.gov.cn/ApiFindToArticleJsonp.action?index=1&size=50&siteid=guangdong&topicid=zjdt';
				this.$http.jsonp(api).then(response=>{
					this.list=response.body.data.list;
				},function(err){
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
#news{ 
	font-size: 1.6rem;
	line-height: 2;
	a{
		color: #000;
		text-decoration: none;
	}
	li{ 
		padding: 0 1rem;
		border-bottom: 1px solid #ddd;
		height: 2;
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>