<template>
    <v-flex xs6 offset-xs3>
     <v-card><v-card-text> <panel title="Search people by their status!">
      <v-autocomplete
        v-model="search"
        :items="status"
      >
      </v-autocomplete> </panel>
    </v-card-text>
  </v-card>
  <v-card><v-card-text> <panel title="Search people by their name!">
    <v-autocomplete
        v-model="search"
        :items="friendNames"
      >
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
      status: [ 'fetus', 'baby', 'toddler', 'kid', 'superkid' ],
      friendNames: [],
      friends: null,
      search: ''
    }
  },
  // wait for user to enter something in search box
  async mounted () {
    // get request from backend
    this.friends = (await FriendsService.index()).data
    var friendNames = []
    for (var i = 0; i < this.friends.length; i++) {
      friendNames[i] += this.friends[i].name
    }
    this.friendNames = friendNames
  },
  watch: {
    async search (value) {
      this.friends = (await FriendsService.index()).data
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
