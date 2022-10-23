
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

  const [nivelJogo, setNivelJogo] = useState(nivel[0].nome);

  const [words] = useState(wordsList);
  
  //Escolhendo palavras e categorias de forma aleatória
  const [escolhaPalavra, setEscolhaPalavra] = useState("");
  const [escolhaCategoria, setEscolhaCategoria] = useState("");
  const [escolhaLetras, setEscolhaLetras] = useState([]);
  
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] =useState([]);
  const [tentativas, setTentativas] =useState(5);
  const [pontuacao, setPontuacao] = useState(0);
 

  
  const escolhaPalavraECategoria = ()=>{
      const categorias = Object.keys(words);
      const categoria = categorias[Math.floor(Math.random()* Object.keys(categorias).length)];

      const palavra = words[categoria][Math.floor(Math.random()* words[categoria].length)];
      

    return {palavra, categoria};
  };

  // ira para tela de inicio do jogo Game.jsx
  const iniciarJogo = () => {

    //função de seleção de categoria e da palavra dentro da categoria
    const {palavra, categoria} = escolhaPalavraECategoria();
    console.log(palavra, categoria);

    //dividindo as palavras em letras;
     let letrasPalavra = palavra.split("");

     letrasPalavra = letrasPalavra.map((l) => l.toLowerCase());
     console.log(letrasPalavra);

     setEscolhaPalavra(palavra);
     setEscolhaCategoria(categoria);
     setEscolhaLetras(letrasPalavra);

     setNivelJogo(nivel[1].nome);
  }
  
  // verificaçao da letra

  const verificarLetra = (letra) => {
    console.log(letra);

    const normalizaLetraUser = letra.toLowerCase();

    // checar se a letra já foi usada

    if(letrasAdivinhadas.includes(normalizaLetraUser) || letrasErradas.includes(normalizaLetraUser)){
      return;
    }
    // colocar a letra adivinhada no painel ou remover a chance.

    if(escolhaLetras.includes(normalizaLetraUser)){
      setLetrasAdivinhadas((atualLetraAdivinhada) => [
        ...atualLetraAdivinhada,normalizaLetraUser,
      ]);
    }
    else{
      setLetrasErradas((atualLetraErrada) =>[
        ...atualLetraErrada,normalizaLetraUser,
      ])
    }
    console.log(letrasAdivinhadas)
    console.log(letrasErradas)
  }

  // jogar novamente quando finalizar o jogo

  const jogarNovamente = () => {
    setNivelJogo(nivel[0].nome)
  }

  return (
    
    <div className="App">
      
     {nivelJogo === "start" && <TelaInicial iniciarJogo={iniciarJogo}/>}

     {nivelJogo === "game" && <Game verificarLetra={verificarLetra} escolhaPalavra={escolhaPalavra} escolhaCategoria = {escolhaCategoria} escolhaLetras={escolhaLetras} letrasAdivinhadas={letrasAdivinhadas} letrasErradas={letrasErradas} tentativas= {tentativas} pontuacao={pontuacao}/>}
     
     {nivelJogo === "end" && <EndGame jogarNovamente={jogarNovamente}/>}

    </div>
  
  );
}

export default App;
