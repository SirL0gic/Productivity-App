//Bootstrap-npm-lib
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.css";

function App() {
  return (
    <Container fluid className="App">

      <Row className="title-area">
        <h1>&#128221; To Do List &#128221;</h1>
      </Row>

      <Row className="list-area">

        <Container>
          <Row className="date-time">

            <Col>
              <p>1</p>
            </Col>

            <Col>
              <ul>
                <li>Jan</li>
                <li>2023</li>
              </ul>
            </Col>

            <Col>
              <p>Monday</p>
            </Col>

          </Row>

          <Row className="task-items">
            <p>item1</p>
          </Row>

          <Row className="button-area">
      <Button variant="primary">Primary</Button>{' '}
        </Row>

        </Container>

      </Row>

   

    </Container>
  );
}

export default App;
