

import Card from 'react-bootstrap/Card';
import TimerControls from './TimerControls';
import TimerOptions from "./TimeOptions";
import VisualTimer from "./VisualTimer";

function TimerCard() {

    

    return (
      <div className="TimerCard" style={{ textAlign: "center" }}>
        
        <Card>
            <TimerOptions/>
            <Card.Body>
                <VisualTimer/>
                <TimerControls/>
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default TimerCard;