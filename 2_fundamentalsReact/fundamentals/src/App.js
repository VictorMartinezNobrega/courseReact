import './App.css';
//importar css
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1 className="hello" >Hello-There</h1> {/*General Kenobi */}
      <FirstComponent />
      <TemplateExpression />
      <br />
      <Challenge />
    </div>
  );
}

export default App;
