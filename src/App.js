import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("Melk");

  function alterarNome() {
    setNome("Melksedeque de Souza Silva");
    console.log(nome);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{nome}</h1>
        <button onClick={alterarNome}>Mudar para nome completo</button>
      </header>
    </div>
  );
}

export default App;
