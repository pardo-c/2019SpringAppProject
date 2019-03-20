<template>
  <v-layout column>
   <v-flex xs6 offset-xs3>
    <panel title='Exercises'>
        <div v-for="exercise in exercises"
          :key="exercise.name">
          {{exercise.name}}
          {{exercise.type}}
          {{exercise.difficulty}}
        </div>
    </panel>
  </v-flex>
 </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    // return array for for-loop
    return {
      /* exercises: [
        {
          name: 'Walking',
          type: 'Cardio',
          difficulty: 'Easy'
        }
      ] */
      songs: null
    }
  },
  async mounted () {
    // get request from backend
    this.exercises = await ExerciseService.index()
  }
}
</script>

<style scoped>
</style>
