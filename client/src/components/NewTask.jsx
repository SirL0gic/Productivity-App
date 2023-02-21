//Styles
import "../newtask.css"

let NewTask = () => {
  return (
    <div className="button-container">
      <form>
        <input className="task-input-box" type="text" />
      </form>
      <button className="add-button">
        <img
          className="add-image"
          alt="image"
          src={require('../images/icons8-add-50.png')}
        />
      </button>
    </div>
  );
};

export default NewTask;
