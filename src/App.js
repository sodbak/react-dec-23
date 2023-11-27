import logo from './logo.svg';
import './App.css';

function App() {
  let name = "olami";
  let num = true;
  let wife = false;
  return (
    <div className="App">
      <h1>life is good</h1>
      <p> i love my {wife ? " wife semiat" : " she is not around"}</p>
      <div>dont kill her {num ? " she is human too" : " let her go"}</div>
    </div>
  );
}

export default App;
