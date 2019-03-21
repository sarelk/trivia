import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/GameScreen.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import QuestEdit from './views/QuestEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Play',
      name: 'Game',
      component: Game
    },
    {
      path: '/Signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/quest/edit',
    //   name: 'QuestEdit',
    //   component: QuestEdit 
    // },
    {
      path: '/quest/edit/:questId?',
      name: 'QuestEdit',
      component: QuestEdit 
    },
  ]
})
