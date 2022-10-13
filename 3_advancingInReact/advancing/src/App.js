import './App.css';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import City from './assets/city.jpg';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/** Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Bela paisagem" />
      </div>
      {/** Imagem com assets */}
        <img src={City} alt="Bela Cidade" />
      <MenageData />
      <ListRender />
    </div>
  );
}

export default App;
