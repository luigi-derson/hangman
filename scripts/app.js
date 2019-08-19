let game1

const displayPuzzle = document.querySelector('#display-puzzle')
const guesses = document.querySelector('#guesses')
const statusMessage = document.querySelector('#status-message')
const wordsSelector = document.querySelector('#num-words')
wordsSelector.value = 0

let numberOfWords = 1

window.addEventListener('keypress', (e) => {
  // Every time you type, a unique character is added to guessed letters
  game1.makeGuess(e.key)
  // Check for the current status of the game
  game1.checkStatus()
  render()
})

wordsSelector.addEventListener('change', (e) => {
  numberOfWords = e.target.value
  startGame()
})

const render = () => {
  displayPuzzle.innerHTML = ''
  guesses.textContent = removeWhiteSpaces(game1.guessedLetters).join('-')
  statusMessage.textContent = game1.statusMessage

  game1.puzzle.split('').forEach((letter) => {
    const ch = document.createElement('span')
    ch.textContent = letter
    displayPuzzle.appendChild(ch)
  })

}

const startGame = async () => {
  const puzzle = await getPuzzle(numberOfWords)
  game1 = new Hangman(puzzle, randomAttemps(puzzle))
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

const randomAttemps = (word) => {
  let random
  if(word.length < 10) {
    random = Math.floor(Math.random() * (7-4) + 4)
  } else if (word.length >= 10 && word.length < 16) {
    random = Math.floor(Math.random() * (10-6) + 6)
  } else {
    random = Math.floor(Math.random() * (11-7) + 7)
  }

  return random
}

startGame()

/* getPuzzle('2').then((puzzle) => console.log(puzzle))
.catch((error) => console.log(`Error: ${error}`)) */

/* getCountry('ES').then((country) => console.log(`Country name: ${country.name}`))
.catch((error) => console.log(`Error: ${error}`)) */

//getCurrentCountry().then((country) => console.log(country.name)).catch((error) => console.log(error))
