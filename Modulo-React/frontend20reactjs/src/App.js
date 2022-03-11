import './App.css';

function App(props) {
  return (
    <div className="App">
      <h2>{props.texto.chamada}</h2>
      <p>{props.texto.chamada2}</p>
    </div>
  );
}

export default App;
