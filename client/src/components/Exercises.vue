<template>
  <v-layout column>
   <v-flex>
    <panel title='Exercises'>
      <v-btn
        slot="action"
        @click="navigateTo({name: 'exercises-create'})">
        add
        </v-btn>
        <div v-for="exercise in exercises"
          :key="exercise.id">

          <v-layout>
            <v-flex xs6>
              <div class="exercise-name">
                {{exercise.name}}
                </div>
                 <div class="exercise-type">
                {{exercise.type}}
                </div>
                 <div class="exercise-difficulty">
                {{exercise.difficulty}}
                </div>
              </v-flex>
               <v-btn
        @click="navigateTo({
          name: 'exercise',
          params: {
            exerciseId: exercise.id
          }
        })">
        View
        </v-btn>
            <v-flex xs6>
              <img class="exercise-gifURL" :src="exercise.gifURL" />
                </v-flex>
         </v-layout>
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
      exercises: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // get request from backend
    this.exercises = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>
</style>
