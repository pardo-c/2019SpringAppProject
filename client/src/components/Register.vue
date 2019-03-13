<template>
  <div>
  <h1>Register</h1>

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
  <button
  @click="register">
  Register</button>
  </div>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
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
.error {
  color: red;
}
</style>
