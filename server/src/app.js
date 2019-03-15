// add dependencies to build backend express.js app
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models/')
const config = require('./config/config')

// use dependencies
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// attach all different endpoints to app variable
require('./routes')(app)
// connect database to what you configure it for
sequelize.sync()
  .then(() => {
    // specifiy port for app
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  
