'use strict'
const store = require('./store')
const makePlayer = require('../games/events.js')

const signUpSuccess = function (signUpSuccess) {
  $('#sign-up-form').append('You now have an account. Sign in to play.')
}

const signUpError = function (signUpError) {
  $('#sign-up-form').append("That didn't work...")
}

const signInSuccess = function (signInSuccess) {
  store.user = signInSuccess.user
  console.log(store.user.email)
  $('#sign-in-form').append('Welcome, ' + store.user.email + '!')
  makePlayer.createPlayer()
}

const signInError = function (signInError) {
  $('#sign-in-form').append('Broken!')
}

const changePasswordSuccess = function (changePasswordSuccess) {
  $('#change-password-form').append('Password changed')
}

const changePasswordError = function (changePasswordError) {
  $('#change-password-form').append("Didn't work")
}

const signOutSuccess = function (signOutSuccess) {
  $('#sign-out-form').append('Bye. Come again!')
}

const signOutError = function (signOutError) {
  $('#sign-out-form').append("Didn't work")
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordError,
  changePasswordSuccess,
  signOutSuccess,
  signOutError,
  makePlayer
}
