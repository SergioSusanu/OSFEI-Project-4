import React, { useContext } from 'react'
import ListItem from './ListItem'
import {AppContext} from '../App'

function ToDoList() {
    const appContext = useContext(AppContext);

  return (
    <div className="list">
       
        { (appContext.toDoList) ? <h3>No to do's</h3> : //show todos
        appContext.toDoList.map((item)=>{
            return <ListItem key={item.id} item={item} />
        })
    } 
    </div>
  )
}

export default ToDoList