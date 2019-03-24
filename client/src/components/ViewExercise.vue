<template>
    <h1> view exercise </h1>
</template>
<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      song: null
    }
  },
  // grab data from existing table. when mounted, run function
  async mounted () {
    /* grab exercise id by going to vuex ($store)
    the state in vuex, the route to the id in app, parameters */
    const exerciseId = this.$store.state.route.params.exercisesId
    // pass exercise id to show it.
    this.exercise = await ExerciseService.show(exerciseId)
  }
}
</script>
<style scoped>
</style>
