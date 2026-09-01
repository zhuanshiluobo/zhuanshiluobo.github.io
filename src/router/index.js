import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Demo from '../views/Demo.vue'
import Paper from '../views/Paper.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/post/:id', name: 'post', component: Post },
  { path: '/demo', name: 'demo', component: Demo },
  { path: '/paper', name: 'paper', component: Paper }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
