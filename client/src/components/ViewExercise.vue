<template>
    <panel title="View">
      <!-- from exxercises table -->
      <div> {{exercises.name}} -
            {{exercises.difficulty}} -
            {{exercises.type}} -
            {{exercises.gifURL}}
      </div>
    </panel>
</template>
<script>
import ExerciseService from '@/services/ExerciseService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      exercises: {}
    }
  },
  // grab data from existing table. when mounted, run function
  async mounted () {
    /* grab exercise id by going to vuex ($store)
    the state in vuex, the route to the id in app, parameters */
    const exerciseId = this.$store.state.route.params.exerciseId
    // pass exercise id to show it.
    this.exercises = (await ExerciseService.show(exerciseId)).data
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
</style>
