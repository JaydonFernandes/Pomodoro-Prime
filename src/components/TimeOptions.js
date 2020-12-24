import React, { useState } from "react";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function TimerOptions() {
    const [radioValue, setRadioValue] = useState('1')

    const radios = [
        { name: 'Pomodoro', value: '1' },
        { name: 'Short Break', value: '2' },
        { name: 'Long Break', value: '3' },
      ];

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