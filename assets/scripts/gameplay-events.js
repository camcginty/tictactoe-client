'use strict'

const store = require('../scripts/store.js')
const api = require('./api.js')

const players = [
  {
    loggedIn: false,
    isTurn: false
  },
  {
    loggedIn: false,
    isTurn: false
  }
]

const createPlayer = function () {
  if (players[0].email === undefined) {
    players[0].email = store.user.email
    if (players[0].loggedIn === false) {
      players[0].loggedIn = true
    }
  } else if (players[1].email === undefined) {
    players[1].email = store.user.email
    if (players[1].loggedIn === false) {
      players[1].loggedIn = true
    }
    if (players[0].isTurn === false) {
      players[0].isTurn = true
    }
  }
}

let id = 0

const gameboard = ['', '', '', '', '', '', '', '', '']

const playHere = function () {
  id = this.id
  if (players[0].loggedIn === true && players[0].isTurn === true) {
    if (isValidMove(id) === true) {
      gameboard[this.id] = 'x'
      document.getElementById(id).textContent = 'X'
      winLose()
    }
  } else if (players[0].loggedIn === true && players[1].isTurn === true) {
    if (isValidMove(id) === true) {
      gameboard[this.id] = 'o'
      document.getElementById(id).textContent = 'O'
      winLose()
    }
  } else {
    $('#info').append("Can't let you do that. Are you logged in? Have you pressed start game? Is that space already taken?")
    setTimeout(clearText, 3000)
  }
}

const isValidMove = function (id) {
  if (gameboard[id] === '') {
    return true
  } else if (gameboard[id] !== '') {
    $('#info').append("Can't let you do that. Are you logged in? Have you pressed start game? Is that space already taken?")
    setTimeout(clearText, 3000)
    return false
  }
}

const winLose = function () {
  if (gameboard[0] !== '' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
    sayWinner()
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    sayWinner()
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
    sayWinner()
  } else if (gameboard[1] !== '' && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
    sayWinner()
  } else if (gameboard[2] !== '' && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]) {
    sayWinner()
  } else if (gameboard[2] !== '' && gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]) {
    sayWinner()
  } else if (gameboard[3] !== '' && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
    sayWinner()
  } else if (gameboard[6] !== '' && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
    sayWinner()
  } else {
    checkTie()
  }
}

const checkTie = function () {
  if (gameboard.every(i => i !== '')) {
    $('#info').append('Oh no! You tied. That means the enemy wins :(')
    setTimeout(clearText, 2500)
    endGame()
  } else {
    nextTurn()
  }
}

const nextTurn = function () {
  if (players[0].isTurn === true) {
    const index = id
    const value = 'x'
    const gameOver = false
    api.updateGame(index, value, gameOver)
  } else if (players[1].isTurn === true) {
    const index = id
    const value = 'o'
    const gameOver = false
    api.updateGame(index, value, gameOver)
  }
  if (players[0].isTurn === true) {
    players[0].isTurn = false
    players[1].isTurn = true
  } else if (players[0].isTurn === false) {
    players[0].isTurn = true
    players[1].isTurn = false
  }
}

const sayWinner = function () {
  if (players[0].isTurn === true) {
    $('#info').append("The X's saved the princess!")
    setTimeout(clearText, 2500)
  } else if (players[1].isTurn === true) {
    $('#info').append("The O's saved the princess!")
    setTimeout(clearText, 2500)
  }
  endGame()
}

const endGame = function () {
  if (players[0].isTurn === true) {
    const index = gameboard[id]
    const value = 'x'
    const gameOver = true
    api.updateGame(index, value, gameOver)
  } else if (players[1].isTurn === true) {
    const index = gameboard[id]
    const value = 'o'
    const gameOver = true
    api.updateGame(index, value, gameOver)
  }
  players[0].isTurn = false
  players[1].isTurn = false
}

const clearBoard = function () {
  for (let i = 0; i < gameboard.length; i++) {
    gameboard[i] = ''
    document.getElementById(i).textContent = ''
  }
}

const clearText = function () {
  document.getElementById('info').textContent = ''
}

module.exports = {
  playHere,
  createPlayer,
  players,
  clearBoard,
  endGame
}
