import './App.css';
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
    </div>
  );
}

export default App;
