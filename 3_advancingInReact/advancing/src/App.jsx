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
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChengeMessageState from './components/ChengeMessageState';
import UserDatails from './components/UserDatails';

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

  function showProp() {
    console.log('Menssagem vindo do componente pai via prop');
  }

  const [message, setMessage] = useState("");
  //modifica a frase com useState e message manda para componente Message modificada
  const handleMessage = (msg) => { //recebe a frase mudada pela função de outro componente
    setMessage(msg);      //seta msg pro useState que é frase mudada
  }

  const peaple = [
    { id: 0, nome: 'Laura', idade: 20, profissão: 'Escritora' },
    { id: 1, nome: 'Alice', idade: 18, profissão: 'Advogada' },
    { id: 2, nome: 'Rebeca', idade: 15, profissão: 'Biologa' },
    { id: 3, nome: 'Victor', idade: 20, profissão: 'dev' },
    { id: 4, nome: 'Pudim', idade: 16, profissão: 'fodao' }
  ];

  return (
    <div className="AppPrime">
      <div className='App'>
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
            <Fragment propFragment={'Teste'} />
          </div>
          <div>
            {/*----------------Loop em array de objetos */}
            {cars.map((car) => (
              //Pega o array. map meio que nome muda pra car
              //imprime o componente fazendo um loop com todos os valores do novo array car passando como se fosse props utilizando .oque tem nele
              //Imprime varias vezes sem precisar faazer varios como de cima
              <CarDetails
                key={car.id} //Quando se usa loop o React precisa de um key!!!!!!!!
                brand={car.brand}
                km={car.km}
                color={car.color}
                newCar={car.newCar}
              />
            ))}
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

        <div className='Space'>
          {/*Execução de função por prop */}
          <ExecuteFunction showProp={showProp} />

          {/*State lift */}
          {/*Esse recebe o texto modificado */}
          <Message message={message} />
          {/*Esse modifica o texto a partir da função handleMessage utilizando useState aqui mesmo */}
          <ChengeMessageState handleMessage={handleMessage} /> {/**recebe msg  */}
        </div>


      </div>
      {/*!!!!!!!!!!!!!!DESAFIO!!!!!!!!!!!!! */}
      <div className='Space'>
        {peaple.map((peaple) => (
          <UserDatails 
            key={peaple.id}
            name={peaple.nome}
            age={peaple.idade}
            work={peaple.profissão}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
