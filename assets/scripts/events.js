'use strict'

const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const gameplayEvents = require('./gameplay-events')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

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
  gameplayEvents.players[0].isTurn = true
  authApi.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameError)
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
  onCreateGame
}
