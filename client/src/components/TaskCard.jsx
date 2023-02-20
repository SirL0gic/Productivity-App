
//Styles
import "../task.css";

let Task = () => {
    return (
        <div className="checklist">
        <input className="checkbox-rect2" id="01" type="checkbox" name="r" value="1"/>
        <label for="01">Bread</label>
        <button className="edit-button"><img className="edit-image" alt='editimage' src="https://img.icons8.com/nolan/96/edit--v1.png"/></button>
        <button className="del-button"><img className="del-image" alt='delimage' src="https://img.icons8.com/color/96/null/trash--v2.png"/></button>

        
      <div class="checkbox-rect2">
        <input type="checkbox" id="checkbox-rect2" name="check"/>
        <label for="checkbox-rect2">Check one</label>
      </div>
   
      </div>

      
    )

};

export default Task;
