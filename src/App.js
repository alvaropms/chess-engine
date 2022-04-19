import { useEffect } from "react";
import { game } from "./game";
import './styles.css'

function App() {
  useEffect(() => {
    game()
  }, [])
  return (
  <>
  <div className="board">
    <h1>IA que joga xadrez</h1>
    <span>Por <a href="https://github.com/alvaropms">Álvaro Melquíades</a></span>
    <p>O computador jogará de Pretas</p>
    <div id="myBoard" style={{minWidth: '400px'}}></div>
    <div id="status">É a vez das Brancas</div>
    <p>
      <a href="https://github.com/alvaropms/chess-engine">GitHub</a>
      <br/>
      <a href="https://www.linkedin.com/in/%C3%A1lvaro-melqu%C3%ADades-764a2a224">LinkedIn</a>
    </p>
  </div>
  </>
  );
}

export default App;
