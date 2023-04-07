
import { useState, useContext } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import React from "react";

export const AppContext = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState([]);
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

  return (
    <AppContext.Provider
      value={{ toDoList, deleteOneTask, filter, toggleTaskStatus }}
    >
      <div className="App">
        <div className="App-header">
          <h1>My To Do List</h1>

          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button type="submit">Add new task</button>
          </form>

          <h2>Filter the tasks</h2>
          <div className="filters">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("done")}>Done</button>
            <button onClick={() => setFilter("todo")}>Todo</button>
          </div>

          <ToDoList />

          <div className="delete-btn-container">
            <button onClick={deleteDoneTasks}>Delete done tasks</button>
            <button onClick={deleteAll}>Delete all tasks</button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
