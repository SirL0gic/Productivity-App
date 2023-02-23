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

  //keep track of which task is being edited and its new value.
  const [editingTaskIndex, setEditingTaskIndex] = useState(-1); //is initialized to -1 to indicate that no task is being edited 
  const [editingTaskValue, setEditingTaskValue] = useState("");

  let handleNewTaskChange = (event) => {
    setNewTask(event.target.value); // the value of the input box
  };

  let handleNewTaskSubmit = (event) => {
    // Prevent the default form submission behavior, which would cause the page to reload.
    event.preventDefault();

    // If the new task is not an empty string (after trimming any whitespace),
    // add it to the task list by creating a new array with the existing tasks and the new task object
    if (newTask.trim()) {
      setTaskList([...taskList, { text: newTask, completed: false }]);

      // Reset the new task state variable to an empty string
      setNewTask("");
    }
  };

  let handleTaskDelete = (index) =>{
    // Use the filter method to create a new array that only includes tasks
    // that don't match the index of the task we want to delete

    const filteredTasks = taskList.filter((taskname,taskindex)=>taskindex !== index);

    // Set the task list state to the new filtered array
    setTaskList(filteredTasks);
    
  };

  let handleTaskCompletion = (index) => {
    const newTaskList = [...taskList]; // Make a copy of the task list to avoid mutating the state directly
    newTaskList[index].completed = !newTaskList[index].completed; // Toggle the completed property of the task at the given index
    setTaskList(newTaskList); // Update the task list state with the modified array
  };
  
  let handleTaskEdit = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskValue(taskList[index].text);
  };

  return (
    <div>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
        ></input>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {taskList.map((eachitem, index) => {
          return (
          <li key={index}>
            {eachitem.completed ? <s>{eachitem.text}</s> : eachitem.text}
            <button onClick={() => handleTaskCompletion(index)}>{eachitem.completed ? "Incomplete" : "Complete"}</button>
            <button>Edit</button>
            <button onClick={() => handleTaskDelete(index)}>Remove</button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
