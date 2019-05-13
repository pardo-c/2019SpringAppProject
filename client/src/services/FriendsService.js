import Api from '@/services/Api'
// add get/post/delete/update services here
export default {
  // friends do not have any parameters
  index (search) {
    return Api().get('friends', {
      params: {
        search: search
      }
    })
  }
}
