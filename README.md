# Documentation

This code creates a Productivity web application using React.js and Bootstrap. The application allows users to add tasks, edit tasks, mark tasks as completed, and delete tasks.

Demo: https://1drv.ms/v/s!Apck3DEmMLfWih9YJxfmPuTVJFDc?e=gaYp7M

## Dependencies

The code uses the following dependencies:

-   `react` - a JavaScript library for building user interfaces.
-   `react-dom` - a package for rendering React components into the DOM.
-   `react-bootstrap` - a React implementation of the Bootstrap framework.
-   `bootstrap` - a popular CSS framework.

## Usage

1.  Clone the repository or download the files.
2.  Navigate to the project directory in the terminal.
3.  Run `npm install` to install the dependencies.
4.  Run `npm start` to start the development server.

## Functionality

### Add new tasks

Users can add new tasks to the list by typing a task name in the input box and clicking the "Add Task" button. The new task is added to the list and displayed below the input box.

### Edit tasks

Users can edit existing tasks by clicking on the "Edit" button next to the task they want to edit. This will display an input box where the user can enter a new task name. The user can then click the "Save" button to save the changes or click the "Cancel" button to discard the changes.

### Mark tasks as completed

Users can mark a task as completed by clicking the checkbox next to the task. The task will be crossed out to indicate that it has been completed.

### Delete tasks

Users can delete a task by clicking the "Delete" button next to the task they want to delete. The task will be removed from the list.

### Date and Time

The application displays the current date and time on the top of the page.

### UL render explanation
This code generates a list of tasks from the `taskList` array. It maps over each item in the array and creates a `li` element for it. The `key` prop is set to the index of each item in the array to ensure efficient updates.

For each task item, it first checks if the `editingTaskIndex` is equal to the current index. If it is, it renders a form to edit the task. The form contains an input field where the current task value is displayed as its value. This input field allows the user to change the task value. There are two buttons in the form: "Save" and "Cancel". Clicking "Save" will trigger the `handleTaskEditSubmit` function which updates the task value in the `taskList` array. Clicking "Cancel" will set the `editingTaskIndex` back to -1, indicating that no task is currently being edited.

If `editingTaskIndex` is not equal to the current index, the task is displayed as text. If the task is completed, it is rendered with a strike-through using the HTML `s` tag. If it is not completed, it is displayed normally. Below the task, there are three buttons: "Complete", "Edit", and "Remove". Clicking "Complete" will toggle the `completed` property of the task in the `taskList` array. Clicking "Edit" will set the `editingTaskIndex` to the current index and display the form to edit the task. Clicking "Remove" will remove the task from the `taskList` array.

### Each Function name and purpose
1.  **handleNewTaskChange** This function is responsible for handling changes to the new task input field. It takes an event object as an argument and updates the newTask state variable with the value of the input field.
    
2.  **handleNewTaskSubmit** This function is responsible for handling the submission of a new task. It takes an event object as an argument and prevents the default form submission behavior. If the new task input field is not empty (after trimming any whitespace), it creates a new task object and adds it to the taskList state variable by creating a new array. It then resets the newTask state variable to an empty string.
    
3.  **handleTaskDelete** This function is responsible for handling the deletion of a task. It takes an index argument that corresponds to the index of the task in the taskList array. It uses the filter method to create a new array that only includes tasks that don't match the index of the task we want to delete. It then updates the taskList state variable with the new filtered array.
    
4.  **handleTaskCompletion** This function is responsible for handling the completion of a task. It takes an index argument that corresponds to the index of the task in the taskList array. It creates a copy of the taskList array to avoid mutating the state directly, toggles the completed property of the task at the given index, and updates the taskList state variable with the modified array.
    
5.  **handleTaskEdit** This function is responsible for handling the editing of a task. It takes an index argument that corresponds to the index of the task in the taskList array. It updates the editingTaskIndex state variable with the index of the task being edited and sets the editingTaskValue state variable to the text of the task being edited.
    
6.  **handleTaskEditChange** This function is responsible for handling changes to the editing task input field. It takes an event object as an argument and updates the editingTask state variable with the value of the input field.
    
7.  **handleTaskEditSubmit** This function is responsible for handling the submission of an edited task. It takes an event object as an argument and prevents the default form submission behavior. If the editing task input field is not empty (after trimming any whitespace), it creates a copy of the taskList array and updates the text of the task at the editingTaskIndex with the new value. It then resets the editingTask and editingTaskIndex state variables.

## States
This code block initializes and sets the states for the new task, task list, and editing task.

The `newTask` state is initialized with an empty string using `useState()`. This state variable is responsible for keeping track of the user input for the task name.

The `taskList` state is also initialized using `useState()` with an empty array `[]`. This state variable is responsible for storing all the tasks added to the to-do list as a list.

The `editingTaskIndex` state is used to keep track of which task is currently being edited, and is initialized with `-1` to indicate that no task is currently being edited.

The `editingTaskValue` state is used to keep track of the current value of the task being edited.

The `editingTask` state is initialized with an empty string `""`, and is responsible for keeping track of the new value of the task being edited.

## Components

The code uses the following React components:

-   `App` - the main component that renders the To-Do List application.

## Styling

The application uses a custom CSS file (`App.css`) and a Bootstrap CSS file (`bootstrap.min.css`) for styling. 
