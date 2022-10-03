export default function FooterConcluidos (props){
  return(
      <div className="footer-concluidos ">
        <div className="container-botoes">
        <button onClick={()=> props.naoLembrei()}>Não Lembrei</button>
        <button onClick={()=> props.quaseNaoLembrei()}>Quase não lembrei</button>
        <button onClick={()=> props.zap()}>Zap!</button>
      </div>
          <p>{props.resultado}/{props.tamanho} CONCLUIDOS</p>
      </div>
  )
}