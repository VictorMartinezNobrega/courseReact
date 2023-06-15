import React from 'react';
import './index.scss';
import { useState, useRef } from 'react';

const Index = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null); //faz uma referencia ao componente para fazer oque quiser numa function

  const handleSubmit = (e) => {
    e.preventDefault();//impede recarregamento da pag

    verifyLetter(letter);//chama function que foi passada por prop com o parametro letter adquirido aqui

    setLetter("");//deixa o input sem nada dpois do submit

    letterInputRef.current.focus();//dppois de referenciado faz focar no input mesmo depois dpois do envio do form
  }

  return (
    <div className='game'>
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className='wordContainer'>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Chute uma letra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='letter' 
            maxLength={1} 
            required 
            onChange={(e) => setLetter(e.target.value)} 
            value={letter}
            ref={letterInputRef} //refenciando
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>

  )
}

export default Index;