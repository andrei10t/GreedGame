var scores, roundScore, activePlayer, gamePlaying, lastdice
init()

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1
    var dice2 = Math.floor(Math.random() * 6) + 1
    var diceDOM1 = document.getElementById('dice-1')
    var diceDOM2 = document.getElementById('dice-2')

    diceDOM1.style.display = 'block'
    diceDOM2.style.display = 'block'
    diceDOM1.src = 'Images/dice-' + dice1 + '.png'
    diceDOM2.src = 'Images/dice-' + dice2 + '.png'
    /*
    if (lastdice === 6 && dice === 6) {
      scores[activePlayer] = 0
      nextPlayer()
    }
    */
    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScore
    } else {
      nextPlayer()
    }
    // lastdice = dice
  }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent =
      scores[activePlayer]

    var input = document.querySelector('.final-score').value
    var winScore
    if (input) {
      winScore = input
    } else {
      winScore = 100
    }

    if (scores[activePlayer] >= winScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
      document.getElementById('dice-1').style.display = 'none'
      document.getElementById('dice-2').style.display = 'none'
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner')
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active')
      gamePlaying = false
    } else {
      nextPlayer()
    }
  }
})

function nextPlayer () {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
  roundScore = 0
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.getElementById('dice-1').style.display = 'none'
  document.getElementById('dice-2').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)

function init () {
  gamePlaying = true
  scores = [0, 0]
  roundScore = 0
  activePlayer = 0
  document.getElementById('dice-1').style.display = 'none'
  document.getElementById('dice-2').style.display = 'none'
  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.querySelector('#name-0').textContent = 'Player 1'
  document.querySelector('#name-1').textContent = 'Player 2'
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.add('active')
}
