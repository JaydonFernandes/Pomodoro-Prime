import Button from 'react-bootstrap/Button';

function TimerControls() {
    return (
      <div className="TimerControls" >
        <Button style={{marginRight: "1rem"}}>Start</Button>
        <Button style={{marginLeft: "1rem"}}>Restart</Button>
      </div>
    );
  }
  
  export default TimerControls;
  