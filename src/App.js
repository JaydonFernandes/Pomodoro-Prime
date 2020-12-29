import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from "react";

import TimerCard from './components/TimerCard'
import Header from './components/Header'


function App() {

  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  return (
    <div className="App" style={{ maxWidth: '40rem', marginLeft: "auto", marginRight: "auto"  }}>
      <div style={{ maxWidth: '40rem', marginLeft: "auto", marginRight: "auto"  }}>
        <Header pomodoroTime={pomodoroTime} setPomodoroTime={setPomodoroTime} 
          shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} 
          longBreakTime={longBreakTime} setLongBreakTime={setLongBreakTime} />
        <hr/>
        <TimerCard pomodoroTime={pomodoroTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime} />
      </div>
      
    </div>
  );
}

export default App;
