'use strict'
const {
  Bookmark,
  Exercises,
  User
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {exerciseId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          ExerciseId: exerciseId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {exerciseId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          ExerciseId: exerciseId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create(req.query)
      const exercise = await Exercises.findById(exerciseId)
      const user = await User.findById(userId)
      await newBookmark.setUser(user)
      await newBookmark.setExercises(exercise)
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
} 
