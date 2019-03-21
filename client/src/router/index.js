import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Exercises from '@/components/Exercises'
import CreateExercise from '@/components/CreateExercise'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // create new path for register UI
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      // create new path for login
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // create new path for exercises
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    },
    {
      // create new path for creating an exercise
      path: '/exercises/create',
      name: 'exercises-create',
      component: CreateExercise
    }
  ]
})
