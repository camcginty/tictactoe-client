'use strict'
const config = require('./config.js')
const store = require('./store')
const ui = require('./ui.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
  console.log('auth.api file')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, gameOver) {
  console.log('got to api.updateGame function')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'games/' + store.game.id,
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': gameOver
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateGame,
  createGame
}
