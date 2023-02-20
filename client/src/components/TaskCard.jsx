import { useState } from "react";

//Styles
import "../task.css";

let Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <div className="checklist">
      <input
        className="check"
        id="ch"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="taskname">Bread</label>
      <button className="edit-button">
        <img
          className="edit-image"
          alt="editimage"
          src="https://img.icons8.com/nolan/96/edit--v1.png"
        />
      </button>
      <button className="del-button">
        <img
          className="del-image"
          alt="delimage"
          src="https://img.icons8.com/color/96/null/trash--v2.png"
        />
      </button>
    </div>
  );
};

export default Task;
