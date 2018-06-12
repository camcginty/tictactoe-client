'use strict'

const store = require('../scripts/store.js')

const players = [
  {
    name: 'player1',
    email: undefined,
    gameMarker: 'X',
    loggedIn: false,
    isTurn: false,
    turnNum: 0,
    winRecord: 0
  },
  {
    name: 'player2',
    email: undefined,
    gameMarker: 'O',
    loggedIn: false,
    isTurn: false,
    turnNum: 0,
    winRecord: 0
  }
]

const createPlayer = function () {
  if (players[0].email === undefined) {
    players[0].email = store.user.email
    if (players[0].loggedIn === false) {
      players[0].loggedIn = true
      if (players[0].isTurn === false) {
        players[0].isTurn = true
      }
    }
  } else if (players[1].email === undefined) {
    players[1].email = store.user.email
    if (players[1].loggedIn === false) {
      players[1].loggedIn = true
    }
  }
}

const gameboard = ['', '', '', '', '', '', '', '', '']

const playHere = function () {
  if (players[0] !== undefined && players[1] !== undefined) {
    if (players[0].isTurn === true) {
      if (gameboard[this.id] === '') {
        gameboard[this.id] = 'x'
        const id = this.id
        document.getElementById(id).textContent = 'x'
        console.log(gameboard)
        players[0].turnNum++
        endTurn()
      } else {
        console.log(false)
        return 'not a legal move'
      }
    } else if (players[1].isTurn === true) {
      if (gameboard[this.id] === '') {
        gameboard[this.id] = 'O'
        const id = this.id
        document.getElementById(id).textContent = 'O'
        console.log(gameboard)
        players[1].turnNum++
        endTurn()
      }
    }
  }
}

const endTurn = function () {
  if (players[0].turnNum >= 3) {
    winLose()
  } else {
    nextTurn()
  }
}

const winLose = function () {
  if (gameboard[0] !== '' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
    endGame()
    console.log('Win')
    return 'Player 1 wins'
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[1] !== '' && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[2] !== '' && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[3] !== '' && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[6] !== '' && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
    endGame()
    console.log('win')
    return 'Player 1 wins'
  } else {
    nextTurn()
  }
}

const checkTie = function () {
  gameboard.some((space) => {
    if (space === '') {
      nextTurn()
    }
  })
}
// function not working correctly. doesn't change turn after.

const nextTurn = function () {
  if (players[0].isTurn === true) {
    players[0].isTurn = false
    players[1].isTurn = true
  } else if (players[1].isTurn === true) {
    players[1].isTurn = false
    players[0].isTurn = true
  }
  console.log(players[0], players[1])
}

const endGame = function () {
  players[0].isTurn = false
  players[1].isTurn = false
}

module.exports = {
  playHere,
  createPlayer
}
