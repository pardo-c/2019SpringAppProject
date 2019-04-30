<template>
  <v-toolbar fixed class="purple">
    <v-toolbar-items class="mr-4">
            <v-btn flat small outline color="black" @click="navigateTo({name: 'HelloWorld'})">Living Forward</v-btn>
    </v-toolbar-items>
  <v-toolbar-items class="mr-4">
    <v-btn flat small outline color="black"  @click="navigateTo({name: 'exercises'})">
          Exercises
    </v-btn>
  </v-toolbar-items>
   <v-toolbar-items class="mr-4">
    <v-btn flat small outline color="black"  @click="navigateTo({name: 'uplift'})">
          Uplift
    </v-btn>
  </v-toolbar-items>
    <v-toolbar-items >
    <router-link to="login">
    <v-btn  flat dark v-if="$store.state.isUserLoggedIn">
          Friends
    </v-btn>
     </router-link>
  </v-toolbar-items>
<!-- v-spacer allows you to put things all the way to the right -->
  <v-spacer ></v-spacer>
  <v-toolbar-items>
      <!-- navigate to register page-->
      <v-btn class="mr-4" flat small outline color="black"  v-if="!$store.state.isUserLoggedIn"  @click="navigateTo({name: 'register'})">
           <!-- router-link will search through index.js in router folder-->
        Sign up
    </v-btn>
         <!-- navigate to login page-->
      <v-btn flat small outline color="black" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">
        Login
    </v-btn>
      <v-btn flat small outline color="black"  v-if="$store.state.isUserLoggedIn"
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
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }

}
</script>

<style scoped>
.purple {
  background-image: url("./assets/unicloud.gif");
  background-repeat: repeat;
  background-size: 100%;
}

</style>
