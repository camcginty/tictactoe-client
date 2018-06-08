'use strict'
const store = require('./store')

const signUpSuccess = function (signUpSuccess) {
  $('#sign-up-form').append('You now have an account.')
}

const signUpError = function (signUpError) {
  $('#sign-up-form').append("That didn't work for some reason...")
}

const signInSuccess = function (signInSuccess) {
  console.log('signed in')
  store.user = signInSuccess.user
}

const signInError = function (signInError) {
  console.log('did not sign in')
}

// const changePasswordSuccess = function (changePasswordSuccess) {
//   console.log('response is', changePasswordSuccess)
// }
//
// const changePasswordError = function (changePasswordError) {
//   console.log('changePasswordError is', changePasswordError)
// }
//
// const signOutSuccess = function (signOutSuccess) {
//   console.log('signOutSuccess is', signOutSuccess)
// }
//
// const signOutError = function (signOutError) {
//   console.log('signOutError is', signOutError)
// }

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError
//   changePasswordError,
//   changePasswordSuccess,
//   signOutSuccess,
//   signOutError
}
