'use strict'
const store = require('./store')

const signUpSuccess = function (signUpSuccess) {
  $('#sign-up-form').append('You now have an account.')
}

const signUpError = function (signUpError) {
  $('#sign-up-form').append("That didn't work...")
}

const signInSuccess = function (signInSuccess) {
  console.log('signed in')
  store.user = signInSuccess.user
  $('#sign-in-form').append('Welcome, Player')
}

const signInError = function (signInError) {
  console.log("didn't sign in")
  $('#sign-in-form').append('Broken!')
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('changed password')
  $('#change-password-form').append('Password changed')
}

const changePasswordError = function (changePasswordError) {
  console.log("didn't change password")
  $('#change-password-form').append("Didn't work")
}

const signOutSuccess = function (signOutSuccess) {
  console.log('signed out')
  $('#sign-out-form').append('Bye. Come again!')
}

const signOutError = function (signOutError) {
  console.log("didn't sign out")
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
  signOutError
}
