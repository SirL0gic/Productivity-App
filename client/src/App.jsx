import { useState } from "react";

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

let month_list = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let current_date = new Date();
let year = current_date.getFullYear();
let month = month_list[current_date.getMonth()];
let day = current_date.getDate();
let day_name = weekday[current_date.getDay()];

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    setTodos([...todos, { id: todos.length + 1, text: <Task /> }]);
  }

  return (
    <Container fluid className="App">
      <Row className="title-area">
        <h1 className="text-pop-up-top">&#128221; To Do List &#128221;</h1>
      </Row>

      <Row className="list-area">
        <Container>
          <Row className="date-time">
            <Col className="col-day">
              <p>{day}</p>
            </Col>

            <Col>
              <ul className="date-list">
                <li>{month}</li>
                <li>{year}</li>
              </ul>
            </Col>

            <Col>
              <p className="day-area">{day_name}</p>
            </Col>
          </Row>

          <Row className="task-items">
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          </Row>

          <Row className="button-area">
            <Button variant="primary" onClick={handleAddTodo}>
              New Task
            </Button>
          </Row>

          <Row>
            <form>
              <input type="text" />
            </form>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
