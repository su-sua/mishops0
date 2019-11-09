import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import  Product from '../views/Product.vue'
import Shopping from '../views/Shopping.vue'
import Mine from '../views/Mine.vue'
import Tza from '../views/Tza.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		auth:true
	}
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
	meta:{
		auth:true
	}
  },
  {
    path: '/product/:id',
    name: 'product',
    component:Product,
	meta:{
		auth:false
	}
  },
  {
    path: '/tza/:id',
    name: 'tza',
    component:Tza,
  	meta:{
  		auth:false
  	}
  },
  {
    path: '/login',
    name: 'login',
    component:Login,
  	meta:{
  		auth:false
  	}
  },
  {
    path: '/shopping',
    name: 'shopping',
    component:Shopping,
  	meta:{
  		auth:true
  	}
  },
  {
    path: '/mine',
    name: 'mine',
    component:Mine,
  	meta:{
  		auth:true
  	}
  },
  {
    path: '/about',
    name: 'about',
	meta:{
		auth:true
	},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
