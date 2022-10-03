import { useState } from "react";
import FlashCard from "./Flash-Card";
import PerguntaCard from './Pergunta-Aberta';
import Resposta from './Resposta';

export default function Pergunta(props) {
  const [abrirFlashCard, setAbrirFlashCard]=useState(true)
  const [abrirPergunta, setAbrirPergunta]=useState(false)
  const [abrirResposta, setAbrirResposta]=useState(false)

  function abrirPerguntaDoCard(id) {
    const novoResultado = props.resultado + 1
    props.setResultado(novoResultado)
    setAbrirFlashCard(false)
    setAbrirPergunta(true)
    props.setPerguntaSelectionada(id)
  }

  function abrirRespostaDoCard() {
    setAbrirPergunta(false)
    setAbrirResposta(true)
  }

  return (
    <div className="pergunta">
      <FlashCard
        id={props.id}
        abrirFlashCard={abrirFlashCard}
        abrirPerguntaDoCard={abrirPerguntaDoCard}
      />
      <PerguntaCard
        abrirPergunta={abrirPergunta}
        pergunta={props.pergunta}
        abrirRespostaDoCard={abrirRespostaDoCard}
      />

      <Resposta
        abrirResposta={abrirResposta}
        resposta={props.resposta}
      />
    </div>
  )
}

