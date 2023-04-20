import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllTasks, deleteDoneTasks } from '../features/tasks/tasksSlice';

function DeleteButtons() {

      const toDoList = useSelector((state) => state.tasks.items)
      const dispatch =  useDispatch()
    
      if (toDoList.length === 0) return <></>;

  return (
    <div className="delete-btn-container">
     
      <Button
        variant="contained"
        disableElevation
        color="error"
        onClick={()=> dispatch(deleteDoneTasks())}
      >
        Delete done tasks
      </Button>

      <Button
        variant="contained"
        disableElevation
        color="error"
        onClick={() => dispatch(deleteAllTasks())}
      >
        Delete all tasks
      </Button>
    </div>
  );
}

export default DeleteButtons