import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  // exercises does not have any parameters
  index () {
    return Api().get('exercises')
  },
  show (exerciseId) {
    return Api().get(`exercises/${exerciseId}`)
  },
  post (exercise) {
    return Api().post('exercises', exercise)
  },
  put (exercise) {
    return Api().put(`exercises/${exercise.id}`, exercise)
  }
}
