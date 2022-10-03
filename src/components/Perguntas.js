import Pergunta from './Pergunta';
import FooterConcluidos from './Footer-Concluidos';
import { useState } from 'react';

export default function Perguntas (props){
  const [resultado,setResultado] = useState(0);
  const [perguntaSelecionada, setPerguntaSelectionada]=useState(null);
  const [statusDaPerguntaSelecionada, setStatusDaPerguntaSelecionada]=useState({
    status: 'ativo'
  });

  function naoLembrei() {
    if(perguntaSelecionada) {
      const statusDaPergunta={
        id: perguntaSelecionada,
        status: 'nao-lembrei'
      }
      setStatusDaPerguntaSelecionada(statusDaPergunta)
    }
  }

  function quaseNaoLembrei() {
    if(perguntaSelecionada) {
      const statusDaPergunta={
        id: perguntaSelecionada,
        status: 'quase-nao-lembrei'
      }
      setStatusDaPerguntaSelecionada(statusDaPergunta)
    }
  }

  function zap() {
    if(perguntaSelecionada) {
      const statusDaPergunta={
        id: perguntaSelecionada,
        status: 'zap'
      }
      setStatusDaPerguntaSelecionada(statusDaPergunta)
    }
  }

  return (
    <>
    {
      props.arrayDeQuestoes.map((pergunta) => {
        return (
          <Pergunta
            key={pergunta.id}
            id={pergunta.id}
            pergunta={pergunta.pergunta}
            resposta={pergunta.resposta}
            statusDaPerguntaSelecionada={statusDaPerguntaSelecionada}
            setPerguntaSelectionada={setPerguntaSelectionada}
            setResultado={setResultado}
            resultado={resultado}
          />
        )
      })
    }
    <FooterConcluidos
      resultado={resultado}
      tamanho={props.arrayDeQuestoes.length}
      naoLembrei={naoLembrei}
      quaseNaoLembrei={quaseNaoLembrei}
      zap={zap}
    />
    </>
  )
}