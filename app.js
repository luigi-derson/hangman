const game1 = new Hangman('Java Script', 3)
console.log(game1.getPuzzle())
console.log(game1.attemps)

const displayPuzzle = document.querySelector('#display-puzzle')
displayPuzzle.textContent = game1.getPuzzle()

const guesses = document.querySelector('#guesses')

const attempsRemaining = document.querySelector('#attemps-remaining')
attempsRemaining.textContent = game1.attemps

window.addEventListener('keypress', function(e) {
  game1.makeGuess(e.key)
  displayPuzzle.textContent = game1.getPuzzle()
  guesses.textContent = removeWhiteSpaces(game1.guessedLetters)
  const attempsRemaining = document.querySelector('#attemps-remaining')
  attempsRemaining.textContent = game1.attemps
})

