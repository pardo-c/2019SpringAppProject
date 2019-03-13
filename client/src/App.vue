<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
   <iframe src="https://giphy.com/embed/5EJHDSPpFhbG0" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dogs-exercise-workout-5EJHDSPpFhbG0"></a></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
