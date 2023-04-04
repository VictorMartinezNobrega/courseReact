import './App.scss';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import City from './assets/city.jpg';
import CondiacionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  const names = [
    { name: "Luke", cargo: "Jedi" },
    { name: "Leia", cargo: "Senadora" }
  ];
  const [userName] = useState("Anakin Skywalker");

  const cars = [
    { id: 1, brand: "Bmw", color: "Azul", newCar: false, km: 63560 },
    { id: 2, brand: "Lada", color: "Branco", newCar: false, km: 180750 },
    { id: 3, brand: "Kia", color: "Preto", newCar: false, km: 1560 },
    { id: 4, brand: "Toyota", color: "Prata", newCar: true, km: 0 },
    { id: 5, brand: "Opel", color: "Vermelho", newCar: false, km: 120543 },
  ];

  return (
    <div className="App">
      <div className='Space'>
        {/** -----------Imagem em public */}
        <div>
          <img width={"100px"} src="/img1.jpg" alt="Bela paisagem" />
        </div>
        {/** ----------Imagem com assets */}
        <img width={"100px"} src={City} alt="Bela Cidade" />
        <ManageData />
        <ListRender />
      </div>
      <div className='Space2' >
        <div>
          <CondiacionalRender />
          <p>#################################</p>
          {/*----------------Importa o prop aqui*/}
          <ShowUserName jedi={userName} names={names} />
          <p>#################################</p>
          {/*----------------Destructuring props jeito mais usadopor aí*/}
          <CarDetails brand="Mazda" km={45000} color="Vermelho" newCar={false} />
          {/*----------------Reaproveitamento */}
          <CarDetails brand="Lexus" km={0} color="Vermelho" newCar={true} /> {/*aqui em cima */}
          <CarDetails brand="Subaru" km={140000} color="Vermelho" newCar={false} />
          <p>#################################</p>
          {/*----------------Fragment */}
          <Fragment propFragment={'Teste'}/>
        </div>
        <div>
          {/*----------------Loop em array de objetos */}
          {cars.map((car) => (
            //Pega o array. map meio que nome muda pra car
            //imprime o componente fazendo um loop com todos os valores do novo array car passando como se fosse props utilizando .oque tem nele
            //Imprime varias vezes sem precisar faazer varios como de cima
            <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
          ))}
        </div>
      </div>
      <div>
        <Container maisConteudo={'acima da média'}>
          <p>Conteudo baum</p>
          <p>e do melhor</p>
        </Container>
        <p>-----------</p>
        <Container maisConteudo={'Teste2'}>
          <p>Conteudo divino</p>
          <p>pai ta on</p>
        </Container>
      </div>
    </div>
  );
}

export default App;
