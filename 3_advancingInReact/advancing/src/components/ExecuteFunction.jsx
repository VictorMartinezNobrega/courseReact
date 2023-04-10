import React from 'react';

const ExecuteFunction = ({showProp}) => {
  return (
    <div>               {/*Sem os () pq se n executa quando carregar o codigo */}
        <button onClick={showProp}>Mostrar mensagem do componete pai</button>
    </div>
  )
}

export default ExecuteFunction;