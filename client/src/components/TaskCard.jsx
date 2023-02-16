
//Styles
import "../task.css";

let Task = () => {
    return (
        <div id="checklist">
        <input id="01" type="checkbox" name="r" value="1"/>
        <label for="01">Bread</label>
        <button className="edit-button"><img src="https://img.icons8.com/nolan/96/edit--v1.png"/></button>
        <button className="del-button">Delete</button>
      </div>
    )

};

export default Task;