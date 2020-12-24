import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TimerCard from './components/TimerCard'
import Header from './components/Header'


function App() {
  return (
    <div className="App" >
      <div style={{ maxWidth: '40rem', marginLeft: "auto", marginRight: "auto"  }}>
        <Header/>
        <hr/>
        <TimerCard/>
      </div>
      
    </div>
  );
}

export default App;
