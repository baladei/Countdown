import './App.css';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';

import Fundo from './assets/vacation.jpg';

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${Fundo})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Countdown title="Dias" number={2} />
          <Countdown title="Horas" number={2} />
          <Countdown title="Minutos" number={2} />
          <Countdown title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App
