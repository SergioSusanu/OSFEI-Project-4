
import { useState, useContext, useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import React from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from '@mui/material';
import {ThemeProvider } from "@mui/material/styles";
import { myThemeColors } from './Theme';

//Fetch tasks from local storage 
const fetchTasksFromLocalStorage = () => {
  let list = localStorage.getItem('tasks');
  if (list) return JSON.parse(list);
  return [];
}

//Create context 
export const AppContext = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState(fetchTasksFromLocalStorage());
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  //New task form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: inputValue,
        category: "todo",
      };
      setToDoList((prev) => [...prev, newItem]);
      setInputValue("");
    } else {
      // TO DO Alert on empty
    }
  };

  const deleteOneTask = (id) => {
    const newTasks = toDoList.filter((item) => item.id !== id);
    setToDoList(newTasks);
  };

  const toggleTaskStatus = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            category: item.category === "todo" ? "done" : "todo",
          };
        }
        return item;
      })
    );
  };

  // deletes all tasks
  const deleteAll = () => {
    setToDoList([]);
    //TO DO confirmation box before delete
  };

  // deletes all tasks that are done
  const deleteDoneTasks = () => {
    const tasks = toDoList.filter((item) => item.category !== "done");
    setToDoList(tasks);
  };

  //updates one task's title
  const updatedTitleForId = (id, newTitle) => {
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
  };

  //Save the tasks in the browser local storage every time the task list gets updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
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
      <ThemeProvider theme={myThemeColors}>
        <div className="App">
          <div className="wrapper">
            <div className="content">
              <Typography variant="h4" component="h1">
                TodoInput
              </Typography>
              {/* New task form */}
              <form onSubmit={handleFormSubmit}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  size="small"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="form-btn"
                  disableElevation
                >
                  Add new task
                </Button>
              </form>

              <Typography variant="h4" component="h2">
                TodoList
              </Typography>
              {/* Filter buttons */}
              <div className="filters">
                <Button
                  variant="contained"
                  onClick={() => setFilter("all")}
                  disableElevation
                >
                  All
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setFilter("done")}
                  disableElevation
                >
                  Done
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setFilter("todo")}
                  disableElevation
                >
                  Todo
                </Button>
              </div>
              {/* Show the tasks */}
              <ToDoList />
              {/* Delete options buttons  */}
              <div className="delete-btn-container">
                <Button
                  variant="contained"
                  disableElevation
                  color="error"
                  onClick={deleteDoneTasks}
                >
                  Delete done tasks
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  color="error"
                  onClick={deleteAll}
                >
                  Delete all tasks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

//MORE TO DO TASKS
// check empty value, falsy
// use html, article, mui, react icons, alert success, danger
// display if list size is 0
// useeffect to remove alert self after 2 sec  
// do not show filters if no tasks
