<template>
  <v-toolbar fixed class="purple">
    <v-toolbar-items class="mr-4">
        <router-link to="/">
            <v-btn flat dark>Living Forward</v-btn>
        </router-link>
    </v-toolbar-items>
  <v-toolbar-items>
    <router-link to="exercises">
    <v-btn flat dark>
          Exercises
    </v-btn>
     </router-link>
  </v-toolbar-items>
    <v-toolbar-items >
    <router-link to="login">
    <v-btn  flat dark v-if="$store.state.isUserLoggedIn">
          Friends
    </v-btn>
     </router-link>
  </v-toolbar-items>
<!-- v-spacer allows you to put things all the way to the right -->
  <v-spacer></v-spacer>
  <v-toolbar-items>
      <!-- navigate to register page-->
      <router-link to="register">
      <v-btn v-if="!$store.state.isUserLoggedIn">
           <!-- router-link will search through index.js in router folder-->
        Sign up
    </v-btn>
     </router-link>
         <!-- navigate to login page-->
      <router-link to="login">
      <v-btn v-if="!$store.state.isUserLoggedIn">
           <!-- router-link will search through index.js in router folder-->
        Login
    </v-btn>
      </router-link>
      <v-btn v-if="$store.state.isUserLoggedIn"
      @click="logout">
        Logout
    </v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }

}
</script>

<style scoped>

</style>
