import logo from './assets/img/logo.png';
import Perguntas from './components/Perguntas'

export default function App(){
  const perguntas = [
    {
      id: 1,
      pergunta: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      id: 2,
      pergunta: "O React é __",
      resposta: " uma biblioteca JavaScript para construção de interfaces",
    },
    {
      id: 3,
      pergunta: "Componentes devem iniciar com __ ",
      resposta: "letra maiúscula",
    },
    {
      id: 4,
      pergunta: " Podemos colocar __ dentro do JSX ",
      resposta: "expressões",
    },
    {
      id: 5,
      pergunta: "O ReactDOM nos ajuda __ ",
      resposta: " interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      id: 6,
      pergunta: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      id: 7,
      pergunta: "Usamos props para __ ",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      id: 8,
      pergunta: "Usamos estado (state) para __ ",
      resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
    
  ] 
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt='logo'></img>
        <h1>Zaprecall</h1>
      </div>
      <Perguntas arrayDeQuestoes={perguntas}/>
    </div>
  )
} 
