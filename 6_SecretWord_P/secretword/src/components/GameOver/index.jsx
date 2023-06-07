import React from 'react';
import './index.scss';

const index = ({retry}) => {
  return (
    <div>
      <h1>Game Over ;-;</h1>
      <button onClick={retry}>Voltar para inicio</button>
    </div>
  )
}

export default index;