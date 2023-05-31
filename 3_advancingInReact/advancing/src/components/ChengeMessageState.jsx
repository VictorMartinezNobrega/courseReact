import React from 'react'

const ChengeMessageState = ({msg}) => {

    let frases = ["Hello There", "Gerenal Kenobi", "High ground"]

  return (
    <div>
        <button onClick={() => msg(frases[0])}>0</button>
        <button onClick={() => msg(frases[1])}>1</button>
        <button onClick={() => msg(frases[2])}>2</button>
    </div>
  )
}

export default ChengeMessageState