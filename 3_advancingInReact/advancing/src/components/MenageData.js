import { useState } from 'react'; //importando useState

function MenageData() {
    let number = 10;
    console.log(number);

  //num é a variável/ setNum como vai chamar para funcionar o state/ useState(valor da variavel num)
    let [num, setNum] = useState(10);
    console.log("num agora é " + num);

  return (
    <div>
        <div>
            <p>Seu numero é: {number}</p>
            <button onClick={() => {number = 15}} >Mudar variavel</button>
        </div>
        <div>
            <p>Valor do state: {num}</p>
        {/* ao clicar roda function ja no click, chamando setNum(atribuindo novo valor a variavel num)*/}
            <button onClick={() => setNum(20)} >Mudar num</button>
        </div>
    </div>
  )
}

export default MenageData;