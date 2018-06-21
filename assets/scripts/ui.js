'use strict'

const store = require('./store')
const events = require('./events.js')

const signUpSuccess = function (signUpSuccess) {
  $('#info').append('You now have an account. Sign in to play.')
  setTimeout(clearText, 2000)
  document.getElementById('sign-up-form').reset()
}

const signUpError = function (signUpError) {
  $('#info').append("That didn't work... Try again.")
  setTimeout(clearText, 2000)
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (signInSuccess) {
  store.user = signInSuccess.user
  console.log(store.user.id)
  document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  setTimeout(clearText, 2000)
  document.getElementById('sign-in-form').reset()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const signInError = function (signInError) {
  $('#info').append('Broken! Try again.')
  setTimeout(clearText, 2000)
  document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  $('#info').append('Password changed.')
  setTimeout(clearText, 2000)
  document.getElementById('change-password-form').reset()
}

const changePasswordError = function (changePasswordError) {
  $('#info').append("That didn't work.")
  setTimeout(clearText, 2000)
  document.getElementById('change-password-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  console.log('sign out success')
  $('#info').append('Bye. Come again!')
  setTimeout(clearText, 2000)
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const signOutError = function (signOutError) {
  console.log('sign out fail')
  $('#info').append("That didn't work.")
  setTimeout(clearText, 2000)
}

const createGameSuccess = function (createGameSuccess) {
  $('#info').append('Make a Move.')
  setTimeout(clearText, 2000)
  store.game = createGameSuccess.game
  console.log('createGameSuccess game = ' + createGameSuccess.game)
}

const createGameError = function (newGameError) {
  $('#info').append('Error creating game.')
  setTimeout(clearText, 2000)
}

const updateGameSuccess = function () {
  console.log('game updated')
}

const updateGameFail = function () {
  console.log('game update failed')
}

const clearText = function () {
  console.log('clear text function')
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
  updateGameFail
}
