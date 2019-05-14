<template>
    <v-flex xs6 offset-xs3>
  <v-card><v-card-text> <panel title="Search people by their name!">
    <v-autocomplete
        v-model="search"
        :items="friendNames">
      </v-autocomplete> </panel>
    </v-card-text>
  </v-card>
   </v-flex>
</template>
<script>
import FriendsService from '@/services/FriendsService'
export default {
  data () {
    return {
      friendnames: null,
      friendNames: [],
      search: ''
    }
  },
  // wait for user to enter something in search box
  async mounted () {
    // get request from backend
    this.friendnames = (await FriendsService.index()).data
    for (var i = 0; i < this.friendnames.length; i++) {
      this.friendNames.push(this.friendnames[i].name)
    }
  },
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
