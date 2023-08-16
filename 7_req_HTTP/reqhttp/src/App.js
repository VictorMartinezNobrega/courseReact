import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch'; //4 importa nosso hook !!!!!!

function App() {

  const url = "http://localhost:3000/products";

  //const [products, setProducts] = useState([]); //não utiliza por conta do modelo novo hook custom

  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');

  //4 - recebendo os dados do back de uma maneira alternativa da comentada abaixo
  const { data: itens, httpConfig } = useFetch(url);
  //importando o data que veio do nosso hook custom com a url passada quando rodou a var
    //renoamando o data para itens para utiliza-lo mais diretamente na aplicação

  //resgatando dados //4- comentado para ultilizar um hook custom feito por mim, para puxar os dados auto

  /*useEffect(() => {
    //async pesquisar sobre
    async function fetchData() {
    const res = await fetch(url);//res geralmente se refere a respota do banco, await espera que p fecth pegue os dados passados pela URL
                      //transforma resultado da var em json
    const data = await res.json();

    setProducts(data);//manda os dados para o products pelo set
  };

  fetchData();

  }, []);*/
  
  //add produtos

  const handleSubmit = async (e) => { //function para enviar os dados para "db"
    e.preventDefault()

    if(name === "" || price === "") {
      console.log("E PORA")
      return
    }

    const product = {
      name, //name: name - quando valor da chave é o mesmo do valor, pode se por somente o nome e ja se iguala as variaveis state
      price,
    }

      //requisição
   /* const res = await fetch(url, { //esse é diferente pq vamos ter um POST, GET é criado automaticamente como no outro exemplo
        method: "POST", //metodo que vamos usar
        headers: {  //podemos aqui enviar para a requisição que tipo de conteudo estamos manipulando
          "Content-Type" : "application/json" //no caso enviando um JSON
        },
        body: JSON.stringify(product), //corpo da requisição, json é um objeto js em texto puro, com isso tranformo meu obj (product) em json
    })//utilizando a url como se fosse o get, mudandopara post, falando tipo que vamos mandar, tranformando oque vamos enviar em json

    console.log(product)

    //3 carregamento dinamico

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    //5 - Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");

  }
  

  return (
    <div className="App">
      <h1>Hello there</h1>
      <ul>
        {/*Necessario essa validação pois os itens vem nulo primeiramente, map só acontece quando 'itens' for preechido pelos dados passados na url*/}
        {itens && itens.map((product) => ( //imprime normal usando o state com o dado
          <li key={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do produto
            <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            Preço
            <input type='number' value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          <input type='submit' value={'Criar'}></input>
          <p id='alert'>*Insira dados corretos</p>
        </form>
      </div>
    </div>
  );
}

export default App;
