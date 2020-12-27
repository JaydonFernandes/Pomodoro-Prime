import { useEffect, useState, useRef } from "react";

import Card from 'react-bootstrap/Card';
import TimerControls from './TimerControls';
import TimerOptions from "./TimeOptions";
import VisualTimer from "./VisualTimer";

function TimerCard(props) {

    const [timerTime, setTimerTime] = useState(props.pomodoroTime);
    const [isPaused, setIsPaused] = useState(true);
    const [needToResetTimer, setNeedToResetTimer] = useState(false);
    const [timerType, setTimerType] = useState('pomodoro');

    const prevPomodoroTime = usePrevious(props.pomodoroTime);
    const prevShortBreakTime = usePrevious(props.shortBreakTime);
    const prevLongBreakTime = usePrevious(props.longBreakTime);

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

    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }

    useEffect( ()=>{
      
      if(timerType === 'pomodoro'){
        clearTimeout(timer);
        setTimerTime(timerTime + ((props.pomodoroTime - prevPomodoroTime)* 60))
      }
    },[props.pomodoroTime])

    useEffect( ()=>{
      
      if(timerType === 'shortBreak'){
        clearTimeout(timer);
        setTimerTime(timerTime + ((props.shortBreakTime - prevShortBreakTime)* 60))
      }
    },[props.shortBreakTime])

    useEffect( ()=>{
      
      if(timerType === 'longBreak'){
        clearTimeout(timer);
        setTimerTime(timerTime + ((props.longBreakTime - prevLongBreakTime)* 60))
      }
    },[props.longBreakTime])

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