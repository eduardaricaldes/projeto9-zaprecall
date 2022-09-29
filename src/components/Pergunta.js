import styled from "styled-components";

export default function Pergunta(props) {
  return (
    <div className="pergunta">
      <FlashCard>
        Pergunta {props.id}
      </FlashCard>
      <PerguntaCard>
        {props.pergunta}
      </PerguntaCard>
      {/* <div className="pergunta-aberta">
        {props.resposta}
      </div> */}
    </div>
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

const PerguntaCard = styled.div `
  display: none;
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;

`