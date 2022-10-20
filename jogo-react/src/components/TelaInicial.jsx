import './TelaInicial.css';

const TelaInicial = ({iniciarJogo}) => {

  return (
    <div className="inicio">
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para iniciar o jogo!</p>
        <button onClick={iniciarJogo}>Iniciar</button>
    </div>
  )
}

export default TelaInicial