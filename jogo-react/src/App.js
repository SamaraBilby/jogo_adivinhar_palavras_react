
//css
import "./App.css";

//react
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/Words";

//components
import TelaInicial from "./components/TelaInicial";


const nivel = [
  { id: 1, nome: "start" },
  { id: 2, nome: "game" },
  { id: 1, nome: "end" },
]

function App() {

  const [nivelJogo, setNivelJogo] = useState(nivel[0].name);

  return (
    <div className="App">
      
     {nivelJogo === "start" && <TelaInicial />}
     {nivelJogo === "game" && <TelaInicial />}
     {nivelJogo === "end" && <TelaInicial />}

    </div>
  );
}

export default App;
