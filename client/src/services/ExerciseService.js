import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  // exercises does not have any parameters
  index () {
    return Api().get('exercises')
  },
  post (exercise) {
    return Api().post('exercises', exercise)
  }
}
