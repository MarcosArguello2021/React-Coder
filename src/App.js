import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Marcos Argüello React app <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Perfil GitHub"
          href="https://github.com/MarcosArguello2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          Perfil GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
