'use strict'

const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const gameplayEvents = require('./gameplay-events')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  gameplayEvents.players[0].loggedIn = true
  gameplayEvents.players[0].isTurn = true
  gameplayEvents.clearBoard()
  authApi.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameError)
}

const onSignOut = function (event) {
  event.preventDefault()
  gameplayEvents.endGame()
  gameplayEvents.clearBoard()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutError)
}

const onGetGames = function () {
  return authApi.getGames()
    .then(authUi.getGamesSuccess)
    .catch(authUi.getGamesError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onGetGames
}
