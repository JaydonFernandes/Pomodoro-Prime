import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
      <Row style={{ marginTop: "1rem"}}>
        <Col><h3>Pomodoro Prime</h3></Col>
        <Col md={{ span: 1}}>
            <span><Button style={{float: "right"}}>Setting</Button></span>
            
        </Col>
      </Row>
    );
  }
  
  export default Header;