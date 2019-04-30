import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  // friends do not have any parameters

  show () {
    return Api().get('user')
  }
}