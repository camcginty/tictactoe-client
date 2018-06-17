'use strict'

const store = require('../scripts/store.js')
const api = require('./api.js')

const players = [
  {
    name: 'player_x',
    email: undefined,
    gameMarker: 'X',
    loggedIn: false,
    isTurn: false,
    winRecord: 0
  },
  {
    name: 'player_o',
    email: undefined,
    gameMarker: 'O',
    loggedIn: false,
    isTurn: false,
    winRecord: 0
  }
]
//  is this block necessary?
// const updateBoard = function () {
//   if (players[0].isTurn === false && players[1].isTurn === false) {
//     store.game.data['over'] = false
//   }
// }

const createPlayer = function () {
  if (players[0].email === undefined) {
    players[0].email = store.user.email
    // document.querySelector('.lfg').textContent = 'Need Another Player'
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

const gameboard = ['', '', '', '', '', '', '', '', '']

const playHere = function () {
  const id = this.id
  if (players[0].loggedIn === true && players[0].isTurn === true) {
    console.log("logged in. player_x's turn")
    if (isValidMove(id) === true) {
      gameboard[this.id] = 'x'
      document.getElementById(id).textContent = 'X'
      console.log(gameboard)
      // updateBoard()
      // console.log(store.game)
      winLose()
    }
  } else if (players[0].loggedIn === true && players[1].isTurn === true) {
    console.log("player_o's turn")
    if (isValidMove(id) === true) {
      gameboard[this.id] = 'O'
      document.getElementById(id).textContent = 'O'
      console.log(gameboard)
      winLose()
    }
  }
}

const isValidMove = function (id) {
  if (gameboard[id] === '') {
    console.log('this is a valid move')
    return true
  } else if (gameboard[id] !== '') {
    console.log('not a valid move')
    return false
  }
}

const winLose = function () {
  if (gameboard[0] !== '' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
    endGame()
    console.log('Win')
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    endGame()
    console.log('win')
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
    endGame()
    console.log('win')
  } else if (gameboard[1] !== '' && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
    endGame()
    console.log('win')
  } else if (gameboard[2] !== '' && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]) {
    endGame()
    console.log('win')
  } else if (gameboard[3] !== '' && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
    endGame()
    console.log('win')
  } else if (gameboard[6] !== '' && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
    endGame()
    console.log('win')
  } else {
    console.log('no winner yet')
    checkTie()
  }
}

const checkTie = function () {
  if (gameboard.every(i => i !== '')) {
    console.log("It's a tie.")
    endGame()
  } else {
    nextTurn()
  }
}

const nextTurn = function () {
  if (players[0].isTurn === true) {
    players[0].isTurn = false
    players[1].isTurn = true
    console.log('player x turn is ' + players[0].isTurn)
    console.log('player o turn is ' + players[1].isTurn)
  } else if (players[0].isTurn === false) {
    players[0].isTurn = true
    players[1].isTurn = false
    console.log('player x turn is ' + players[0].isTurn)
    console.log('player o turn is ' + players[1].isTurn)
  }
  console.log(players[0], players[1])
}

const endGame = function () {
  console.log('endGame function')
  document.getElementById('game-over').value = 'true'
  players[0].isTurn = false
  players[1].isTurn = false
  console.log('player x turn = ' + players[0].isTurn)
  console.log('player o turn = ' + players[1].isTurn)
  // display new game button
}

const clearBoard = function () {
  for (let i = 0; i < gameboard.length; i++) {
    gameboard[i] = ''
    document.getElementById(i).textContent = ''
  }
}

module.exports = {
  playHere,
  createPlayer,
  players,
  clearBoard
}
