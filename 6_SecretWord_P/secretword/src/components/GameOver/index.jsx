import React from 'react';
import './index.scss';

const Index = ({retry, score}) => {
  return (
    <div className='endMaster'>
      <h1 className='end'>Game Over ;-;</h1>
      <h2 className='points'>Sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Voltar para inicio</button>
    </div>
  )
}

export default Index;