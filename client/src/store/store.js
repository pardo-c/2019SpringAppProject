import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// utilize Vuex and have access to all vue components
Vue.use(Vuex)

// create Vuex store
// Vuex has three parts: state, mutations, actions
export default new Vuex.Store({
  // strict means cannot modify state unless with action or mutation
  strict: true,
  plugins: [
    createPersistedState()
  ],
  // global states of application that we want to keep track off
  state: {
    token: null,
    user: null,
    // this state will control what user sees based on login/out
    isUserLoggedIn: false
  },
  // methods with same name as action
  mutations: {
    /* change value of token why?
    to allow actions to be easier to follow */
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  // invoke actions from vue components
  // inside action--make async calls
  actions: {
    setToken ({commit}, token) {
    // call mutation called setToken and pass token object
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      // call mutation called setToken and pass token object
      commit('setUser', user)
    }
  }
})
