import React,{useContext} from 'react'
import { Button } from '@mui/material'
import { AppContext } from '../App';

function DeleteButtons() {

     const { deleteDoneTasks, deleteAll, toDoList, doneTasksPresent } =
       useContext(AppContext);

      if (toDoList.length === 0) return <></>;


  return (
    <div className="delete-btn-container">
      {doneTasksPresent &&
      <Button
        variant="contained"
        disableElevation
        color="error"
        onClick={deleteDoneTasks}
      >
        Delete done tasks
      </Button>
}
      <Button
        variant="contained"
        disableElevation
        color="error"
        onClick={deleteAll}
      >
        Delete all tasks
      </Button>
    </div>
  );
}

export default DeleteButtons