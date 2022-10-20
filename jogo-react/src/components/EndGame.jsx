import "./EndGame.css"

const EndGame = ({jogarNovamente}) => {

  return (
    <div>
        <h1>Jogo</h1>
        
        <button onClick={jogarNovamente}>Finalizar Jogo</button>
    </div>
  )
}

export default EndGame