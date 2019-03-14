<template>
  <v-toolbar fixed class="purple">
    <v-toolbar-title class="mr-4">
        <router-link to="/">
            <v-btn flat>Living Forward</v-btn>
        </router-link>
    </v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat dark>
          Search Exercises
    </v-btn>
  </v-toolbar-items>
<!-- v-spacer allows you to put things all the way to the right -->
  <v-spacer>
  </v-spacer>
  <v-toolbar-items>
      <!-- navigate to register page-->
      <router-link to="register">
      <v-btn flat>
           <!-- router-link will search through index.js in router folder-->
        Sign up
    </v-btn>
     </router-link>
         <!-- navigate to login page-->
      <router-link to="login">
      <v-btn flat>
           <!-- router-link will search through index.js in router folder-->
        Login
    </v-btn>
      </router-link>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
