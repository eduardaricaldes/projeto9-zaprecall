import setaPlay from '../assets/img/seta_play.png'
import styled from "styled-components";

export default function FlashCardComponent(props) {
  if(!props.abrirFlashCard) {
    return (
      <></>
    )
  }
  console.log(props)
  return(
  <FlashCard onClick={()=>props.abrirPerguntaDoCard()}>
    <div>Pergunta {props.id}</div>      
    <img src={setaPlay} alt="Seta Play"></img>
  </FlashCard>
  )
}

const FlashCard = styled.div `
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`