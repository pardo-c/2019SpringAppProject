<template>
    <panel title="View">
      <!-- from exercises table: shw data with id = _ -->
      <div> {{exercises.name}} -
            {{exercises.difficulty}} -
            {{exercises.type}} -
            {{exercises.gifURL}}
      </div>
          <v-btn small
          v-if="isUserLoggedIn && !bookmark"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn small
          v-if="isUserLoggedIn && bookmark"
          @click="unsetAsBookmark">
          Unset Bookmark
        </v-btn>

      <v-btn small
       @click="navigateTo({
          name: 'exercises-edit',
          params: {
            exerciseId: exercises.id
          }
        })">
        Edit
        </v-btn>
        <v-spacer>
           <v-btn small
        slot="action"
        @click="navigateTo({name: 'exercises'})">
        Back
        </v-btn>
        </v-spacer>
    </panel>
</template>
<script>
import ExerciseService from '@/services/ExerciseService'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      exercises: {},
      bookmark: null
    }
  },
  // state variables to grab from store
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  // grab data from existing table. when mounted, run function
  async mounted () {
    /* grab exercise id by going to vuex ($store)
    the state in vuex, the route to the id in app, parameters */
    const exerciseId = this.$store.state.route.params.exerciseId
    // pass exercise id to show it.
    this.exercises = (await ExerciseService.show(exerciseId)).data
    if (this.isUserLoggedIn) {
      try {
        const query = {
          exerciseId: this.$store.state.route.params.exerciseId,
          userId: this.$store.state.user.id
        }
        console.log(query)
        this.bookmark = (await BookmarksService.index(query)).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async setAsBookmark () {
      console.log(this.bookmark)
      try {
        this.bookmark = (await BookmarksService.post({
          exerciseId: this.$store.state.route.params.exerciseId,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      console.log(this.bookmark)
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
</style>
