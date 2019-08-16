const displayPuzzle = document.querySelector('#display-puzzle')
const guesses = document.querySelector('#guesses')
const statusMessage = document.querySelector('#status-message')
const game1 = new Hangman('Java Script', 3)

// Render DOM elements
displayPuzzle.textContent = game1.getPuzzle()
statusMessage.textContent = game1.getStatusMessage()


window.addEventListener('keypress', function(e) {

  // Every time you type, a unique character is added to guessed letters
  game1.makeGuess(e.key)

  // Check for the current status of the game
  game1.checkStatus()

  // Rerender the DOM elements every time user makes a guess
  displayPuzzle.textContent = game1.getPuzzle()
  guesses.textContent = removeWhiteSpaces(game1.guessedLetters)
  statusMessage.textContent = game1.getStatusMessage()
})

