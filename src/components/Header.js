import SettingsModal from './SettingsModal'

import { useState, useRef, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {

  const [modalShow, setModalShow] = useState(false);

  const [updatedPomodoroTime, setUpdatedPomodoroTime] = useState(props.pomodoroTime);
  const [updatedShortBreakTime, setUpdatedShortBreakTime] = useState(props.shortBreakTime);
  const [updatedLongBreakTime, setUpdatedLongBreakTime] = useState(props.longBreakTime);


  //TODO 
  //write code so time is added when modal closes
  const onModalClose = function(){
    console.log("Modal Complete...");
    // console.log(oldPomo);
    console.log("updatedPomodoroTime: "+ updatedPomodoroTime)
    console.log("updatedShortBreakTime: "+ updatedShortBreakTime)
    console.log("updatedLongBreakTime: "+ updatedLongBreakTime)

    var isFormValid = true;
    console.log(isFormValid)

    if ( (updatedPomodoroTime) && (updatedPomodoroTime >= 1)){
      props.setPomodoroTime(updatedPomodoroTime)
      
    }else{
      isFormValid = false;
      setUpdatedPomodoroTime(props.pomodoroTime)
    }

    console.log(isFormValid)

    if ( (updatedShortBreakTime) && (updatedShortBreakTime >= 1)){
      props.setShortBreakTime(updatedShortBreakTime)
      
    }else{
      isFormValid = false;
      setUpdatedShortBreakTime(props.shortBreakTime)
    }

    if ( (updatedLongBreakTime) && (updatedLongBreakTime >= 1)){
      props.setLongBreakTime(updatedLongBreakTime)
      
    }else{
      isFormValid = false;
      setUpdatedLongBreakTime(props.longBreakTime)
    }

    console.log(isFormValid)
    if ( isFormValid ){
      setModalShow(false);
    }
    
  }

  

    return (
      <div>
        <Row style={{ marginTop: "1rem"}}>
          <Col><h3>Pomodoro Prime</h3></Col>
          <Col md={{ span: 1}}>
              <span><Button style={{float: "right"}} onClick={() => setModalShow(true)} >Settings</Button></span>
          </Col>        
        </Row>
        <SettingsModal
          setUpdatedPomodoroTime = {setUpdatedPomodoroTime}
          setUpdatedShortBreakTime = {setUpdatedShortBreakTime}
          setUpdatedLongBreakTime = {setUpdatedLongBreakTime}

          updatedPomodoroTime = {updatedPomodoroTime}
          updatedShortBreakTime = {updatedShortBreakTime}
          updatedLongBreakTime = {updatedLongBreakTime}


          timesettings={props}
          show={modalShow}
          onHide={onModalClose}
        />
      </div>
      
    );
  }
  
  export default Header;