//Bootstrap-npm-lib
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.css";

import Task from "./components/TaskCard";

function App() {
  return (
    <Container fluid className="App">
      <Row className="title-area">
        <h1 className="text-pop-up-top">&#128221; To Do List &#128221;</h1>
      </Row>

      <Row className="list-area">
        <Container>
          <Row className="date-time">
            <Col className="col-day">
              <p>1</p>
            </Col>

            <Col>
              <ul className="date-list">
                <li>Jan</li>
                <li>2023</li>
              </ul>
            </Col>

            <Col>
              <p className="day-area">Monday</p>
            </Col>
          </Row>

          <Row className="task-items">
            <Task />
            <Task />
            <Task />
          </Row>

          <Row className="button-area">
            <Button variant="primary">New Task</Button>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
