
import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import React from "react";

export const AppContext = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = () => {
    if (inputValue) {
      const newItem = {id: new Date().getTime().toString(), title: inputValue, category: "to-do"}
      setToDoList([...toDoList,newItem]);
    } else {
      // TO DO ALERT empty
    }
   
  };


  return (
    <AppContext.Provider value={{toDoList}}>
      <div className="App">
        <header className="App-header">
          {/* <h1>My To Do List</h1> */}
          {/* To do Form */}

          <form action="#">
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button type="submit" onClick={handleFormSubmit}>
              Add new task
            </button>
          </form>

          <ToDoList />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
