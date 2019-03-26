<template>
    <panel title="View">
      <!-- from exercises table: shw data with id = _ -->
      <div> {{exercises.name}} -
            {{exercises.difficulty}} -
            {{exercises.type}} -
            {{exercises.gifURL}}
      </div>
      <v-btn
       @click="navigateTo({
          name: 'exercises-edit',
          params: {
            exerciseId: exercises.id
          }
        })">
        Edit
        </v-btn>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
</style>
