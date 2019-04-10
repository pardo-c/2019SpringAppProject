<template>
  <div>
    <panel title="Exercise Metadata">
      <v-text-field
      label="Name"
      required
      :rules="[required]"
      v-model="exercise.name"
      ></v-text-field>
      <v-text-field
      label="Type"
      required
      :rules="[required]"
      v-model="exercise.type"
      ></v-text-field>
      <v-text-field
      label="Difficulty"
      required
      :rules="[required]"
      v-model="exercise.difficulty"
      ></v-text-field>
      <v-text-field
      label="gif"
      required
      :rules="[required]"
      v-model="exercise.gifURL"
      ></v-text-field>
      <v-text-field
      label="Youtube ID"
      required
      :rules="[required]"
      v-model="exercise.youtubeId"
      ></v-text-field>
    </panel>
    <span class="error" v-if="error">
    {{error}}
    </span>

    <v-btn
        dark
        class="purple"
        @click="save">
        Edit and Save Exercise
        </v-btn>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import ExerciseService from '@/services/ExerciseService'

export default {
  data () {
    return {
      exercise: {
        name: null,
        type: null,
        difficulty: null,
        gifURL: null,
        youtubeId: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  // create 'create method'
  methods: {
    async save () {
      this.error = null
      // make sure all inputs filled before creation of exercise
      const areAllFieldsFilledIn = Object
        .keys(this.exercise)
        .every(key => !!this.exercise[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
      const exerciseId = this.$store.state.route.params.exerciseId
      try {
        // use put method to replace info in table
        await ExerciseService.put(this.exercise)
        this.$router.push({
          name: 'exercises',
          params: {
            exerciseId: exerciseId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      /* grab exercise id by going to vuex ($store)
      the state in vuex, the route to the id in app, parameters */
      const exerciseId = this.$store.state.route.params.exerciseId
      // pass exercise id to show it.
      this.exercises = (await ExerciseService.show(exerciseId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
