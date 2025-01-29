import { useState } from "react";
import "./App.css";

function App() {
  const [endereco, setEndereco] = useState({});

  function manipularEndereco(e) {
    const cep = e.target.value;
    setEndereco({
      cep,
    });

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json`).then((resposta) =>
        resposta.json().then((dados) => {
          console.log(dados);
          setEndereco((enderecoAntigo) => ({
            ...enderecoAntigo,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
          }));
        })
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Digite o CEP"
          onChange={manipularEndereco}
          style={{ fontSize: "1em", padding: "20px", width: "300px" }}
        />
        <ul style={{ listStyleType: "none", margin: "20px 0", padding: 0 }}>
          <li>CEP: {endereco.cep}</li>
          <li>Rua: {endereco.rua}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
