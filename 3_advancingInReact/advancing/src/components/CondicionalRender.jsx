import { useState } from "react";

const CondiacionalRender = () => {

  const [x] = useState(false);

  const [name, setName] = useState("Bane");

  return (
    <div>
      <h1>Hello there!</h1>
      {/*Um if simples = variavel && = se x for true exiba p*/}
      {x && <p>General Kenobi!!!</p>}
      {/*vem false inverto para true e exibirá o p*/}
      {!x && <p>Sem General Kenobi ;-;</p>}
      <h2>If ternário, Darth Sidious?</h2>
      {name === "Sidious" ? (
        <div>
          <p>O nome é Palpatine</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado nos arquivos Jedi</p>
        </div>
      )}
      <button onClick={() => setName("Sidious")}>Procurar melhor</button>
    </div>
  )
}

export default CondiacionalRender;