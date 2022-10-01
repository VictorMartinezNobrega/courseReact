import './App.css';
//importar css
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpression from './components/TemplateExpression';

function App() {
  return (
    <div className="App">
      <h1 className="hello" >Hello-There</h1> {/*General Kenobi */}
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
    </div>
  );
}

export default App;
