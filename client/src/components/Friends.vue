<template>
  <div>
    <h2> Look at whose Living Forward! </h2>
    <p> Know someone? Follow friends feature is coming soon! </p>
        <div class="pl-8 pr-8 pt-4 pb-4"
        v-for="friend in friends"
        :key="friend.id">
        <div class="friend-name">
          {{friend.name}} -
        </div>
        <div class="friend-status">
          {{friend.status}} -
        </div>
</div>
  </div>
</template>

<script>
import FriendsService from '@/services/FriendsService'
export default {
  components: {
  },
  data () {
    // return friends
    return {
      friends: null
    }
  },
  async mounted () {
    // get request from backend
    this.friends = (await FriendsService.index()).data
  }
}
</script>
<style>
</style>
