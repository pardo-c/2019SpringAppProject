// a controller has all your endpoints defined
const AuthenticationController = require('./controllers/AuthenticationController')

// include Joi framework
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// for exercises table
const ExercisesController = require('./controllers/ExercisesController')

const BookmarksController = require('./controllers/BookmarksController')

// for Uplifts table
const UpliftController = require('./controllers/UpliftController')

const FriendsController = require('./controllers/FriendsController')
// export routes associated with authentication
module.exports = (app) => {
  // express.js/middleware endpoint: callback function
  app.post('/register',
    // call policy as middleware function before we get to controller
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
  
  // call index method from ExerciseController(EC)
  app.get('/exercises',
    ExercisesController.index)
  // call show method from EC
  app.get('/exercises/:exerciseId',
    ExercisesController.show)
  // call post method from EC
  app.post('/exercises',
    ExercisesController.post)
  app.put('/exercises/:exerciseId',
    ExercisesController.put)

  // call methods from BookmarkController
  app.get('/bookmarks',
    BookmarksController.index)
  app.post('/bookmarks',
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)
  
  // call methods for uplift
  app.get('/uplifts',
    UpliftController.index)
  app.post('/uplifts',
    UpliftController.post)

  // call methods for friends
  app.get('/friends',
    FriendsController.index)
}
