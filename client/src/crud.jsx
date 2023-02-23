let App = () => {
    const [newTask, setNewTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editingTask, setEditingTask] = useState("");
    const [editingTaskIndex, setEditingTaskIndex] = useState(-1);
  
    let handleNewTaskChange = (event) => {
      setNewTask(event.target.value);
    };
  
    let handleNewTaskSubmit = (event) => {
      event.preventDefault();
      if (newTask.trim()) {
        setTaskList([...taskList, { text: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    let handleTaskDelete = (index) => {
      const filteredTasks = taskList.filter(
        (taskname, taskindex) => taskindex !== index
      );
      setTaskList(filteredTasks);
    };
  
    let handleTaskCompletion = (index) => {
      const newTaskList = [...taskList];
      newTaskList[index].completed = !newTaskList[index].completed;
      setTaskList(newTaskList);
    };
  
    let handleTaskEdit = (index) => {
      // Set the editing task and index state variables to the current task's text and index
      setEditingTask(taskList[index].text);
      setEditingTaskIndex(index);
    };
  
    let handleTaskEditChange = (event) => {
      // Update the editing task state variable with the new value from the input box
      setEditingTask(event.target.value);
    };
  
    let handleTaskEditSubmit = (event) => {
      event.preventDefault();
  
      if (editingTask.trim()) {
        // Make a copy of the task list and update the text of the task at the editingTaskIndex
        const newTaskList = [...taskList];
        newTaskList[editingTaskIndex].text = editingTask;
        setTaskList(newTaskList);
  
        // Reset the editing task and index state variables
        setEditingTask("");
        setEditingTaskIndex(-1);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleNewTaskSubmit}>
          <input type="text" value={newTask} onChange={handleNewTaskChange} />
          <button type="submit">Add Task</button>
        </form>
  
        <ul>
          {taskList.map((eachitem, index) => {
            return (
              <li key={index}>
                {editingTaskIndex === index ? (
                  <form onSubmit={handleTaskEditSubmit}>
                    <input
                      type="text"
                      value={editingTask}
                      onChange={handleTaskEditChange}
                    />
                    <button type="submit">Save</button>
                    <button
                      type="button"
                      onClick={() => setEditingTaskIndex(-1)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    {eachitem.completed ? (
                      <s>{eachitem.text}</s>
                    ) : (
                      eachitem.text
                    )}
                    <button onClick={() => handleTaskCompletion(index)}>
                      {eachitem.completed ? "Incomplete" : "Complete"}
                    </button>
                    <button onClick={() => handleTaskEdit(index)}>Edit</button>
                    <button onClick={() => handleTaskDelete(index)}>
                      Remove
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default App;
  