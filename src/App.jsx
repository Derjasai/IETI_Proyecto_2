import Header from "./components/Header"
import { TaskList } from "./components/TaskList"
import { useState } from "react";

import { useManageTasks, useTaskList } from "./hooks/useTaskList";

function App() {
  const [initialTasks, addTask, deleteTask, deleteAllTasks, changeStateTask] = useManageTasks();
  
  const [pending, calculatePending, sumOne, minusOne, reset] = useTaskList();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState('');
  const [formValidation, setFormValidation] = useState({
    task:undefined,
  })

  const isOnTaskList = (title) => {
    var res = false
    initialTasks.map((task) => {
      if (task.title === title) {
          res = true;
      }
    })

    return res;
  }

  const handleTaskChange = (event) => {
    const value = event.target.value;
    var error = ""
    if (value === "") {
      error = "El nombre de la tarea es requerido";
    }else if(value.length <= 3  ){
      error = "El nombre de la tarea debe tener menos de 3 caracteres";
    }else if (isOnTaskList(value)){
      error = "Ya existe una tarea con ese nombre";
    }

    setFormValidation({
      ...formValidation,
      task: error,
    });

    setValue(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(value, description);
    sumOne();

    setValue("");
    setDescription("");
    setFormValidation({
      task:undefined,
    })
  };

  const handleDeleteAll = () => {
    deleteAllTasks();
    reset();
  }

  const handleDeleteOne = (item)=>{
    deleteTask(item);
    minusOne()
  }

  const handleChangeState = (title, newIschecked) => {
    calculatePending(newIschecked);
    changeStateTask(title, newIschecked);
  };

  const isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id = "newTask" placeholder="Title" value={value} onChange={handleTaskChange} ></input>
          <span className="error" role="alert">{formValidation.task}</span>
        </div>
        
        <div>
          <input type="text" id = "description" placeholder="Description" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit" disabled={!isFormValid} >Añadir</button>
      </form>
      <TaskList list={initialTasks} onDeleteOne={handleDeleteOne} onChangeState={handleChangeState}/>
      <div>
        <label>You have {pending} pending task(s)</label>
        <button onClick={handleDeleteAll}>Clear All</button>
      </div>
      
    </div>
  );
}

export default App