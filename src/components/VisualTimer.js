function VisualTimer(props) {

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    const timeInSeconds = props.time;

    var minutes = Math.floor(timeInSeconds / 60);;
    var seconds = timeInSeconds - (minutes*60);

    return (
        <div className="VisualTimer" style={{margin:"1rem", fontSize: "1000%"}}>
            {minutes}:{zeroPad(seconds, 2)}
        </div>
    );
  }
  
  export default VisualTimer;
  