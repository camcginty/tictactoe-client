'use strict'

const boxNum = require('./events.js')

const createPlayer = function (name, gameMarker, loggedIn, isTurn, turnNum, winRecord) {
}
  const player1 = {
    name: 'Billy',
    GameMarker: 'x',
    loggedIn: true,
    isTurn: true,
    turnNum: 0,
    winRecord: 0
  }

// const player1 = createPlayer('Billy', 'x', true, true, 0, 0)
const player2 = createPlayer('Jules', 'o', true, false, 0, 0)
// onSignIn if const player = empty, assign as player1 (x)
// onSignIn if const player = 1, assign as player2 (o)
// onsignIn change loggedIn Boolean value to true

// turn = Boolean, changed by function
// const player1 = createPlayer(data.email, 'gameMarker', 'loggedIn', 'turn', 'winRecord')

// onSignOut change loggedIn boolean value to false

// player1.isTurn =
// player1.turnNum === 0 || player2.turnNum === player1.turnNum ? player1.isTurn === true && player2.isTurn === false : player1.isTurn === false && player2.isTurn === true

const gameboard = []

const checkBoard = function () {
  if (player1.turnNum >= 3) {
    winLose()
  } else {
    nextTurn()
  }
}

const winLose = function () {
  if (gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
    endGame()
    return 'Player 1 wins'
  } else if (gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    return 'Player 1 wins'
  } else if (gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
    return 'Player 1 wins'
  } else if (gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
    return 'Player 1 wins'
  } else if (gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]) {
    return 'Player 1 wins'
  } else if (gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
    return 'Player 1 wins'
  } else if (gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
    return 'Player 1 wins'
  } else {
    checkTie()
  }
}

const checkTie = gameboard.every((space) => {
  return space !== 'box'
})

const endGame = function (checkTie) {
  if (checkTie === true) {
    player1.isTurn = false
    player2.isTurn = false
  }
}

const nextTurn = function (checkTie) {
  if (checkTie === false) {
    player1.turnNum++
    player1.isTurn = false
  }
}

// const validateMove = function () {
// for (let i = the one they click??)
// if (gameboard.row[i] === box) {
// invoke change function
// }

// const placeMarker = function () {
//     if (gameboard.row[i] === player.winMarker) {
//       gameboard.rowOne[0] = 'x'
//     }
// }
// Turn function. what happens during turn? click=patch to update board state?
// const takeTurn = function () {
// check if space is available
// change available space to gameMarker
// only choose one space!
//   if (playerX.turnNum === 0) {
//     $('.box').on('click', check, change)
//     playerX.turnNum++
//   } else if (playerX.turnNum > playerO.turnNum) {
//     $('.box').on('click', change)
//   }
// }

// if/else statement to determine win
//   const checkWin = function () {
//     if (player1.turn >= 3) {
//
//     }
// }
// })

module.exports = {
  checkBoard,
  nextTurn,
  player1
}
