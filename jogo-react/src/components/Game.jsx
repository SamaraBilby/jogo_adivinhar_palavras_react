import './Game.css';


const Game = ({verificarLetra, escolhaPalavra, escolhaCategoria, escolhaLetras, letrasAdivinhadas, letrasErradas, tentativas, pontuacao}) => {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="dica">
        Dica: <span>{escolhaCategoria}</span>
      </h3>
      <p>Você ainda tem {tentativas} tentativas</p>
      <div className="containerPalavra">
        {escolhaLetras.map((letra, i)=>(
            letrasAdivinhadas.includes(escolhaLetras) ? (<span key={i} className="letra">{letra}</span>) : (<span key={i} className="quadradoBranco"></span>)
        ))}
      </div>
      <div className="containerLetra">
        <p>Tente advinhar uma letra da palavra</p>
        <form>
            <input type="text" name="letra" maxLength={1} required/>
            <button>Jogar</button>
        </form>
      </div>
      <div className="containerLetrasErradas">
          <p>Letras já utilizadas</p>
          {letrasErradas.map((letra,i)=>
            <span key={i}>{letra}, </span>
          )}
      </div>
      
    </div>
  )
}

export default Game