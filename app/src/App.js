import logo from './cool-knight.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="lichess-link"
          href="https://lichess.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play some chess
        </a>
      </header>
    </div>
  );
}

export default App;
