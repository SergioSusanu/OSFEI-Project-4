import React, { useContext } from 'react'
import ListItem from './ListItem'
import {AppContext} from '../App'

function ToDoList() {
    const { toDoList, deleteOneTask, filter } = useContext(AppContext);

  return (
    <div className="list">
       
        { (toDoList.length == 0) ? <h3>No to do's</h3> : // no to-dos
        toDoList.map((item)=>{
          //show todos
          if (item.category === filter || filter === "all")
          return (
            <ListItem key={item.id} item={item} deleteOneTask={deleteOneTask} />
          );
        })
    } 
    </div>
  )
}

export default ToDoList