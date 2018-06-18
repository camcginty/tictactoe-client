'use strict'

const store = require('./store')
const events = require('./events.js')

const signUpSuccess = function (signUpSuccess) {
  $('#sign-up-form').append('You now have an account. Sign in to play.')
  document.getElementById('sign-up-form').reset()
}

const signUpError = function (signUpError) {
  $('#sign-up-form').append("That didn't work... Try again.")
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (signInSuccess) {
  store.user = signInSuccess.user
  console.log(store.user.id)
  $('#sign-in-form').append('Welcome, ' + store.user.email + '!')
  document.getElementById('sign-in-form').reset()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
//  gamePlayEvents.createPlayer()
}

const signInError = function (signInError) {
  $('#sign-in-form').append('Broken!')
  document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  $('#change-password-form').append('Password changed')
  document.getElementById('change-password-form').reset()
}

const changePasswordError = function (changePasswordError) {
  $('#change-password-form').append("Didn't work")
  document.getElementById('change-password-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  $('#sign-out-form').append('Bye. Come again!')
}

const signOutError = function (signOutError) {
  $('#sign-out-form').append("Didn't work")
}

const createGameSuccess = function (createGameSuccess) {
  $('#new-game').append('Make a Move')
  store.game = createGameSuccess.game
  console.log('createGameSuccess game = ' + createGameSuccess.game)
}

const createGameError = function (newGameError) {
  $('#new-game').append('Error creating game.')
}

const updateGameSuccess = function () {
  console.log('game updated')
  console.log('ui thinks token is ' + store.token)
}

const updateGameFail = function () {
  console.log('game update failed')
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
  events,
  createGameSuccess,
  createGameError,
  updateGameSuccess,
  updateGameFail
}
