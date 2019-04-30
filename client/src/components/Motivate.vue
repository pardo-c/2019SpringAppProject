<template>
  <div>
    <v-btn outline color="amber" large @click="generate">
      <a>Generate some motivation<b>!</b></a>
    </v-btn>
    <div class="gif-container">
      <img :src="activeGif" />
    </div>
  </div>
</template>

<script>
let gifs = [
  'https://media.giphy.com/media/QoZunxgU0Z1i8/giphy.gif',
  'https://media.giphy.com/media/12XDYvMJNcmLgQ/giphy.gif',
  'https://media.giphy.com/media/PdTF2yoEbUO9q/giphy.gif',
  'https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif',
  'https://media.giphy.com/media/xT9IgEYXCNqPZnqMuY/giphy.gif',
  'https://media.giphy.com/media/pJu3xzRa2PzTq/giphy.gif',
  'https://media.giphy.com/media/ln4bohPvHhwgo/giphy.gif',
  'https://media.giphy.com/media/l2YOC9BjeXhCybEaI/giphy.gif',
  'https://media.giphy.com/media/Z2lMI3RoVv2ne/giphy.gif',
  'https://media.giphy.com/media/D81ZtVnn5Orio/giphy.gif',
  'https://media.giphy.com/media/KHtC0EVItNnaM/giphy.gif',
  'https://media.giphy.com/media/DlPcA9y1IdIWc/giphy.gif',
  'https://media.giphy.com/media/xT4uQBNEr2CFjaV84M/giphy.gif',
  'https://media.giphy.com/media/esZ3XoMUr7ilG/giphy.gif',
  'https://media.giphy.com/media/ukgcHmvflVWjwE8eU5/giphy.gif'
]
export default {
  data () {
    return {
      gifs,
      activeGif: null
    }
  },
  methods: {
    generate (e) {
      e.preventDefault()
      let index = Math.floor(Math.random() * 10) + 0
      this.activeGif = this.gifs[index]
    }
  }
}
</script>

<style>
.gif-container img {
  margin-top:30px;
  min-width:600px;
}
a {
  color:black
}
</style>
