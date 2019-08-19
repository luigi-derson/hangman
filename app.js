const displayPuzzle = document.querySelector('#display-puzzle')
const guesses = document.querySelector('#guesses')
const statusMessage = document.querySelector('#status-message')
let game1

window.addEventListener('keypress', (e) => {
  // Every time you type, a unique character is added to guessed letters
  game1.makeGuess(e.key)
  // Check for the current status of the game
  game1.checkStatus()
  render()
})

const render = () => {
  displayPuzzle.textContent = game1.puzzle
  guesses.textContent = removeWhiteSpaces(game1.guessedLetters)
  statusMessage.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/* getPuzzle('2').then((puzzle) => console.log(puzzle))
.catch((error) => console.log(`Error: ${error}`)) */

/* getCountry('ES').then((country) => console.log(`Country name: ${country.name}`))
.catch((error) => console.log(`Error: ${error}`)) */

//getCurrentCountry().then((country) => console.log(country.name)).catch((error) => console.log(error))