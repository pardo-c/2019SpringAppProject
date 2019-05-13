<template>
    <v-flex xs6 offset-xs3>
     <v-card><v-card-text> <panel title="Search">
      <v-autocomplete
        v-model="search"
        :items="status"
      >
      </v-autocomplete> </panel>
    </v-card-text>
  </v-card> </v-flex>
</template>
<script>
export default {
  data () {
    return {
      status: [ 'fetus', 'baby', 'toddler', 'kid', 'superkid' ],
      search: ''
    }
  },
  // wait for user to enter something in search box
  watch: {
    async search (value) {
      const route = {
        name: 'friends'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
        this.$router.push(route)
      }
    },
    // add watcher to search query string
    '$route.query.search': {
      // as input changes in search box, change handler and vice versa
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>
</style>
