import React from 'react'
import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const {setToDoList } = useContext(AppContext);

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

  return (
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
  );
}

export default Form