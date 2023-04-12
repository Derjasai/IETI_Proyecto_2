import Header from "./components/Header"
import { TaskList } from "./components/TaskList"
import { useState } from "react";
import { Button, Flex, Input, Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
    <Flex alignItems="center" justifyContent="center" minHeight="auto" flexDirection="column">
      <Header />
      <Flex maxWidth={300} flexDirection="column" >
        <form onSubmit={handleSubmit}>
        <Box mt={2}>
          <Input type="text" id = "newTask" placeholder="Title" value={value} onChange={handleTaskChange} width={300}></Input>
          <label className="error" role="alert">{formValidation.task}</label>
          <Input type="text" id = "description" placeholder="Description" value={description} onChange={handleDescriptionChange} mt={2}></Input>
        </Box>
        <Box mt={2}>
          <Button type="submit" disabled={!isFormValid}>Add Task</Button>
        </Box>
        </form>
      </Flex>

      <Flex>
        <TaskList list={initialTasks} onDeleteOne={handleDeleteOne} onChangeState={handleChangeState}/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" minHeight="auto" flexDirection="column">
        <Text pt='2' fontSize='s'>You have {pending} pending task(s)</Text>
        <Button leftIcon={<DeleteIcon />} onClick={handleDeleteAll}> Clear All</Button>
      </Flex>
    </Flex>
    
    // <div className="App">
    //   <Header />
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <input type="text" id = "newTask" placeholder="Title" value={value} onChange={handleTaskChange} ></input>
    //       <span className="error" role="alert">{formValidation.task}</span>
    //     </div>
        
    //     <div>
    //       <input type="text" id = "description" placeholder="Description" value={description} onChange={handleDescriptionChange} />
    //     </div>
    //     <button type="submit" disabled={!isFormValid} >Añadir</button>
    //   </form>
    //   <TaskList list={initialTasks} onDeleteOne={handleDeleteOne} onChangeState={handleChangeState}/>

    //   <Box>
    //     <label>You have {pending} pending task(s)</label>
    //     <IconButton aria-label='Search database' icon={<DeleteIcon />} />
    //     <button onClick={handleDeleteAll}></button>
    //   </Box>
    // </div>
  );
}

export default App