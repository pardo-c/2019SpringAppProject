// a controller has all your endpoints defined
const AuthenticationController = require('./controllers/AuthenticationController')

// include Joi framework
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// for exercises table
const ExercisesController = require('./controllers/ExercisesController')

// for Uplift table
const UpliftController = require('./controllers/UpliftController')

// export routes associated with authentication
module.exports = (app) => {
  // express.js/middleware endpoint: callback function
  app.post('/register',
    // call policy as middleware function before we get to controller
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
  
  // call index method from EC
  app.get('/exercises',
    ExercisesController.index)
  // call show method from EC
  app.get('/exercises/:exerciseId',
    ExercisesController.show)
  // call post method from EC
  app.post('/exercises',
    ExercisesController.post)

  app.post('/uplift',
    UpliftController.post)
  app.get('/uplift',
    UpliftController.index)
}

