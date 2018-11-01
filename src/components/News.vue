<template>
	<div>
		<div>我是新闻页</div>
		<ul>
			<li v-for="item,key in list">
				<router-link :to="'/detail/'+key">
					{{key}}--{{item}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:['1111','2222','3333']
			}
		}
	}
</script>

<style>
</style>