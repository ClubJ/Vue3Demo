import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GameCenter from './views/GameCenter.vue'
import News from './views/News.vue'
import About from './views/About.vue'
import Community from './views/Community.vue'

import Games from './components/community/Games'
import Download from './components/community/Download'
import Personal from './components/community/Personal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/gamecenter',
      name: 'gamecenter',
      component: GameCenter
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      children: [
        {
          path: '/community/games',
          name: 'games',
          component: Games
        },
        {
          path: '/community/download',
          name: 'download',
          component: Download
        },
        {
          path: 'community/personal',
          name: 'personal',
          component: Personal
        }
      ]
    }
  ]
})
