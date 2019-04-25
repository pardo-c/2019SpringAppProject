<template>
  <panel title="Search">
    <v-text-field
      label="Search by exercise name, type, or difficulty"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  // 20 min
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'exercises'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 5000),
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
