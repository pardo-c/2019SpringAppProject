<template>
  <div id="app">
     <v-app>
      <main>
        <v-container fluid><iframe src="https://giphy.com/embed/5EJHDSPpFhbG0" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dogs-exercise-workout-5EJHDSPpFhbG0"></a></p>      </v-container>
           <router-view></router-view>
      </main>
    </v-app>
    <!-- add compnent for app to use (header)-->
    <page-header />
   <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  // add different components to style all app to use it
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
