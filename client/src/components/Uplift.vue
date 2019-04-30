<template>
<div>
   <h1> Read uplifting stories to encourage you to exercise </h1>
       <div class="pl-8 pr-8 pt-4 pb-4"
        v-for="uplift in uplifts"
        :key="uplift.id">
        <div class="uplift-story">
          {{uplift.story}}>
        </div>
        </div>
        </div>
</template>

<script>
import UpliftService from '@/services/UpliftService'
export default {
  data () {
    return {
      uplift: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.uplift = (await UpliftService.index()).data
  }
}
</script>

<style scoped>
</style>
