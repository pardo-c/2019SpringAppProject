<template>
  <panel title="Search">
    <v-flex xs6 offset-xs3>
    <v-text-field
      label="Filter by exercise name, type, or difficulty"
      v-model="search"
    ></v-text-field>
    </v-flex>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  // wait for user to enter in value
  watch: {
    async search (value) {
      const route = {
        name: 'exercises'
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
