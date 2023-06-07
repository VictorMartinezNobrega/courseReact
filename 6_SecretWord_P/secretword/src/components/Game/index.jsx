import React from 'react';
import './index.scss';

const index = ({verifyLetter}) => {
  return (
    <div>
      <h1>Hello There</h1>

      <button onClick={verifyLetter}>Finalizar jogo</button>

    </div>

  )
}

export default index;