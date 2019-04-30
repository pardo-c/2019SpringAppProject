<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <ul>
      <li>
        <a>
      <router-link to="about">
      <v-btn medium color="amber">
           What does it mean to live forward?
    </v-btn>
     </router-link>
        </a>
      </li>
      <li>
        <a>
      <router-link to="uplift">
      <v-btn medium color="amber">
          Uplift yourself!
    </v-btn>
     </router-link>
        </a>
      </li>
      <li>
        <a>
        <router-link to="motivate">
      <v-btn medium color="amber">
        Don't feel like exercising?
    </v-btn>
     </router-link>
        </a>
      </li>
      <li>
        <a>
      <router-link to="register">
      <v-btn medium color="amber" v-if="!$store.state.isUserLoggedIn">
        Register!
    </v-btn>
     </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Living Forward'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  font-variant: small-caps;
  color: #ffbf00;
  font-size: 70px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
   background-image: url('./assets/rainbo.gif');
}
a {
  color: #ffbf00;
}
</style>
