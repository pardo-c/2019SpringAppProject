<template>
  <div>
    <h2> Look at whose Living Forward! </h2>
    <p> Know someone? Follow friends feature is coming soon! </p>
  </div>
</template>

<script>
import FriendsService from '@/services/FriendsService'
export default {
  components: {
  },
  data () {
    // return exercises
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
