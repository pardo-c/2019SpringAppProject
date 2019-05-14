<template>
<v-flex>
<friends-search-panel />
<friend-name-search-panel />
<br> <br>
<v-flex xs6 offset-xs3>
  <panel title='Look at whose Living Forward!'>
    <p> Know someone? Follow friends feature is coming soon! </p>
    <div class="bord">
        <div class="pl-8 pr-8 pt-4 pb-4"
        v-for="friend in friends"
        :key="friend.id">
        <div class="friend-name">
          {{friend.name}} -
        </div>
        <div class="friend-status">
          {{friend.status}} -
        </div>
</div> </div> </panel>
</v-flex> </v-flex>
</template>
<script>
import FriendsService from '@/services/FriendsService'
import FriendsSearchPanel from './FriendsSearchPanel'
import FriendNameSearchPanel from './FriendNameSearchPanel'
export default {
  components: {
    FriendsSearchPanel,
    FriendNameSearchPanel
  },
  data () {
    // return friends
    return {
      friends: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    // listen to when query search value changes
    '$route.query.search': {
      immediate: true,
      // invoke handler for search
      async handler (value) {
        this.friends = (await FriendsService.index(value)).data
      }
    }
  },
  async mounted () {
    // get request from backend
    this.friends = (await FriendsService.index()).data
  }
}
</script>
<style>
.bord {
  border-style: solid;
}
</style>
