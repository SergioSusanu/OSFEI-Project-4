
import { useState, useContext, useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import React from "react";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

//Fetch tasks from local storage 
const fetchTasksFromLocalStorage = () => {
  let list = localStorage.getItem('tasks');
  if (list) return JSON.parse(list);
  return [];
}

export const AppContext = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState(fetchTasksFromLocalStorage());
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // preventing form submit
    if (inputValue) {
      const newItem = {id: new Date().getTime().toString(), title: inputValue, category: "todo"}
      setToDoList((prev) => [...prev, newItem]);
      setInputValue('');
    } else {
      // TO DO ALERT empty
    }
   
  };

  const deleteOneTask = (id) => {
    const newTasks = toDoList.filter((item) => item.id !== id)
    setToDoList(newTasks)
  }

  const toggleTaskStatus = (id) => {
    setToDoList(toDoList.map((item) => {
      if (item.id === id) {
        return {...item, category: item.category === "todo" ? "done" : "todo"}
      }
      return item;
    }))
  };

  const deleteAll =()=>{// deletes all tasks
    setToDoList([]);
    //TO DO confirmation box before delete
  }

    const deleteDoneTasks = () => {
      const tasks = toDoList.filter((item) => item.category != "done");
      setToDoList(tasks);
    };

    const updatedTitleForId = (id, newTitle) =>{
      setToDoList(
        toDoList.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              title: newTitle,
            };
          }
          return item;
        })
      );
    }

    //Save the tasks in local storage every time the task list gets updated
    useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(toDoList))
    }, [toDoList]);

  return (
    <AppContext.Provider
      value={{
        toDoList,
        deleteOneTask,
        filter,
        toggleTaskStatus,
        updatedTitleForId,
      }}
    >
      <div className="App">
        <div className="App-header">
          <h1>My To Do List</h1>

          <form onSubmit={handleFormSubmit}>
            <TextField
              id="outlined-basic"
              // label="Write new task"
              variant="outlined"
              type="text"
              size="small"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button type="submit" variant="outlined">
              Add task
            </Button>
          </form>

          <h2>Filter the tasks</h2>
          <div className="filters">
            <Button variant="outlined" onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant="outlined" onClick={() => setFilter("done")}>
              Done
            </Button>
            <Button variant="outlined" onClick={() => setFilter("todo")}>
              Todo
            </Button>
          </div>

          <ToDoList />

          <div className="delete-btn-container">
            <Button variant="outlined" onClick={deleteDoneTasks}>
              Delete done tasks
            </Button>
            <Button variant="outlined" onClick={deleteAll}>
              Delete all tasks
            </Button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

// check empty value, falsy
// use html, article, mui, react icons, alert success, danger
// display if list size is 0
// useeffect to remove alert self after 2 sec  
// do not show filters if no tasks
