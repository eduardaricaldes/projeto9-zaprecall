import logo from './assets/img/logo.png';
import FooterConcluidos from './Footer-Concluidos';
import Perguntas from './components/Perguntas'

export default function App(){
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt='logo'></img>
        <h1>Zaprecall</h1>
      </div>
      <Perguntas/>
      <FooterConcluidos/>
    </div>
  )
} 
