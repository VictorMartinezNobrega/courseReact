import './App.scss';
import Myform from './components/Myform';


function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>
      <Myform user={{ name: "Kenobi", email: "kenobi@general.com", bio: "Sou Dev", role: "admin" }} />
    </div>
  );
}

export default App;
