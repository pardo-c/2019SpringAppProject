<template>
<v-layout column>
<v-flex>
<div class="white elevation-2">
<v-toolbar flat dense class="purple">
<v-toolbar-title>Login</v-toolbar-title>
</v-toolbar>
</div>
<div class="pl-4 pr-4 pt-2 pb-2">
<input
type="email"
name="email"
v-model="email"
placeholder="email address"/>
<br>
<input
type="password"
name="password"
v-model="password"
placeholder="password"
/>
<br>
<div class = "error" v-html="error"/>
<br>
<button @click="login"> Login </button>
</div>
</v-flex>
</v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'email',
      password: 'password',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        // keep track of response returned
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // call setToken method from store.js actions
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        // error.response.data what is returned from axios
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
