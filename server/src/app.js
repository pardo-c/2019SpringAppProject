// add dependencies to build backend express.js app
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// use dependencies
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// define routes in express with end points. Use get function
app.get('/status', (req,res) => {
    // when app gets a request, this function will send back JSON object
    res.send({
        message:"Welcome to Living Forward!"
    })
})

// specifiy port for app
app.listen(process.env.PORT || 8081)
