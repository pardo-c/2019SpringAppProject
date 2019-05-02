'use strict';
// to avoid clearing database when adding new vue component create seed = script to populate database
const {
    sequelize,
    Exercises,
    User,
    Bookmark,
    Friends,
    Uplifts
  } = require('../src/models')

const Promise = require('bluebird')
// relative paths
const exercises = require('./exercises.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const friends = require('./friends.json')
const uplifts = require('./uplift.json')

sequelize.sync({force: true})
  .then(async function () {
    
     // make sure we bring in all users/exercises/bookmarks
    await Promise.all(
    users.map(user => {
      User.create(user)
    })
    )
    await Promise.all(
      exercises.map(exercise => {
        Exercises.create(exercise)
      })
    )
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
    await Promise.all(
        friends.map(friend => {
          Friends.create(friend)
        })
      )
    await Promise.all(
      uplifts.map(uplift => {
        Uplifts.create(uplift)
      })
    )
})
