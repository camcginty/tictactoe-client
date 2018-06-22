'use strict'
const authEvents = require('./events.js')
const gamePlayEvents = require('./gameplay-events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.pre-sign-in').show()
  $('.signed-in').hide()
  $('#new-game').on('click', authEvents.onCreateGame)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new.game').on('click', gamePlayEvents.createGame)
  $('#get-games').on('click', authEvents.onGetGames)
  $('.box').on('click', gamePlayEvents.playHere)
})
