import logo from './logo.svg';
import './App.css';

console.log('hola gente');

//Console log permite ver prints en la consola, poner información que no afecta en la web, asimismo va mostrando los errores. Sirve para hacer cierto debug, revisar de qué manera llega la información

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
