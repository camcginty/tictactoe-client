'use strict'

const store = require('./store')
const events = require('./events.js')

const signUpSuccess = function (signUpSuccess) {
  $('#info').append('You now have an account. Sign in to play.')
  setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signUpError = function (signUpError) {
  $('#info').append("That didn't work... Try again.")
  setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signInSuccess = function (signInSuccess) {
  store.user = signInSuccess.user
  document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const signInError = function (signInError) {
  $('#info').append('Broken! Try again.')
  setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  $('#info').append('Password changed.')
  setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
}

const changePasswordError = function (changePasswordError) {
  $('#info').append("That didn't work.")
  setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  $('#info').append('Bye. Come again!')
  setTimeout(clearText, 2500)
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const signOutError = function (signOutError) {
  $('#info').append("That didn't work.")
  setTimeout(clearText, 2500)
}

const createGameSuccess = function (createGameSuccess) {
  $('#info').append('Make a Move.')
  setTimeout(clearText, 2500)
  store.game = createGameSuccess.game
}

const createGameError = function (newGameError) {
  $('#info').append('Error creating game.')
  setTimeout(clearText, 2500)
}

const getGamesSuccess = function (data) {
  $('#info').append('Games played: ' + data.games.length)
  setTimeout(clearText, 2500)
  store.game = data
}

const getGamesError = function (games) {
  $('#info').append('Error getting game records.')
  setTimeout(clearText, 2500)
}

const updateGameSuccess = function () {
}

const updateGameFail = function () {
}

const clearText = function () {
  document.getElementById('info').textContent = ''
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
  updateGameFail,
  getGamesSuccess,
  getGamesError
}
