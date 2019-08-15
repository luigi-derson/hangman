class Hangman {
  constructor(word, attemps) {
    this.word = word.toLowerCase().split('')
    this.attemps = attemps
    this.guessedLetters = []
  }
}

Hangman.prototype.makeGuess = function(character) {

  character = character.toLowerCase()
  const isUnique = !this.guessedLetters.includes(character)
  const isBadGuess = !this.word.includes(character)

  if (isUnique) {
    this.guessedLetters.push(character)
  }

  if (isUnique && isBadGuess) {
    this.attemps--
  }
}


Hangman.prototype.getPuzzle = function() {
  let puzzle = ''

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += ' _ '
    }
  })

  return puzzle;
}

const removeWhiteSpaces = (array) => array.filter(item => item !== ' ')
