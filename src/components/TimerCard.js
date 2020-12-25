import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import TimerControls from './TimerControls';
import TimerOptions from "./TimeOptions";
import VisualTimer from "./VisualTimer";

function TimerCard(props) {

    const [timerTime, setTimerTime] = useState(1500);
    const [isPaused, setIsPaused] = useState(true);
    const [needToResetTimer, setNeedToResetTimer] = useState(false);
    const [timerType, setTimerType] = useState('pomodoro');

    const TimerTypes = {
      pomodoro: 'pomodoro',
      shortBreak: 'shortBreak',
      longBreak: 'longBreak'
    }

    var TimerLengths = {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 900
    }

    var updateTimerType= function(type){
      setTimerType(type)
    }

    var [timer, setTimer] = useState();

    var togglePause = function(){
      setIsPaused(!isPaused)
    }

    var restartTimer = function(){
      setNeedToResetTimer(true);
      setIsPaused(true);
    }

    useEffect( ()=>{
      setTimerTime(TimerLengths[timerType])
      setIsPaused(true);
    },[timerType])

    useEffect( ()=>{
      if (needToResetTimer){ 
        setTimerTime(TimerLengths[timerType]);
        setNeedToResetTimer(false);
      }
      if ((timerTime <= 0) || (isPaused)){
        clearTimeout(timer);
      }else{
        setTimer(setTimeout( () => {
          setTimerTime(timerTime-1)
        }, 1000)) 
      }
    }, [timerTime, isPaused]);




    return (
      <div className="TimerCard" style={{ textAlign: "center" }}>
        
        <Card>
            <TimerOptions updateTimerType={updateTimerType} TimerTypes={TimerTypes}/>
            <Card.Body>
                <VisualTimer time={timerTime}/>
                <TimerControls togglePause={togglePause} restartTimer={restartTimer} isPaused={isPaused} />
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default TimerCard;