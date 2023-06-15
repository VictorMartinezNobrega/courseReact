import React from 'react';
import './index.scss';

const Index = ({retry}) => {
  return (
    <div>
      <h1>Game Over ;-;</h1>
      <button onClick={retry}>Voltar para inicio</button>
    </div>
  )
}

export default Index;