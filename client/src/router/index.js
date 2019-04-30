import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Exercises from '@/components/Exercises'
import CreateExercise from '@/components/CreateExercise'
import EditExercise from '@/components/EditExercise'
import ViewExercise from '@/components/ViewExercise'
import ExerciseSearchPanel from '@/components/ExerciseSearchPanel'
import Motivate from '@/components/Motivate'
import About from '@/components/About'
import Uplift from '@/components/Uplift'
import Friends from '@/components/Friends'
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
      // create new path for search exercises
      path: '/exercise/exercisesearch',
      name: 'exercise-search',
      component: ExerciseSearchPanel
    },
    {
      // create new path for creating an exercise
      path: '/exercises/create',
      name: 'exercises-create',
      component: CreateExercise
    },
    { // create new path for creating an exercise
      path: '/exercises/:exerciseId/edit',
      name: 'exercises-edit',
      component: EditExercise
    },
    {
      path: '/exercises/:exerciseId',
      name: 'exercise',
      component: ViewExercise
    },
    { // create new path for motivate page
      path: '/motivate',
      name: 'motivate',
      component: Motivate
    },
    { // crete new path for about page
      path: '/about',
      name: 'about',
      component: About
    },
    { // crete new path for uplift page
      path: '/uplift',
      name: 'uplift',
      component: Uplift
    },
    { // crete new path for uplift page
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    { // if page does not exits, reroute to
      path: '*',
      redirect: 'HelloWorld'
    }
  ]
})
