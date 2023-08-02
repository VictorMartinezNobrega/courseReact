import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const url = "http://localhost:3000/products";

  //resgatando dados

  useEffect(() => {
    //async pesquisar sobre
    async function fetchData() {
    const res = await fetch(url);//res geralmente se refere a respota do banco, await espera que p fecth pegue os dados passados pela URL
                      //transforma resultado da var em json
    const data = await res.json();

    setProducts(data);//manda os dados para o products pelo set
  };

  fetchData();

  }, []);
  
  console.log(products);

  return (
    <div className="App">
      <h1>Hello there</h1>
      <ul>
        {products.map((product) => ( //imprime normal usando o state com o dado
          <li key={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>
      <p>{products[1].name} em promoção</p>
    </div>
  );
}

export default App;
