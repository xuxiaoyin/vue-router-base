# vue-router-base
vue路由基础
vue路由配置：


	1.安装 

	npm install vue-router  --save   / cnpm install vue-router  --save


	2、引入并 Vue.use(VueRouter)   (main.js)
 
		import VueRouter from 'vue-router'

		Vue.use(VueRouter)

	
	3、配置路由

		

		1、创建组件 引入组件


		2、定义路由  （建议复制s）

			const routes = [
			  { path: '/foo', component: Foo },
			  { path: '/bar', component: Bar },
			  { path: '*', redirect: '/home' }   /*默认跳转路由*/
			]

		3、实例化VueRouter

			const router = new VueRouter({
			  routes // （缩写）相当于 routes: routes
			})

		4、挂载

				
		new Vue({
		  el: '#app',
		  router，
		  render: h => h(App)
		})


		
		5 、根组件的模板里面放上这句话   <router-view></router-view>         




		6、路由跳转
		<router-link to="/foo">Go to Foo</router-link>
		 <router-link to="/bar">Go to Bar</router-link>
     
     
     
     
     /*不同路由传值：动态路由

    1、配置动态路由

       routes: [
        // 动态路径参数 以冒号开头
        { path: '/user/:id', component: User }
      ]


    2、在对应的页面

      this.$route.params获取动态路由的值


*/
