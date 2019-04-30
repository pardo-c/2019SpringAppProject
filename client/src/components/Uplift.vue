<template>
  <div>
   <h1> Read uplifting stories to encourage you to exercise </h1>
  </div>
</template>

<script>
import UpliftService from '@/services/UpliftService'
export default {
  data () {
    return {
      story: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.story = (await UpliftService.index()).data
  }
}
</script>

<style scoped>
</style>
