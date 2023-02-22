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
import "./newtask.css";

import Task from "./components/TaskCard";
import NewTask from "./components/NewTask";

// let month_list = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let current_date = new Date();
// let year = current_date.getFullYear();
// let month = month_list[current_date.getMonth()];
// let day = current_date.getDate();
// let day_name = weekday[current_date.getDay()];

// function App() {
//   const [taskList, setTaskList] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editingTaskIndex, setEditingTaskIndex] = useState(null);
//   const [editingTaskValue, setEditingTaskValue] = useState("");

//   const handleTaskInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       setTaskList([...taskList, { task: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const handleCompleteTask = (taskIndex) => {
//     const newTaskList = [...taskList];
//     newTaskList[taskIndex].completed = true;
//     setTaskList(newTaskList);
//   };

//   const handleEditTask = (taskIndex) => {
//     setEditingTaskIndex(taskIndex);
//     setEditingTaskValue(taskList[taskIndex].task);
//   };

//   const handleCancelEditTask = () => {
//     setEditingTaskIndex(null);
//     setEditingTaskValue("");
//   };

//   const handleSaveTask = () => {
//     if (editingTaskValue.trim() !== "") {
//       const newTaskList = [...taskList];
//       newTaskList[editingTaskIndex].task = editingTaskValue;
//       setTaskList(newTaskList);
//       setEditingTaskIndex(null);
//       setEditingTaskValue("");
//     }
//   };

//   const handleRemoveTask = (taskIndex) => {
//     const newTaskList = [...taskList];
//     newTaskList.splice(taskIndex, 1);
//     setTaskList(newTaskList);
//   };

//   return (
//     <Container fluid className="App">
//       <Row className="title-area">
//         <h1 className="text-pop-up-top">&#128221; To Do List &#128221;</h1>
//       </Row>

//       <Row className="list-area">
//         <Container>
//           <Row className="date-time">
//             <Col className="col-day">
//               <p>{day}</p>
//             </Col>

//             <Col>
//               <ul className="date-list">
//                 <li>{month}</li>
//                 <li>{year}</li>
//               </ul>
//             </Col>

//             <Col>
//               <p className="day-area">{day_name}</p>
//             </Col>
//           </Row>

//           <Row className="task-items">
//             <div>
//               <h1>To-Do List</h1>
//               <input
//                 type="text"
//                 value={newTask}
//                 onChange={handleTaskInputChange}
//               />
//               <button onClick={handleAddTask}>Add Task</button>
//               <ul>
//                 {taskList.map((task, index) => (
//                   <li key={index}>
//                     {editingTaskIndex === index ? (
//                       <>
//                         <input
//                           type="text"
//                           value={editingTaskValue}
//                           onChange={(event) =>
//                             setEditingTaskValue(event.target.value)
//                           }
//                         />
//                         <button onClick={handleSaveTask}>Save</button>
//                         <button onClick={handleCancelEditTask}>Cancel</button>
//                       </>
//                     ) : (
//                       <>
//                         {task.completed ? <del>{task.task}</del> : task.task}
//                         <button onClick={() => handleCompleteTask(index)}>
//                           Complete
//                         </button>
//                         <button onClick={() => handleEditTask(index)}>
//                           Edit
//                         </button>
//                         <button onClick={() => handleRemoveTask(index)}>
//                           Remove
//                         </button>
//                       </>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Row>
//         </Container>
//       </Row>
//     </Container>
//   );
// }

// export default App;

let App = () => {
  const [newTask, setNewTask] = useState(""); // this is for setting the task name.
  const [taskList, setTaskList] = useState([]); //for adding all tasks as a list.

  let handleNewTaskChange = (event) => {
    setNewTask(event.target.value); // the value of the input box
  };

  let handleNewTaskSubmit = (event) => {
    event.preventDefault(); // does not refresh page
  };

  return (
    <div>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
        ></input>
        <button type="sumbit">Add Task</button>
      </form>
    </div>
  );
};

export default App;
