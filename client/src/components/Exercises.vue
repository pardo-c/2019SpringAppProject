<template>
  <v-layout column>
   <v-flex>
     <exercise-search-panel />
    <panel title='Exercises'>
      <v-btn
        slot="action"
        @click="navigateTo({name: 'exercises-create'})">
        add
        </v-btn>
        <ul>
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
         </ul>
    </panel>
  </v-flex>
 </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
import ExerciseSearchPanel from './ExerciseSearchPanel'
import ViewBookmarks from './ViewBookmarks'
export default {
  components: {
    ExerciseSearchPanel,
    ViewBookmarks
  },
  data () {
    // return exercises
    return {
      exercises: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  // watcher for ExerciseSearchPanel
  watch: {
    // listen to when query search value changes
    '$route.query.search': {
      immediate: true,
      // invoke handler for search
      async handler (value) {
        this.exercises = (await ExerciseService.index(value)).data
      }
    }
  },
  async mounted () {
    // get request from backend
    this.exercises = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>
.exercise-gifURL {
  width: 50%;
  margin: 0 auto;
}
</style>
