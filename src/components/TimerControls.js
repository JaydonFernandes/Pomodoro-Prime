import Button from 'react-bootstrap/Button';

function TimerControls(props) {


    return (
      <div className="TimerControls" >
        <Button onClick={props.togglePause} style={{marginRight: "1rem"}}>{props.isPaused ? 'Play':'Pause'}</Button>
        <Button onClick={props.restartTimer} style={{marginLeft: "1rem"}}>Restart</Button>
      </div>
    );
  }
  
  export default TimerControls;
  