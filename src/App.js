import { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { myThemeColors } from "./Theme";
import FilterSection from "./components/FilterOptions/FilterSection";
import Header from "./components/Header/Header";
import DeleteButtons from "./components/DeleteButtons";
import Form from "./components/Form";
import { useSelector, useDispatch } from "react-redux";


//Create context
export const AppContext = React.createContext();

function App() {
  const toDoList = useSelector((state) => state.tasks.items);
 
  //Save the tasks in the browser local storage every time the task list gets updated
  useEffect(() => {
    // save to local storagge
    localStorage.setItem("tasks", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
   
      <ThemeProvider theme={myThemeColors}>
        <div className="App">
          <div className="wrapper">
            <div className="content">
              <Header />
              <Form />
              <FilterSection />
              <ToDoList />
              <DeleteButtons />
            </div>
          </div>
        </div>
      </ThemeProvider>

  );
}

export default App;

//MORE TO DO TASKS
// check empty value, falsy
// use html, article, mui, react icons, alert success, danger
// display if list size is 0
// useeffect to remove alert self after 2 sec
// do not show filters if no tasks
