<template>
	<div>
		<div>我是首页</div>
		<ul>
			<li v-for="item,key in list">
				<router-link :to="'/pdetail?id='+key">
					{{key}}--{{item}}
				</router-link>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:['商品1111','商品222','商品333','商品444','商品5555']
			}
		}
	}
</script>

<style>
</style>