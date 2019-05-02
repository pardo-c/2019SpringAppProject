import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  index () {
    return Api().get('uplifts')
  },
  post (story) {
    return Api().post('uplifts', story)
  }
}
