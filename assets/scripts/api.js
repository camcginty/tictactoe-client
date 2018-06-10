'use strict'
const config = require('./config.js')
const store = require('./store')

const signUp = function (data) {
  console.log('api get')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log('got to api file')
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
