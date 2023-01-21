import './App.css';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { useCountdown } from './hooks/useCountdown';

import Fundo from './assets/vacation.jpg';

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024  00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Fundo})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Countdown title="Dias" number={day} />
          <Countdown title="Horas" number={hour} />
          <Countdown title="Minutos" number={minute} />
          <Countdown title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App
