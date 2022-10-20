
//css
import "./App.css";

//react
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/Words";

//components
import TelaInicial from "./components/TelaInicial";
import Game from "./components/Game";
import EndGame from "./components/EndGame";


const nivel = [
  { id: 1, nome: "start" },
  { id: 2, nome: "game" },
  { id: 3, nome: "end" },
]

function App() {

  const [nivelJogo, setNivelJogo] = useState(nivel[0].name);

  const [words] = useState(wordsList);
  console.log(words);

  // ira para tela de inicio do jogo Game.jsx
  const iniciarJogo = () => {
    setNivelJogo(nivel[1].name);
;  }
  // verificaçao da letra

  const verificarLetra = () => {
    setNivelJogo(nivel[2].name);
  }

  // jogar novamente quando finalizar o jogo

  const jogarNovamente = () => {
    setNivelJogo(nivel[1].name)
  }

  return (
    <div className="App">
      
     {nivelJogo === "start" && <TelaInicial iniciarJogo={iniciarJogo}/>}
     {nivelJogo === "game" && <Game verificarLetra={verificarLetra}/>}
     {nivelJogo === "end" && <EndGame jogarNovamente={jogarNovamente}/>}

    </div>
  );
}

export default App;
