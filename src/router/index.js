import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/post/:id', name: 'post', component: Post }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
