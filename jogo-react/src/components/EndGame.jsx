import "./EndGame.css"

const EndGame = ({jogarNovamente}) => {

  return (
    <div>
        <h1>Jogo</h1>
        
        <button onClick={jogarNovamente}> Jogar Novamente</button>
    </div>
  )
}

export default EndGame