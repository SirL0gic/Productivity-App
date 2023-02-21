import { useState } from "react";

//Bootstrap-npm-lib
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";


//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.css";
import "./newtask.css"

import Task from "./components/TaskCard";
import NewTask from "./components/NewTask";

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
         
          </Row>

          <Row>

            <div className="button-container">

              <form>

                <input className="task-input-box" type="text"   />

                   <button className="add-button" type="submit">

                <img
                  className="add-image"
                  alt="imagee"
                  src={require("./images/icons8-add-50.png")}
                />

              </button>

              </form>
           
            </div>

          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
