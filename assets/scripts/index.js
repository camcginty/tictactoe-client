'use strict'
const authEvents = require('./events.js')
const gamePlayEvents = require('./gameplay-events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#new-game').on('click', authEvents.onCreateGame)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new.game').on('click', gamePlayEvents.createGame)
  $('.box').on('click', gamePlayEvents.playHere)
})

// to-do:
// making updates to api on each turn?
// access game stats from api
// only show relevant forms based on log-in state
// make text feedback spot to display info and then gets hidden after time
// change isTurn function to just keeping track of odd/even turns?
// clear sign-in text after a specified amount of time
// make boxes not change position when screen size changes
// get x's to be black and o's to be white
// or
// change box background color to white to highlight win

// fixed:
