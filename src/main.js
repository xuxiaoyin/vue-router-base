import Vue from 'vue'
import App from './App.vue'

import './assets/common.scss'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './components/Home.vue'
import News from './components/News.vue'
import Detail from './components/Detail.vue'
import Pdetail from './components/Pdetail.vue'
import User from './components/User.vue'

import Useradd from './components/user/Add.vue'
import Userlist from './components/user/List.vue'


const routes = [
			  { path: '/home', component: Home },
			  { path: '/news', component: News },
			  { path: '/detail/:aid', component: Detail },
			  { path: '/pdetail', component: Pdetail },
			  { 
			  	path: '/user', 
			  	component: User,
			  	children :[
			  		{ path: 'useradd', component: Useradd },
      			{ path: 'userlist', component: Userlist }
			  	]
			  	
			  },
			  { path: '*', redirect: '/home' }   /*默认跳转路由*/
			]

const router = new VueRouter({
				mode:'history',//hash模式该为history模式
			  routes // （缩写）相当于 routes: routes
			})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
