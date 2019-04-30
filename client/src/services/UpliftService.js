import Api from '@/services/Api'
// add get/post/delete/update services here
export default {

  index () {
    return Api().get('uplift')
  },
  post (uplift) {
    return Api().post('uplift', uplift)
  }
}
