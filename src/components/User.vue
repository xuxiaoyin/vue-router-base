<template>
	<div id="user">
		<div class="user">
			<div class="left">
				<ul>
					<li><router-link to="/user/useradd">添加用户</router-link></li>
					<li><router-link to="/user/userlist">用户列表</router-link></li>
				</ul>
			</div>
			<div class="right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.user{
		padding: 0 1rem;
		font-size: 1.6rem;
		display: flex;
		line-height: 2;
		.left{
			width: 25%;
		}
	}
</style>