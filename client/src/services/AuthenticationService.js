import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
