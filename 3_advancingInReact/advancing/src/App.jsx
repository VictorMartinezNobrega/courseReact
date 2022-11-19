import './App.scss';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import City from './assets/city.jpg';
import CondiacionalRender from './components/CondicionalRender';

function App() {
  return (
    <div className="App">
      <div className='Space'>
        <h1>Seção 3</h1>
        {/** Imagem em public */}
        <div>
          <img width={"100px"} src="/img1.jpg" alt="Bela paisagem" />
        </div>
        {/** Imagem com assets */}
          <img width={"100px"} src={City} alt="Bela Cidade" />
        <ManageData />
        <ListRender />
      </div>
      <div className='Space2'>
        <CondiacionalRender />
      </div>
    </div>
  );
}

export default App;
