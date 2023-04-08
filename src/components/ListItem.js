import React, { useState } from 'react'
import { useContext } from "react";
import { AppContext } from "../App";
import { Button, Checkbox, TextField } from '@mui/material';


function ListItem({ item }) {
  const { id, title, category } = item;
  const { deleteOneTask, toggleTaskStatus, updatedTitleForId } =
    useContext(AppContext);
  const [inEditMode, setInEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleInputChange = (e)=> {
    setNewTitle(e.target.value)
  }

  const updateTitle = () => {
    updatedTitleForId(id, newTitle);
    setInEditMode(false)
  }

  const startEditMode =()=>{
    setInEditMode(!inEditMode);
    
  }

  return (
    <article className="to-do-item">
      <Checkbox
        checked={category === "done"}
        onClick={() => toggleTaskStatus(id)}
      />

      {inEditMode ? (
        <TextField
          variant="standard"
          onChange={handleInputChange}
          value={newTitle}
        />
      ) : (
        <p>{title}</p>
      )}
      {/* <p>{category}</p> */}
      <div className="control-Buttons">
        {inEditMode ? 
        <Button onClick={updateTitle}>Save</Button>
        :
        <Button onClick={startEditMode}>edit</Button>
        }
        <Button onClick={() => deleteOneTask(id)}>delete</Button>
      </div>
    </article>
  );
}

export default ListItem