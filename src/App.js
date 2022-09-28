import logo from './assets/img/logo.png';
import setaPlay from './assets/img/seta_play.png'


export default function App(){
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt='logo'></img>
        <h1>Zaprecall</h1>
      </div>
      <div className="pergunta-fechada">
          <p>Pergunta 1</p>
          <img src= {setaPlay} alt="setaplay"></img>
        </div>
      <div className="footer-concluidos ">
        <div className="container-botoes">
        <button>dsd</button>
        <button>dsd</button>
        <button>dsd</button>
      </div>
          <p>concluido</p>
        </div>
    </div>
  )
} 
