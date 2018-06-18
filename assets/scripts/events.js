'use strict'

const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const gameplayEvents = require('./gameplay-events')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('sign-up data is ' + data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('sign-in data is ' + data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('token is', store.user.token)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('token is', store.user.token)
  gameplayEvents.players[0].loggedIn = true
  gameplayEvents.players[0].isTurn = true
  console.log('player x logged in = ' + gameplayEvents.players[0].loggedIn)
  console.log("player x's turn = " + gameplayEvents.players[0].isTurn)
  gameplayEvents.clearBoard()
  authApi.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameError)
  console.log('store game token = ' + store.user.token)
}

const onUpdateGame = function () {
  event.preventDefault()
  console.log('events thinks token is ' + store.token)
  console.log('events thinks game id is ' + store.game.id)
  authApi.updateGame()
    .then(authUi.updateGameSuccess)
    .catch(authUi.updateGameFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out button')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
