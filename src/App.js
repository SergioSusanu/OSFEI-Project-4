import { useState, useContext, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import React from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { myThemeColors } from "./Theme";
import FilterUsingButtons from "./components/FilterOptions/FilterUsingButtons";
import FilterUsingSelect from "./components/FilterOptions/FilterUsingSelect";
import FilterSection from "./components/FilterOptions/FilterSection";
import Header from "./components/Header/Header";
import DeleteButtons from "./components/DeleteButtons";
import Form from "./components/Form";

//Fetch tasks from local storage
const fetchTasksFromLocalStorage = () => {
  let list = localStorage.getItem("tasks");
  if (list) return JSON.parse(list);
  return [];
};


//Create context
export const AppContext = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState(fetchTasksFromLocalStorage());
  const [filter, setFilter] = useState("all");
  const [settingsFilter, setSettingsFilter] = useState('buttons');
 
 


  //Save the tasks in the browser local storage every time the task list gets updated
  useEffect(() => {
    // save to local storagge
    localStorage.setItem("tasks", JSON.stringify(toDoList));

  }, [toDoList]);

  return (
    <AppContext.Provider
      value={{
        toDoList,
        setToDoList,
   
        filter,
        setFilter,
        settingsFilter,
        setSettingsFilter,
      }}
    >
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
