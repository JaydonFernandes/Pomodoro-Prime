import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function SettingsModal(props) {

    return (
    <div className="SettingsModal" >
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Row>
                <Col>
                    <h5>Time (minutes)</h5>
                </Col>
            </Row>

            <Row>
                
                <Col>
                    <h6>Pomodoro</h6>
                    <input className="form-control" id="example-number-input" type="number" 
                        min={1}
                        onChange={(e)=>{ props.setUpdatedPomodoroTime(e.target.value) }} 
                        onBlur={(e)=>{ (e.target.value && (e.target.value >= 1)) ? console.log("Good") : props.setUpdatedPomodoroTime(props.timesettings.pomodoroTime) }}
                        value={props.updatedPomodoroTime} />
                </Col>

                <Col>
                    <h6>Short Break</h6>
                    <input className="form-control" id="example-number-input" type="number" 
                        min={1}
                        onChange={(e)=>{ props.setUpdatedShortBreakTime(e.target.value) }}
                        onBlur={(e)=>{ (e.target.value && (e.target.value >= 1)) ? console.log("Good") : props.setUpdatedShortBreakTime(props.timesettings.shortBreakTime) }} 
                        value={props.updatedShortBreakTime} />
                </Col>

                <Col>
                    <h6>Long Break</h6>
                    <input className="form-control" id="example-number-input" type="number" 
                        min={1}
                        onChange={(e)=>{ props.setUpdatedLongBreakTime(e.target.value) }} 
                        onBlur={(e)=>{ (e.target.value && (e.target.value >= 1)) ? console.log("Good") : props.setUpdatedLongBreakTime(props.timesettings.longBreakTime) }}
                        value={props.updatedLongBreakTime} />
                </Col>
            </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>OK</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}

export default SettingsModal;