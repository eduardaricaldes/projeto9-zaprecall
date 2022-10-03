export default function Responsta(props) {
  if(!props.abrirResposta) {
    return (<></>)
  }
  return (
    <div className="pergunta-aberta">
      {props.resposta}
    </div> 
  )
}