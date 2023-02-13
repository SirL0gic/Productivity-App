//Bootstrap-npm-lib
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import './App.css';



function App() {
  return (
    // <div className="App">
    //   <div className="list-container">
    //   </div>
    // </div>
    <Container fluid className="App">
    <Row className="title-area">
      <h1>&#128221; To Do List in React &#128221;</h1>
    </Row>
    <Row className="list-area">
      <Container>
        <Row className="date-time">
          <Col></Col>
        </Row>
      </Container>
    </Row>
    <Row className="credits-area">
    </Row>
    </Container>
  );
}

export default App;
