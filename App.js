import React, { useState } from "react";

const words = ["react", "javascript", "coding", "hangman", "frontend"];

function App() {
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrong = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return; // Already guessed
    setGuessedLetters([...guessedLetters, letter]);

    if (!selectedWord.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const renderWord = () => {
    return selectedWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  const checkGameOver = wrongGuesses >= maxWrong;
  const checkWin = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div>
      <h1>Hangman Game</h1>
      <div>{renderWord()}</div>
      <div>Wrong Guesses: {wrongGuesses}</div>
      <div>
        {!checkGameOver && !checkWin ? (
          "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <button key={letter} onClick={() => handleGuess(letter)}>
              {letter}
            </button>
          ))
        ) : checkWin ? (
          <h2>Congratulations! You Won!</h2>
        ) : (
          <h2>Game Over! The word was {selectedWord}</h2>
        )}
      </div>
      <div>
        <h3>Hangman Drawing:</h3>
        {/* Add SVG or div logic for drawing */}
      </div>
    </div>
  );
}

export default App;
