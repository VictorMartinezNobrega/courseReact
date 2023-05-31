import './App.css';
import MyComponents from './components/MyComponents';
import MyTittle from './components/MyTittle';

function App() {

  const type = true;

  return (
    <div className="App">
      {/*CSS global */}
      <h1>
        React com CSS - h1 do app
      </h1>
      {/*CSS componente */}
      <MyComponents />
      <p>##############################</p>
      {/* Classe dinamica*/}
      <p className={
        type ? "typewhite" : "typedark"
      }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam quasi. Voluptas voluptatem explicabo nemo eos
        <br />delectus reprehenderit tempora aspernatur vero. Hic et pariatur modi deleniti iste a accusamus quia.</p>
      <p>############## IMPORTANTE ESSE ################</p>
      <MyTittle />
      <h4 className='tittle_master'>Titulo master teste</h4>
    </div>
  );
}

export default App;
