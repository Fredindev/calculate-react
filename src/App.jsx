import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = parseFloat(altura) / 100; 
    const pesoKg = parseFloat(peso);

    if (alturaMetros > 0 && pesoKg > 0) {
      const imcCalculado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
      
      if (imcCalculado < 18.5) {
        setClassificacao("Abaixo do peso");
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        setClassificacao("Peso normal");
      } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        setClassificacao("Sobrepeso");
      } else {
        setClassificacao("Obesidade");
      }
    } else {
      alert("Por favor, insira valores válidos para altura e peso.");
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC} className="form-container">
        <div className="form-group">
          <label htmlFor="altura">Altura (em cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Exemplo: 170"
          />
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso (em kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Exemplo: 70"
          />
        </div>
        <button type="submit" className="botao-calcular">Calcular IMC</button>
      </form>

      {imc && (
        <div className="resultado-container">
          <h2>Resultado</h2>
          <p>Seu IMC: <strong>{imc}</strong></p>
          <p>Classificação: <strong>{classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;