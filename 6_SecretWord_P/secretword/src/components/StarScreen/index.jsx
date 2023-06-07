import React from 'react';
import "./index.scss";

const Index = ({startGame}) => {

    return (
        <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo!</button>
        </div>
    )
}

export default Index;