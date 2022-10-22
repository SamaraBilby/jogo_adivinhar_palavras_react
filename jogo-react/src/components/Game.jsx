import './Game.css';


const Game = ({verificarLetra}) => {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="dica">
        Dica: <span>Categoria...</span>
      </h3>
      <p>Você ainda tem XXX tentativas</p>
      <div className="containerPalavra">
        <span className='letra'>A</span>
        <span className="quadradoBranco"></span>
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
          <span>a, </span>
          <span>b. </span>
      </div>
      
    </div>
  )
}

export default Game