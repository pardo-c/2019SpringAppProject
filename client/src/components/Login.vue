<template>
<v-layout column>
<v-flex>
  <v-card-text>
  <p class="text-xs-center">
<div class="white elevation-2">
<v-toolbar flat dense class="amber">
<v-toolbar-title><a>Login</a></v-toolbar-title>
</v-toolbar>
<div class="pl-4 pr-4 pt-2 pb-2">
<input
type="email"
name="email"
v-model="email"
placeholder="email address"/>
<br> <br>
<input
type="password"
name="password"
v-model="password"
placeholder="password"
/>
<br>
<div class ="danger-alert" v-html="error"/>
<br>
<v-btn small outline color="indigo" @click="login"> Login</v-btn>
</div>
</div>
</v-card-text>
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
        // reroute user to exercise page after logging in
        this.$router.push({
          name: 'exercises'
        })
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
a {
  color: black
}
input {
  border-style:dashed;
  border-width: thin;
  border-color: indigo
}
</style>
