import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import TimerControls from './TimerControls';
import TimerOptions from "./TimeOptions";
import VisualTimer from "./VisualTimer";

function TimerCard(props) {

    const [timerTime, setTimerTime] = useState(props.pomodoroTime);
    const [isPaused, setIsPaused] = useState(true);
    const [needToResetTimer, setNeedToResetTimer] = useState(false);
    const [timerType, setTimerType] = useState('pomodoro');

    const TimerTypes = {
      pomodoro: 'pomodoro',
      shortBreak: 'shortBreak',
      longBreak: 'longBreak'
    }

    var TimerLengths = {
      pomodoro: (props.pomodoroTime * 60),
      shortBreak: (props.shortBreakTime * 60),
      longBreak: (props.longBreakTime * 60)
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

    // switch(timerType) {
    //   case 'pomodoro':
    //     setTimerTime(props.pomodoroTime)
    //     break;
    //   case 'shortBreak':
    //     setTimerTime(props.shortBreakTime)
    //     break;
    //   case 'longBreak':
    //     setTimerTime(props.longBreakTime)
    //     break;
    // }

    useEffect( ()=>{
      clearTimeout(timer);
      switch(timerType) {
        case 'pomodoro':
          setTimerTime(props.pomodoroTime * 60)
          break;
        case 'shortBreak':
          setTimerTime(props.shortBreakTime * 60)
          break;
        case 'longBreak':
          setTimerTime(props.longBreakTime * 60)
          break;
      }

    },[props.pomodoroTime, props.shortBreakTime, props.longBreakTime])

    useEffect( ()=>{
      setTimerTime(TimerLengths[timerType])
      setIsPaused(true);
    },[timerType]);

    useEffect( ()=>{
      if (needToResetTimer){ 
        setTimerTime(TimerLengths[timerType]);
        setNeedToResetTimer(false);
      }
      if ((timerTime <= 0) || (isPaused)){
        clearTimeout(timer);
        if (timerTime <= 0 && (!needToResetTimer)){
          if (timerType === TimerTypes.pomodoro){
            setTimerType(TimerTypes.shortBreak)
          }else{
            setTimerType(TimerTypes.pomodoro)
          }
          
        }
      }else{
        setTimer(setTimeout( () => {
          setTimerTime(timerTime-1)
        }, 1000)) 
      }
    }, [timerTime, isPaused, needToResetTimer]);

    return (
      <div className="TimerCard" style={{ textAlign: "center" }}>
        
        <Card>
            <TimerOptions updateTimerType={updateTimerType} timerType={timerType} TimerTypes={TimerTypes}/>
            <Card.Body>
                <VisualTimer time={timerTime}/>
                <TimerControls togglePause={togglePause} restartTimer={restartTimer} isPaused={isPaused} />
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default TimerCard;