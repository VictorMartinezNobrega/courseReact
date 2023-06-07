import './App.scss';
import StarScreen from './components/StarScreen/index.jsx';
import Game from './components/Game/index.jsx';
import GameOver from './components/GameOver/index.jsx';
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words.jsx';

const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "end" }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {

    //pick a random category 
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);
    //pick a random word 
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return {word, category}
  }

  //startando o jogo
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory();
    //create an array of letters
    let wordsLetters = word.split("")
    wordsLetters = wordsLetters.map((l) => l.toLowerCase())
    console.log(wordsLetters)

    //fill states
    setPickedWord(word);
    setLetters(letters);
    setPickedCategory(category);

    console.log(word,category)
    setGameStage(stages[1].name);
  }
  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //voltando jogo ao inicio
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StarScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
