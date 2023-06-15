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

const guessesQtd = 3;//numero de chances

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]); //letras advinhadas
  const [wrongLetters, setWrongLetters] = useState([]);   //letras erradas
  const [guesses, setGuesses] = useState(guessesQtd);    //chances
  const [score, setScore] = useState(0);    //pontuação

  //escolhendo a palavra aleatória de uma categoria aleatória
  const pickWordAndCategory = useCallback(() => {
    //definindo oque é categoria, são as chaves do objeto words com a const virando array com todas as chaves de categorias
    const categories = Object.keys(words);
    //uma categoria aleatória
    //category = definindo no colchetes o index do array sendo inteiro/floor e nele sendo aleatorio * quant/length de keys de categories
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //uma palavra aleatória
    //word = palavras da categoria aleatoria de cima, no colchetes define aleatoriamente o index do array sendo inteiro/floor 
    //e nele sendo aleatorio * quant/length de keys de categories
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);
    //retorna palavra e categoria
    return { word, category }
  }, [words]);

  //startando o jogo
  const startGame = useCallback(() => {
    //limpando as letras do quadro
    clearLetterStates(); //zera as letras sempre que reinicia ou inicia o jogo
    //pegando palavra and pegando categoria
    const { word, category } = pickWordAndCategory(); //recebe aqui as palavras retornadas
    //criando array de letras da palavra escolhida
    let wordsLetters = word.split("");
    //pegando cada item/letra do array acima e colocando para minuscula
    wordsLetters = wordsLetters.map((l) => l.toLowerCase());
    //fill states
    setPickedWord(word);
    setLetters(wordsLetters);
    setPickedCategory(category);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //processando entrada de letras
  const verifyLetter = (letter) => {
    //normalizando letra recebida para minuscula
    const normalizedLetter = letter.toLowerCase();
    //check if letter has already been utilized
    //se no letras acertadas e letras erradas tem a letra digitada, retorna
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }
    //push guessed letter or remove a chance
    //se ar
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // checagem de condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    console.log('.')
    if (letters.length === 0) {
      return;
    }
    //condicao de vitoria
    if (guessedLetters.length === uniqueLetters.length) {
      //add pontuacao
      setScore((actualScore) => actualScore += 100);
      //recomecar o jogo
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //  se as tentativas termanaram
  //ele monitora algum dado, tendo uma função que será executada toda vez que esse dado for alterado
  useEffect(() => {
    //se as chances forem menores ou igual a 0
    if (guesses <= 0) {
      clearLetterStates();//função só vai executar e limpar os states se a condição if rolar
      //estagio do jogo será alterado para 2 ou seja, fim
      setGameStage(stages[2].name)
    }
  }, [guesses]/*Dado que quer monitorar*/);

  //voltando jogo ao inicio
  const retry = () => {

    setScore(0);  //quando jogo voltar ao inicio será pontuação
    setGuesses(guessesQtd); //e as tentativas voltam a ser 3
    setGameStage(stages[0].name);//quando função for chamada no gameOver, muda estagio do game para inicio
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StarScreen startGame={startGame} />}
      {gameStage === 'game' && <Game //aula 77 - precisa dos parenteses?
        verifyLetter={verifyLetter}
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />
      }
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;