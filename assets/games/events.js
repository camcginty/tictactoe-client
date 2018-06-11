'use strict'
const gameLogic = require('./base-game.js')
const boxNum = function () {
  console.log(this.id)
  return this.id
}

const Player = function (name, gameMarker, loggedIn, isTurn, turnNum, winRecord) {
}
const player1 = new Player('Billy', 'X', true, true, 0, 0)
const player2 = new Player('Jules', 'o', true, false, 0, 0)

const gameboard = ['', '', '', '', '', '', '', '', '']

const box = document.querySelectorAll('.box')

const playHere = function () {
  const idNum = document.getElementById(this.id)
// chnage text to gameMarker
  console.log(idNum)
  if (gameboard[this.id] === '') {
    console.log('legal move')
    gameboard[this.id] = 'x'
    const id = this.id
    document.getElementById(id).textContent = 'x'
    console.log(gameboard)
    winLose()
  } else {
    console.log(false)
    return 'not a legal move'
  }
}

// const played = gameboard.indexOf('x')
//
// const gamePlay = function (played) {
//   document.querySelectorAll('.box').textContent = gameboard
// }

const checkBoard = function () {
  if (player1.turnNum >= 3) {
    winLose()
  } else {
    nextTurn()
  }
}

const winLose = function () {
  if (gameboard[0] !== '' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
//    endGame()
    console.log('Win')
    return 'Player 1 wins'
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[0] !== '' && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[1] !== '' && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[2] !== '' && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]) {
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[3] !== '' && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
    console.log('win')
    return 'Player 1 wins'
  } else if (gameboard[6] !== '' && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
    console.log('win')
    return 'Player 1 wins'
  // } else {
  //   checkTie()
  }
}

// const checkTie = gameboard.every((space) => {
//   return space !== 'box'
// })
//
// const endGame = function (checkTie) {
//   if (checkTie === true) {
//     player1.isTurn = false
//     player2.isTurn = false
//   }
// }

const nextTurn = function (checkTie) {
  if (checkTie === false) {
    player1.turnNum++
    player1.isTurn = false
  }
}

//
// const idNum = function () {
//   gameboard.findIndex(gameboard => idNum === false)
//   console.log()
// }
//
// // const changeText = function (idNum) {
// //   document.getElementById(idNum).textContent = 'x'
// //   console.log(idNum)
// // }
//
module.exports = {
  playHere,
  boxNum
}
