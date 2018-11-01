<template>
  <div id="app">
  	<header class="header">
	  	<router-link to='/home'>首页</router-link>
	  	<router-link to='/news'>新闻</router-link>
	  	<router-link to='/user/useradd'>用户中心</router-link>
  	</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.header{ 
	height: 4rem; 
	line-height: 4rem; 
	background: #000; 
	font-size: 2rem;
	text-align: center;
	a{
		color: #fff;
		text-decoration: none; 
		padding: 0 1rem;
	}
}
</style>
