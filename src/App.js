import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CodeJEE</p>
        <a
          className="App-link"
          href="https://opensource.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Learning
        </a>
      </header>
    </div>
  );
}

export default App;
