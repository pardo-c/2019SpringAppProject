<template>
  <v-layout row>
     <div
      v-for="uplift in uplifts"
      class="uplifts"
      :key="uplift.id">
      <v-layout>
        <v-flex offset-xs3>
          <div class="uplift-story">
            {{uplift.story}}
          </div>
    </v-flex>
  </v-layout>
  </div>
</v-layout>
</template>
<script>
import UpliftService from '@/services/UpliftService'
export default {
  data () {
    // return uplifts
    return {
      uplifts: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // get request from backend
    this.uplifts = (await UpliftService.index()).data
  }
}
</script>
<style scoped>
.uplift-story {
  border-style: solid;
}
</style>
