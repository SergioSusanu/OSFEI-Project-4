import React, { useContext } from 'react'
import ListItem from './ListItem'
import {AppContext} from '../App'
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList() {
  const {  deleteOneTask, filter, doneTasksPresent } =
    useContext(AppContext);

  const dispatch = useDispatch()
  const toDoList = useSelector((state) => state.tasks.items)


   if (toDoList.length === 0)  // no to-dos
       return (
      <div></div>
       )
      
  return (
    <div className="list">
      {/* show todos */}
      {!doneTasksPresent &&
      <Typography variant="h4" component="h2">
        Tasks:
      </Typography>}

      {toDoList.map((item) => {
        if (item.category === filter || filter === "all")
          return (
            <ListItem key={item.id} item={item} deleteOneTask={deleteOneTask} />
          );
      })}
    </div>
  );
}

export default ToDoList