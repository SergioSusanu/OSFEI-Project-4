import React, { useContext } from 'react'
import ListItem from './ListItem'
import {AppContext} from '../App'
import { Typography } from '@mui/material';

function ToDoList() {
  const { toDoList, deleteOneTask, filter } = useContext(AppContext);

  return (
    <div className="list">
      {toDoList.length == 0 ? ( // no to-dos
        <Typography variant="h4" component="h2">
          No tasks
        </Typography>
      ) : (
        //show todos
        toDoList.map((item) => {
          if (item.category === filter || filter === "all")
            return (
              <ListItem
                key={item.id}
                item={item}
                deleteOneTask={deleteOneTask}
              />
            );
        })
      )}
    </div>
  );
}

export default ToDoList