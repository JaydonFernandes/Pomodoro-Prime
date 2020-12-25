import React, { useEffect, useState } from "react";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function TimerOptions(props) {
  const TimerTypes = {
    pomodoro: 'pomodoro',
    shortBreak: 'shortBreak',
    longBreak: 'longBreak'
  }

  const [radioValue, setRadioValue] = useState(props.TimerTypes.pomodoro)

  const radios = [
      { name: 'Pomodoro', value: props.TimerTypes.pomodoro },
      { name: 'Short Break', value: props.TimerTypes.shortBreak },
      { name: 'Long Break', value: props.TimerTypes.longBreak },
    ];

  useEffect( ()=>{
    props.updateTimerType(radioValue);
  },[radioValue])

  return (
    <div className="TimerOptions" >
        <ButtonGroup toggle style={{ width: "100%"}}>
              {radios.map((radio, idx) => (
              <ToggleButton
                  key={idx}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                  {radio.name}
              </ToggleButton>
              ))}
          </ButtonGroup>
    </div>
  );
}

export default TimerOptions;