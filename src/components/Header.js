import SettingsModal from './SettingsModal'

import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {

  const [modalShow, setModalShow] = useState(false);


  //TODO 
  //write code so time is added when modal closes
  const onModalClose = function(){
    console.log("Modal Complete...");
    setModalShow(false);
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
          timesettings={props}
          show={modalShow}
          onHide={onModalClose}
        />
      </div>
      
    );
  }
  
  export default Header;