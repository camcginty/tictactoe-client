
const createPlayer = function (name, gameMarker, loggedIn, isTurn, turnNum, winRecord) {
  const player = {
    Email: name,
    GameMarker: gameMarker,
    loggedIn: loggedIn,
    isTurn: isTurn,
    turnNum: turnNum,
    winRecord: winRecord
  }
  return player
}
// loggedIn = Boolean, changed by onSignIn & onSignOut functions
// turn = Boolean, changed by
// const playerX = createPlayer(data.email, 'gameMarker', 'loggedIn', 'turn', 'winRecord')

const gameboard = {
  rowOne: ['box', 'box', 'box'],
  rowTwo: ['box', 'box', 'box'],
  rowThree: ['box', 'box', 'box']
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
// ternary statement to determine turn
// playerX.turnNum >= 0 && playerO.turnNum === playerX.turnNum ? playerX.isTurn === true && playerO.isTurn === false : playerX.isTurn === false && playerO.isTurn === true

// if/else statement to determine win
//   const checkWin = function () {
//     if (playerX.turn >= 3) {
//
//     }
// }
// })
