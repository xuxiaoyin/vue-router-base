import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './components/Home.vue'
import News from './components/News.vue'
import Detail from './components/Detail.vue'
import Pdetail from './components/Pdetail.vue'

const routes = [
			  { path: '/home', component: Home },
			  { path: '/news', component: News },
			  { path: '/detail/:aid', component: Detail },
			  { path: '/pdetail', component: Pdetail },
			  { path: '*', redirect: '/home' }   /*默认跳转路由*/
			]

const router = new VueRouter({
			  routes // （缩写）相当于 routes: routes
			})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
