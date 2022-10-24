import "./EndGame.css"

const EndGame = ({jogarNovamente, pontuacao}) => {

  return (
    <div>
        <h1>Poxa! Suas tentativas acabaram.</h1>
        <h2>Sua pontuação foi: <span>{pontuacao}</span></h2>
        <button onClick={jogarNovamente}> Jogar Novamente</button>
    </div>
  )
}

export default EndGame